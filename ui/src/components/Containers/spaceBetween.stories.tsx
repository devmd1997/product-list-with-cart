import { Label } from "../Labels";
import { SpaceBetween } from "./SpaceBetween";
import type { Meta, StoryObj } from "@storybook/react-vite";

type SpaceBetweenProps = Parameters<typeof SpaceBetween>[0];

type StoryArgs = SpaceBetweenProps & {
  numberOfChildren: number;
};

const ChildComponent = ({ index }: { index: number }) => {
  const padding = index % 2 === 0 ? "ui:p-3" : "ui:p-6";
  return (
    <div className={`ui:bg-blue-300 ui:rounded-sm ${padding}`}>
      <Label textPreset={3} text={`Text ${index}`} />
    </div>
  );
};

const meta = {
  title: "Components/Containers/SpaceBetween",
  component: SpaceBetween,
  tags: ["docsPage"],
  render: ({ numberOfChildren, ...args }) => (
    <SpaceBetween
      {...args}
      className="ui:border ui:border-accent ui:border-dashed ui:rounded-sm ui:p-4"
    >
      {Array.from({ length: numberOfChildren }).map((_, index) => (
        <ChildComponent key={index} index={index + 1} />
      ))}
    </SpaceBetween>
  ),
  decorators: [
    (Story) => (
      <div className="ui:bg-background-default ui:max-w-100 ui:min-h-screen ui:p-4 ui:flex-row-center-content">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<StoryArgs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SpaceBetweenHorizontal = {
  args: {
    direction: "horizontal",
    spacing: "md",
    mainAxisAlignment: "center",
    crossAxisAlignment: "center",
    numberOfChildren: 4,
  },
} satisfies Story;

export const SpaceBetweenVertical = {
  args: {
    direction: "vertical",
    spacing: "lg",
    mainAxisAlignment: "center",
    crossAxisAlignment: "center",
    numberOfChildren: 4,
  },
};

export const ExpandWidth = {
  args: {
    direction: "horizontal",
    spacing: "md",
    mainAxisAlignment: "between",
    crossAxisAlignment: "center",
    fullWidth: true,
    numberOfChildren: 4,
  },
};
