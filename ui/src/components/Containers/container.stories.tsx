import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";
import { Button } from "../Buttons";
import { ListContainer } from "./ListContainer";

const meta = {
  title: "Components/Containers/Container",
  component: Container,
  tags: ["docsPage"],
  argTypes: {
    title: { control: "text" },
  },
  render: ({ button, ...args }) => (
    <Container {...args} button={button}>
      <ListComponent />
    </Container>
  ),
  decorators: [
    (Story) => (
      <div
        style={{ width: "600px", padding: "24px", backgroundColor: "#fcf8f6" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

const confirmationButton = () => (
  <Button primary={true} label="Confirm Order" />
);

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

const ListComponent = () => {
  return (
    <ListContainer dividers={true}>
      {Array.from({ length: 3 }).map((_, index) => (
        <ChildComponent key={index} />
      ))}
    </ListContainer>
  );
};

export const YourCartContainer = {
  args: {
    title: "Your Cart(7)",
    button: confirmationButton(),
  },
} satisfies Story;
