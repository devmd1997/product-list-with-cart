import type { PropsWithChildren } from "react";

export type ModalSize = "full" | "default";

type ModalContainerSettings = {
  width?: ModalSize;
};

type ModalProps = PropsWithChildren & {
  isVisible: boolean;
  onDismiss?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  settings?: ModalContainerSettings;
  md?: ModalContainerSettings;
  lg?: ModalContainerSettings;
};

const fullSize = {
  default: "ui:w-full",
  sm: "ui:sm:w-full",
  md: "ui:md:w-full",
  lg: "ui:lg:w-full",
};

const initialSize = {
  default: "ui:w-[40%]",
  md: "ui:md:w-[40%]",
  lg: "ui:lg:w-[40%]",
};

export function Modal(props: ModalProps) {
  const { settings, md, lg } = props;

  const defaultSize =
    settings?.width === "full" ? fullSize.default : initialSize.default;
  const mdFullSize = md?.width === "full" ? fullSize.md : initialSize.md;
  const lgFullSize = lg?.width === "full" ? fullSize.lg : initialSize.lg;

  const modalContainerStyles = [defaultSize, mdFullSize, lgFullSize];

  const modalContainerStyle = modalContainerStyles
    .filter((style) => style.trim() !== "")
    .join(" ");

  return (
    props.isVisible && (
      <div
        className="ui:fixed ui:inset-0 ui:bg-black/50 ui:z-1000 ui:flex-col-center"
        onClick={() => {
          if (props.onDismiss) {
            props.onDismiss();
          }
        }}
      >
        <div className={`modal-container ${modalContainerStyle}`}>
          {props.header}
          {props.children}
          {props.footer}
        </div>
      </div>
    )
  );
}
