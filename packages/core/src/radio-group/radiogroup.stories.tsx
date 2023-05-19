import { Grid } from "@rhinobase/docs/components";
import React from "react";
import * as RadioGroup from "./RadioGroup";

const config = {
  title: "New/Radio Group",
  component: RadioGroup,
};
export default config;

const data = ["Red", "Green", "Blue"];

export function Default() {
  return (
    <Grid>
      <RadioGroup.Root orientation="horizontal" defaultValue="red">
        {data.map((item, index) => (
          <RadioGroup.Item value={item.toLowerCase()} id={String(index)}>
            {item}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </Grid>
  );
}

export function Box() {
  return (
    <Grid>
      <RadioGroup.Root
        orientation="horizontal"
        defaultValue="red"
        className="grid grid-cols-3 gap-2"
      >
        {data.map((item, index) => (
          <RadioGroup.Box value={item.toLowerCase()} id={String(index)}>
            <label htmlFor={String(index)}>{item}</label>
          </RadioGroup.Box>
        ))}
      </RadioGroup.Root>
    </Grid>
  );
}

export function VerticalBox() {
  return (
    <Grid>
      <RadioGroup.Root
        orientation="vertical"
        defaultValue="red"
        className="grid grid-cols-1 gap-2"
      >
        {data.map((item, index) => (
          <RadioGroup.Box value={item.toLowerCase()} id={String(index)}>
            <label htmlFor={String(index)}>{item}</label>
          </RadioGroup.Box>
        ))}
      </RadioGroup.Root>
    </Grid>
  );
}

// import { Canvas, Meta, Story, ArgsTable } from "@storybook/addon-docs";

// import { Title, Grid } from "@rhinobase/storybook/components";
// import { RadioGroup, RadioGroupItem, RadioGroupIndicator } from "@rhinobase/ui";

// import { Example, Box, VerticalBox } from "./example";

// <Meta title="UI/RadioGroup" component={RadioGroup} />

// <Title title="Radio Group" suffix="Brief" subtitle="Version 1.0 — Last Update: 2 Jan 2023" />

// ## Defination

// A control that allows the user to checked.

// ## Example

// <Canvas>
//   <Story name="Simple">
//     <Grid>
//       <Example />
//     </Grid>
//   </Story>
// </Canvas>

// <Canvas>
//   <Story name="Box">
//     <Grid>
//       <Box />
//     </Grid>
//   </Story>
// </Canvas>

// <Canvas>
//   <Story name="VerticalBox">
//     <Grid>
//       <VerticalBox />
//     </Grid>
//   </Story>
// </Canvas>
