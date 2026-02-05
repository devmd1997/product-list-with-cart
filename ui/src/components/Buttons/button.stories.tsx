import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import AddToCartIcon from "/images/icon-add-to-cart.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";

const meta = {
  title: "Components/Buttons",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    iconLeft: { control: "text" },
    iconRight: { control: "text" },
    iconBorders: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "160px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn<typeof Button> = ({...args}) => (
  <Button {...args} />
)
type Story = StoryObj<typeof meta>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const AddToCart = Template.bind({});
AddToCart.args = {
  primary: false,
    label: "Add to cart",
    iconLeft: AddToCartIcon,
}

export const Increment: Story = {
  args: {
    primary: true,
    label: "1",
    iconLeft: IncrementIcon,
    iconRight: DecrementIcon,
    iconBorders: true,
  },
};
