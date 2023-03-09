import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Text Text Text Text </Button>
);
