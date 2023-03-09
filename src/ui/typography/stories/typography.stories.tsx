import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "../typography";

export default {
  title: "Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Header = Template.bind({});
Header.args = {
  children: "Заголовок",
  tag: "h1",
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  children: "Подзаголовок",
  tag: "h2",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  children: "Параграф"
};

export const Label = Template.bind({});
Label.args = {
  children: "Надпись",
  tag: "span",
};
