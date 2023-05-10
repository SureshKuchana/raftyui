import { useRef } from "react";
import { useDatePickerState } from "react-stately";
import { AriaDatePickerProps, DateValue, useDatePicker } from "react-aria";
import { FieldButton } from "./FieldButton";
import { Calendar } from "./Calendar";
import { DateField } from "./DateField";
import { Dialog } from "./Dialog";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Popover } from "../combobox/PopOver";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

const DatePickerClasses = cva(
  "transition-colors rounded-l-md pr-10 relative flex items-center flex-1",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-1.5",
        lg: "px-4 py-2 text-lg",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline:
          "bg-transparent read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
        ghost: "border border-transparent",
      },
    },
    compoundVariants: [
      {
        variant: ["outline", "solid"],
        className:
          "border border-gray-300 group-focus-within:ring-2 group-focus-within:ring-primary-100 group-hover:border-primary-400 group-focus-within:border-primary-500 group-focus-within:group-hover:border-primary-500",
      },
    ],
  }
);

export function DatePickers<T extends DateValue>(
  props: AriaDatePickerProps<T> & {
    variant?: "solid" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
  }
) {
  const { size = "md", variant = "outline" } = props;
  const state = useDatePickerState(props);
  const ref = useRef(null);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  return (
    <div className="relative inline-flex flex-col text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {props.label}
      </span>
      <div {...groupProps} ref={ref} className="flex group">
        <div className={classNames(DatePickerClasses({ size, variant }))}>
          <DateField {...fieldProps} />
          {state.validationState === "invalid" && (
            <ExclamationTriangleIcon className="w-6 h-6 text-red-500 absolute right-1" />
          )}
        </div>
        <FieldButton
          {...buttonProps}
          isPressed={state.isOpen}
          variant={variant}
        >
          <CalendarIcon className="w-5 h-5 text-gray-700 group-focus-within:text-primary-500" />
        </FieldButton>
      </div>
      {state.isOpen && (
        <Popover triggerRef={ref} state={state} placement="bottom start">
          <Dialog {...dialogProps}>
            <Calendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </div>
  );
}
