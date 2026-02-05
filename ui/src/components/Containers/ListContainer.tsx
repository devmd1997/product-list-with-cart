import { Children, type PropsWithChildren } from "react";
import { Spacing, type SpacingTypes } from "../../lib/styleTypes";

type ListContainerProps = PropsWithChildren & {
  className?: string;
  spacing?: SpacingTypes;
  dividers?: boolean;
};

export function ListContainer(props: ListContainerProps) {
  const { className, spacing, children, dividers } = props;
  const dividersStyle = dividers ? "ui:after:ui:list-dividers" : "";
  return (
    <ul
      className={`ui:w-full ui:flex-col-top-left ${className}`}
      style={{
        gap: spacing ? Spacing[spacing] : Spacing.md,
      }}
    >
      {Children.map(children, (child, index) => {
        return (
          <li className={`${dividersStyle}`} key={index}>
            {child}
          </li>
        );
      })}
    </ul>
  );
}
