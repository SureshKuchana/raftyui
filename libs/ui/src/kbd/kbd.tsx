import { classNames } from "../utils";
import React from "react";

// Kbd Component
export type Kbd = JSX.IntrinsicElements["kbd"] & {
  isUnstyled?: boolean;
};

export const Kbd = React.forwardRef<HTMLElement, Kbd>(
  ({ children, className, isUnstyled = false, ...props }, forwardRef) => (
    <kbd
      {...props}
      className={
        isUnstyled
          ? className
          : classNames(
              "text-secondary-500 border-secondary-300 dark:border-secondary-600 dark:text-secondary-300 rounded-md border border-b-4 px-1 text-xs font-medium",
              className,
            )
      }
      ref={forwardRef}
    >
      {children}
    </kbd>
  ),
);
Kbd.displayName = "Kbd";