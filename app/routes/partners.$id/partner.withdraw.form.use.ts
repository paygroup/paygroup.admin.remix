import { useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import type { ParsedPhoneNumber } from "awesome-phonenumber";
import { parsePhoneNumber } from "awesome-phonenumber";
import { useController, useForm } from "react-hook-form";

import type { en_payment_providers_enum } from "~/graphql/genql-sdk";

import type { WithdrawPayload } from "./route.action";
import type { fetchPartnerData } from "./route.loader";

export const usePartnerWithdrawForm = () => {
  const fetcher = useFetcher();

  const { partner } =
    useLoaderData<Awaited<ReturnType<typeof fetchPartnerData>>>();

  const { control, handleSubmit, reset } = useForm<WithdrawPayload>();
  const { state } = useNavigation();
  const isProcessing = state === "submitting";

  const amount = useController({
    control,
    name: "amount",
    rules: { required: "amount required" },
  });

  const carrier = useController({
    control,
    name: "carrier",
    rules: { required: "carrier required" },
  });

  const phone = useController({
    control,
    name: "phone",
    rules: {
      required: "phone required",
      validate: (value) => {
        const parsed = parsePhoneNumber(value, { regionCode: "CD" });
        if (!isValidPhone(parsed)) {
          return "only valid DRC numbers are allowed (+234)";
        }

        if (carrier.field.value) {
          if (
            !validateOperator({
              operator: carrier.field.value,
              significant: parsed.number?.significant,
            })
          ) {
            return "Invalid phone number for selected carrier";
          }
        }

        return (
          isValidPhone(parsed) || "only valid DRC numbers are allowed (+234)"
        );
      },
    },
  });

  const recipient = useController({
    control,
    name: "recipient",
    rules: {
      required: "recipient required",
    },
  });

  const submit = handleSubmit((data) => {
    const parsed = parsePhoneNumber(data.phone, { regionCode: "CD" });

    const campaign = partner.partner_campaigns[0];
    const payload = {
      ...data,
      groupid: campaign.groups[0].id,
      memberid: campaign.groups[0].members[0].id,
      periodid: campaign.groups[0].members[0].periods[0].id,
      phone: formatPhoneNumber({
        significantNumber: parsed!.number!.significant,
        provider: data.carrier,
      }),
    };

    fetcher.submit(payload as any, { method: "POST" });
  });

  const handleClose = (cb: () => void) => () => {
    reset();
    cb();
  };

  return {
    amount,
    phone,
    carrier,
    recipient,
    isProcessing,
    submit,
    handleClose,
  };
};

const isValidPhone = (parsed: ParsedPhoneNumber) =>
  parsed.valid &&
  parsed.canBeInternationallyDialled &&
  parsed.regionCode === "CD";

const validateOperator = (props: {
  operator?: en_payment_providers_enum;
  significant?: string;
}) => {
  const { operator, significant } = props;
  return mobileOperatorsPrefixes[operator!]?.some((pred) =>
    significant?.startsWith(pred)
  );
};

const formatPhoneNumber = (props: {
  significantNumber: string;
  provider: en_payment_providers_enum;
}) => {
  const { provider, significantNumber } = props;

  switch (provider) {
    case "AIRTEL_CD":
      return significantNumber;
    case "AFRICELL_CD":
    case "ORANGE_MONEY_CD":
      return `0${significantNumber}`;
    default: // MPESA
      return `243${significantNumber}`;
  }
};

const mobileOperatorsPrefixes: {
  [name in en_payment_providers_enum]?: string[];
} = {
  ORANGE_MONEY_CD: ["80", "84", "85", "89"],
  VODACOM_CD: ["81", "82", "83"],
  AIRTEL_CD: ["99", "97"],
  AFRICELL_CD: ["90", "91"],
};
