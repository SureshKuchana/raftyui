import { createThread, useThread } from "@fibr/react";
import { Label, Switch } from "@rafty/ui";
import { useId } from "react";
import { FieldWrapper } from "../FieldWrapper";

export type SwitchGroupField = {
  name: string;
  label?: string;
  options: { label: string; value: string | number }[];
};

export function SwitchGroupField() {
  const id = useId();
  // Getting component config
  const config = useThread<SwitchGroupField>();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <div className="space-y-2.5">
        {config.options.map(({ label, value }, index) => (
          <div key={`${id}-${index}`} className="flex gap-2">
            <Switch id={String(value)} defaultValue={value} />
            <Label htmlFor={String(value)}>{label}</Label>
          </div>
        ))}
      </div>
    </FieldWrapper>
  );
}

export const switchGroup = createThread<SwitchGroupField>("switch-group");
