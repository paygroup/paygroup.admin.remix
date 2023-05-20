import dayjs from "dayjs";
import { z } from "zod";

import type { partner_campaign } from "~/graphql/genql-sdk";

export const validateValues = (values: Partial<partner_campaign>) =>
  schema.safeParse({
    ...values,
    campaign_starting_date: values.campaign_starting_date
      ? new Date(values.campaign_starting_date as string)
      : undefined,
    campaign_ending_date: values.campaign_ending_date
      ? new Date(values.campaign_ending_date as string)
      : undefined,
  });

const schema = z
  .object({
    campaign_title: z
      .string({
        required_error: "Please enter a campaign title",
      })
      .min(3, "Campaign title must be at least 3 characters"),
    campaign_description: z
      .string({
        required_error: "Please enter a campaign description",
      })
      .min(3, "Campaign description must be at least 3 characters"),
    contribution_amount: z
      .string({
        required_error: "Please enter a contribution amount",
      })
      .min(3, "Contribution amount must be at least 3 characters"),
    campaign_starting_date: z.date({
      required_error: "Please enter a campaign starting date",
    }),
    campaign_ending_date: z.date({}).optional(),
  })
  .refine(
    (data) => {
      const start = dayjs(data.campaign_starting_date);
      if (!data.campaign_ending_date) {
        return true;
      }
      const end = dayjs(data.campaign_ending_date);
      return end.isAfter(start);
    },
    {
      message: "Campaign ending date must be after campaign starting date",
      path: ["campaign_ending_date"],
    }
  );
