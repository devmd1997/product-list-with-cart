import type { Meta, StoryFn } from "@storybook/react-vite";
import { Label } from "./Label";

const meta = {
  title: "Components/Labels",
  component: Label,
  tags: ["docsPage"],
} satisfies Meta<typeof Label>;

export default meta;

const sampleTitleText = "Lorem ipsum dolor sit amet consectetuer";
const sampleParagraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const Template: StoryFn<typeof Label> = ({ ...args }) => <Label {...args} />;

export const TextPreset1 = Template.bind({});
TextPreset1.args = {
  text: sampleTitleText,
  textPreset: 1,
};

export const TextPreset2 = Template.bind({});
TextPreset2.args = {
  text: sampleTitleText,
  textPreset: 2,
};

export const TextPreset3 = Template.bind({});
TextPreset3.args = {
  text: sampleParagraphText,
  textPreset: 3,
};

export const TextPreset4 = Template.bind({});
TextPreset4.args = {
  text: sampleParagraphText,
  textPreset: 4,
};

export const ResponsiveText = Template.bind({});
ResponsiveText.args = {
  text: "This text changes in different screen sizes",
  textPreset: 4,
  md: {
    textPreset: 3,
  },
  lg: {
    textPreset: 1,
  },
};
