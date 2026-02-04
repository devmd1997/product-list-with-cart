import type { Meta, StoryObj } from "@storybook/react-vite";
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Placeholder",
  },
};

export const AddToCart: Story = {
  args: {
    primary: false,
    label: "Add to cart",
    iconLeft: AddToCartIcon,
  },
};

export const Increment: Story = {
  args: {
    primary: true,
    label: "1",
    iconLeft: IncrementIcon,
    iconRight: DecrementIcon,
    iconBorders: true,
  },
};
