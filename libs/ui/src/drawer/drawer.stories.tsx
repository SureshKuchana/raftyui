import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerDescription,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
} from "./Drawer";
import { useState } from "react";
import { Button } from "../button";

const meta: Meta<typeof Drawer> = {
  title: "Components / Drawer",
  args: {
    size: "md",
    side: "right",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
    side: {
      control: "select",
      options: ["right", "left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: function Render({ size, side }) {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer size={size} side={side} open={isOpen} onOpenChange={setOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerTitle>Drawer Header</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DrawerDescription>
            <DrawerClose />
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};
