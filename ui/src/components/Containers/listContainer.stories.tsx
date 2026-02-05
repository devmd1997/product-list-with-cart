import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListContainer } from "./ListContainer";

type ListContainerProps = Parameters<typeof ListContainer>[0];

type StoryArgs = ListContainerProps & {
  numberOfChildren: number;
};

const ChildComponent = () => {
  return (
    <div className="ui:flex-row-between-center">
      <div className="ui:flex-col-top-left ui:gap-1">
        <h1 className="ui:text-preset-4 ui:font-bold ui:text-text-default">
          Title
        </h1>
        <div className="ui:flex-row-center-content ui:gap-1 ui:text-preset-4">
          <span className="ui:text-text-on-surface ui:font-bold">1x</span>
          <span className="ui:text-text-caption">@ $5.50</span>
          <span className="ui:text-text-caption ui:font-bold">$5.50</span>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: "Components/Containers/ListContainer",
  component: ListContainer,
  tags: ["docsPage"],
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 0 },
  },
  render: ({ numberOfChildren, ...args }) => (
    <ListContainer {...args}>
      {Array.from({ length: numberOfChildren }).map((_, index) => (
        <ChildComponent key={index} />
      ))}
    </ListContainer>
  ),
  decorators: [
    (Story) => (
      <div style={{ width: "600px", padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListWithDividers = {
  args: {
    numberOfChildren: 4,
    dividers: true,
  },
} satisfies Story;
