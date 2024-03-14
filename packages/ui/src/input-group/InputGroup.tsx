"use client";
import { getValidChildren } from "@rafty/shared";
import { type HTMLAttributes, forwardRef, useRef } from "react";
import { classNames } from "../utils";
import { LeftAddon } from "./LeftAddon";
import { Prefix } from "./Perfix";
import { RightAddon } from "./RightAddon";
import { Suffix } from "./Suffix";
import { type InputGroupContext, InputGroupProvider } from "./context";

// InputGroup Component
export type InputGroup = HTMLAttributes<HTMLDivElement> &
  Partial<InputGroupContext>;

export const InputGroup = forwardRef<HTMLDivElement, InputGroup>(
  (
    {
      children,
      className,
      isLeftAddon = false,
      isRightAddon = false,
      isPrefix = false,
      isSuffix = false,
      size = "md",
      ...props
    },
    forwardedRef,
  ) => {
    const validChildren = getValidChildren(children);
    const rightAddons = [];
    const leftAddons = [];
    const remaining = [];

    for (const child of validChildren) {
      switch (child.type.displayName) {
        case LeftAddon.displayName:
          isLeftAddon = true;
          leftAddons.push(child);
          break;

        case RightAddon.displayName:
          isRightAddon = true;
          rightAddons.push(child);
          break;

        case Prefix.displayName:
          isPrefix = true;
          remaining.push(child);
          break;

        case Suffix.displayName:
          isSuffix = true;
          remaining.push(child);
          break;

        default:
          remaining.push(child);
          break;
      }
    }

    return (
      <InputGroupProvider
        value={{
          isLeftAddon,
          isRightAddon,
          isPrefix,
          isSuffix,
          size,
        }}
      >
        <div
          {...props}
          className={classNames("flex", className)}
          ref={forwardedRef}
        >
          {leftAddons}
          <div className="relative w-full">{remaining}</div>
          {rightAddons}
        </div>
      </InputGroupProvider>
    );
  },
);
InputGroup.displayName = "InputGroup";
