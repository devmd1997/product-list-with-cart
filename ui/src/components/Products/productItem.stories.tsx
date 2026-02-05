import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductItem } from "./productItem";

const meta = {
  title: "Components/Product",
  component: ProductItem,
  tags: ["docsPage"],
  decorators: [
    (Story) => (
      <div style={{ width: "213px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const productData = {
  image: {
    thumbnail: "/images/image-waffle-thumbnail.jpg",
    mobile: "/images/image-waffle-mobile.jpg",
    tablet: "/images/image-waffle-tablet.jpg",
    desktop: "/images/image-waffle-desktop.jpg",
  },
  name: "Waffle with Berries",
  category: "Waffle",
  price: 6.5,
};

export const Default: Story = {
  args: {
    product: productData,
    countInCart: 0,
  },
};

export const Selected: Story = {
  args: {
    product: productData,
    countInCart: 1,
  },
};
