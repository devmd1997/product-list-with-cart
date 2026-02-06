import { createContext, useContext, type PropsWithChildren } from "react";
import type { Container } from "react-dom/client";

type ContainerProps = PropsWithChildren & {
  className?: string;
  title?: string;
  button?: React.ReactNode;
  backgroundColor?: "primary" | "secondary";
};

type ContainerContext = {
  props: ContainerProps;
};

const ContainerContext = createContext<ContainerContext | undefined>(undefined);

function useContainerContext() {
  const context = useContext(ContainerContext);
  if (!context) {
    throw new Error(
      "useContainerContext must be used within a ContainerProvider",
    );
  }
  return context;
}

export function Container(props: ContainerProps) {
  const { className, title, button, children, backgroundColor } = props;

  const backgroundStyle =
    backgroundColor === "secondary"
      ? "ui:bg-background-secondary"
      : "ui:bg-background-default";
  return (
    <ContainerContext.Provider value={{ props }}>
      <section
        className={`ui:flex-col-top-left ui:w-full ui:gap-3 ui:p-3 ${backgroundStyle} ui:rounded-xl ${className}`}
      >
        {title && <Container.Header />}
        {children}
        {button}
      </section>
    </ContainerContext.Provider>
  );
}

Container.Header = function ContainerHeader() {
  const { props } = useContainerContext();
  const { title } = props;

  return <h1 className="ui:text-preset-2 ui:text-text-on-surface">{title}</h1>;
};
