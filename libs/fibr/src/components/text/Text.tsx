import { createThread, useThread } from "@fibr/react";
import { classNames } from "@rafty/ui";
import { TooltipWrapper } from "../TooltipWrapper";

export type Text = {
  value: string;
  hidden?: boolean;
  tooltip?: string;
};

export function Text() {
  // Getting component config
  const { value, hidden, tooltip } = useThread<Text>();

  const component = (
    <p
      className={classNames(hidden && "hidden", "bg-secondary-100 font-medium")}
    >
      {value}
    </p>
  );

  if (tooltip)
    return <TooltipWrapper content={tooltip}>{component}</TooltipWrapper>;

  return component;
}

export const text = createThread<Text>("text");
