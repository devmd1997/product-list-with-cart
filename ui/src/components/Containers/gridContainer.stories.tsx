import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductItem } from "../Products";
import { GridContainer } from "./GridContainer";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { CUSTOM_VIEW_PORTS } from "../../../.storybook/preview";

type GridContainerProps = Parameters<typeof GridContainer>[0];

type StoryArgs = GridContainerProps & {
  numberOfChildren: number;
};

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

const meta = {
  title: "Components/Containers/GridContainer",
  component: GridContainer,
  tags: ["docsPage"],
  argTypes: {
    numberOfChildren: { type: "number" },
  },
  render: ({ numberOfChildren, ...args }) => (
    <GridContainer {...args}>
      {Array.from({ length: numberOfChildren }).map((_, index) => {
        return (
          <ProductItem key={index} product={productData} countInCart={0} />
        );
      })}
    </GridContainer>
  ),
  parameters: {
    viewport: {
      options: { ...INITIAL_VIEWPORTS, ...CUSTOM_VIEW_PORTS },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      const { viewport } = parameters;
      console.log(parameters);
      switch (viewport?.type) {
        case "desktop":
        case "tablet":
          return (
            <div className="ui:bg-background-default ui:p-4 ui:flex-row-center-content ui:w-180">
              <div className="ui:w-100">
                <Story />
              </div>
            </div>
          );
        case "mobile":
          return (
            <div className="ui:bg-background-default ui:p-4 ui:flex-row-center-content ui:w-[375px]">
              <div className="ui:w-100">
                <Story />
              </div>
            </div>
          );
        default:
          return (
            <div className="ui:md:w-86 ui:lg:w-100 ui:w-[337px] ui:my-0 ui:mx-auto">
              <Story />
            </div>
          );
      }
    },
  ],
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductGrid = {
  args: {
    numberOfChildren: 9,
    columns: 1,
    gapX: "md",
    gapY: "lg",
    md: {
      columns: 3,
      gapX: "lg",
      gapY: "md",
    },
  },
} satisfies Story;
