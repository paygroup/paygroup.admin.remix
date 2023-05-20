import { Input } from "@chakra-ui/react";

import type { SingleDatepickerProps } from "./single";

export const EasyDatePicker: React.FC<SingleDatepickerProps> = ({
  configs,
  propsConfigs,
  usePortal,
  disabledDates,
  defaultIsOpen = false,
  closeOnSelect = true,
  ...props
}) => {
  const {
    date: selectedDate,
    name,
    disabled,
    onDateChange,
    id,
    minDate,
    maxDate,
  } = props;

  return <Input className="easy-picker" color="white" value="Hello world!" />;
};
