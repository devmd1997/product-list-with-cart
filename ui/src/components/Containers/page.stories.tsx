import type { Meta, StoryObj } from "@storybook/react-vite";
import { Page } from "./Page";
import { SpaceBetween } from "./SpaceBetween";
import { Label } from "../Labels";
import { GridContainer } from "./GridContainer";
import { ProductItem } from "../Products";

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

const PageContent = () => {
  return (
    <SpaceBetween direction="vertical" spacing="lg" fullWidth={true}>
      <Label textPreset={1} text="Deserts" />
      <GridContainer columns={1} gap="md" md={{ columns: 3 }}>
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <ProductItem key={index} product={productData} countInCart={0} />
          );
        })}
      </GridContainer>
    </SpaceBetween>
  );
};

const meta = {
  title: "Components/Containers/Page",
  component: Page,
  tags: ["docsPage"],
  render: ({ ...args }) => (
    <Page {...args} className="ui:p-4 ui:md:p-5 ui:lg:py-11 ui:lg:px-5">
      <PageContent />
    </Page>
  ),
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ResponsivePage = {
  args: {},
} satisfies Story;
