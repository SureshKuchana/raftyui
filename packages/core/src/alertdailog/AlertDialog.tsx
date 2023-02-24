import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import React, { ComponentProps } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "../index";
import {
  AlertDialogProvider,
  AlertDialogContext,
  useAlertDialogContext,
} from "./context";

// AlertDialog Component
type Root = ComponentProps<(typeof AlertDialogPrimitive)["AlertDialog"]> &
  AlertDialogContext;
export const Root = React.forwardRef<HTMLDivElement, Root>(
  ({ children, size = "md", ...props }, forwardedRef) => (
    <AlertDialogProvider value={{ size }}>
      {/* TODO: Add reference to the below element */}
      <AlertDialogPrimitive.Root {...props}>
        {children}
      </AlertDialogPrimitive.Root>
    </AlertDialogProvider>
  ),
);

Root.displayName = "AlertDialog.Root";

// AlertDialogButton Component
type Trigger = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogTrigger"]
> &
  Button;
export const Trigger = React.forwardRef<HTMLButtonElement, Trigger>(
  (
    {
      children,
      className,
      variant,
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      disabled = undefined,
      active = undefined,
      loading = undefined,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <AlertDialogPrimitive.Trigger {...props} ref={forwardedRef} asChild>
        <Button
          variant={variant || "ghost"}
          colorScheme={colorScheme}
          className={className}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          disabled={disabled}
          active={active}
          loading={loading}
        >
          {children}
        </Button>
      </AlertDialogPrimitive.Trigger>
    );
  },
);

Trigger.displayName = "AlertDialog.Trigger";
// AlertDialogContent Component
type Content = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogContent"]
>;
export const Content = React.forwardRef<HTMLDivElement, Content>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useAlertDialogContext();

    return (
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="animate-slide-down-fade fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity" />
        {/*zIndex one less than Toast */}
        <AlertDialogPrimitive.Content
          {...props}
          className={classNames(
            "dark:bg-secondary-800 dark:text-secondary-50 rounded-base fixed left-1/2 top-1/2 z-[9998] min-w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white text-left shadow-xl transition-all duration-300 focus-visible:outline-none sm:w-full sm:align-middle",
            size == "lg" && "max-w-[40rem] p-8",
            size == "md" && "max-w-[35rem] p-7",
            size == "sm" && "max-w-[30rem] p-6",
            "overflow-y-auto overscroll-auto md:h-auto md:max-h-[inherit]",
            className,
          )}
          ref={forwardedRef}
        >
          {children}
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    );
  },
);
Content.displayName = "AlertDialog.Content";

// AlertDialogTitle Component
type Title = ComponentProps<(typeof AlertDialogPrimitive)["AlertDialogTitle"]>;
export const Title = React.forwardRef<HTMLDivElement, Title>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useAlertDialogContext();

    return (
      <AlertDialogPrimitive.Title
        {...props}
        className={classNames(
          size == "lg" && "text-xl",
          size == "md" && "text-xl",
          size == "sm" && "text-lg",
          "mb-2 font-semibold",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </AlertDialogPrimitive.Title>
    );
  },
);
Title.displayName = "AlertDialog.Title";

// AlertDialogBody Component
type Body = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogDescription"]
>;
export const Body = React.forwardRef<HTMLDivElement, Body>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <AlertDialogPrimitive.Description {...props} ref={forwardedRef}>
        <div className={className}>{children}</div>
      </AlertDialogPrimitive.Description>
    );
  },
);
Body.displayName = "AlertDialog.Body";

export const Action = AlertDialogPrimitive.Action;
export const Cancel = AlertDialogPrimitive.Cancel;
