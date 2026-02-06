import type { PropsWithChildren } from "react";

type PageProps = PropsWithChildren & {
  className?: string;
};

export function Page(props: PageProps) {
  return (
    <main
      className={`ui:min-h-screen ui:w-full ui:bg-background-default ${props.className}`}
    >
      {props.children}
    </main>
  );
}
