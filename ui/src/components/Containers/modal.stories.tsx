import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./Modal";
import { ListContainer } from "./ListContainer";
import { Button } from "../Buttons";

type ModalProps = Parameters<typeof Modal>[0];

type StoryArgs = ModalProps & {
  headerLabel: string;
  useFooter: boolean;
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

const ModalContent = () => (
  <div className="ui:flex-col-top-left ui:gap-3 ui:bg-background-default ui:p-3 ui:w-full">
    <ListContainer dividers={true}>
      {Array.from({ length: 5 }).map((_, index) => (
        <ChildComponent key={index} />
      ))}
    </ListContainer>
  </div>
);
interface ModalHeaderProps {
  title: string;
}
const ModalHeader = ({ title }: ModalHeaderProps) => {
  return <h1 className="ui:text-preset-1 ui:text-text-default">{title}</h1>;
};

const ModalFooter = () => {
  return <Button primary={true} label="Start New Order" />;
};

const meta = {
  title: "Components/Containers/Modal",
  component: Modal,
  tags: ["docsPage"],
  render: ({ headerLabel, useFooter, ...args }) => (
    <Modal
      {...args}
      footer={useFooter ? <ModalFooter /> : undefined}
      header={<ModalHeader title={headerLabel ?? "Order Confirmed"} />}
    >
      <ModalContent />
    </Modal>
  ),
  decorators: [
    (Story) => (
      <div className="ui:w-full ui:bg-background-default">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultModal = {
  args: {
    useFooter: true,
    headerLabel: "Order Confirmed",
    isVisible: true,
    settings: {
      width: "full",
    },
    md: {
      width: "full",
    },
    lg: {
      width: "default",
    },
  },
} satisfies Story;
