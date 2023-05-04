import React, { forwardRef } from "react";
import { classNames } from "../utils";

export type UnorderedList = JSX.IntrinsicElements["ul"];

export const UnorderedList = forwardRef<HTMLUListElement, UnorderedList>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <ul
        ref={forwardedRef}
        {...props}
        className={classNames("list-inside list-disc", className)}
      >
        {children}
      </ul>
    );
  },
);

UnorderedList.displayName = "UnorderedList";
