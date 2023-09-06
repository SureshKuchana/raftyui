"use client";
import React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { classNames } from "../utils";
import { useFieldControlContext } from "../field/context";

const switchClasses = {
  size: {
    sm: "h-4 w-7",
    md: "h-6 w-10",
    lg: "h-7 w-12",
  },
};

const switchThumbClasses = {
  size: {
    sm: "h-3 w-3 data-[state=checked]:translate-x-3",
    md: "h-5 w-5 data-[state=checked]:translate-x-4",
    lg: "h-6 w-6 data-[state=checked]:translate-x-5",
  },
};
// Switch component
export type Switch = Omit<
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  "value" | "disabled" | "required"
> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
};

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  Switch
>(
  (
    {
      className,
      size = "md",
      defaultChecked = false,
      isReadOnly = false,
      isDisabled = false,
      isRequired = false,
      ...props
    },
    forwardedRef,
  ) => {
    const context = useFieldControlContext() ?? {};

    const name = props.name || context.name,
      disabled =
        isDisabled || context.isDisabled || isReadOnly || context.isReadOnly,
      required = isRequired || context.isRequired;

    return (
      <SwitchPrimitives.Root
        {...props}
        defaultChecked={defaultChecked}
        name={name}
        disabled={disabled}
        required={required}
        className={classNames(
          switchClasses.size[size],
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-300 data-[state=unchecked]:bg-secondary-400 dark:data-[state=unchecked]:bg-secondary-600",
          className,
        )}
        ref={forwardedRef}
      >
        <SwitchPrimitives.Thumb
          className={classNames(
            switchThumbClasses.size[size],
            "pointer-events-none block rounded-full bg-secondary-100 dark:data-[state=checked]:bg-secondary-900 data-[state=checked]:bg-secondary-100 shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
          )}
        />
      </SwitchPrimitives.Root>
    );
  },
);
Switch.displayName = "Switch";