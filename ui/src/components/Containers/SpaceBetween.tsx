import type { PropsWithChildren } from "react";
import {
  GapSpacing,
  type CrossAxisTypes,
  type DirectionalSpacingProps,
  type MainAxisTypes,
  type SpacingTypes,
} from "../../lib";
import {
  getMarginStyle,
  getPaddingStyle,
  joinStyles,
} from "../../utils/helpers";

type SpaceBetweenOptions = {
  spacing?: SpacingTypes;
  direction?: "vertical" | "horizontal";
  mainAxisAlignment?: "start" | "center" | "end";
  crossAxisAlignment?: "start" | "center" | "end";
  padding?: DirectionalSpacingProps;
  margin?: DirectionalSpacingProps;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

type SpaceBetweenProps = PropsWithChildren & {
  spacing: SpacingTypes;
  direction: "vertical" | "horizontal";
  mainAxisAlignment?: MainAxisTypes;
  crossAxisAlignment?: CrossAxisTypes;
  padding?: DirectionalSpacingProps;
  margin?: DirectionalSpacingProps;
  fullWidth?: boolean;
  className?: string;
  md?: SpaceBetweenOptions;
  lg?: SpaceBetweenOptions;
};

const mainAxisAlignmentStyles = {
  default: {
    start: "ui:justify-start",
    center: "ui:justify-center",
    end: "ui:justify-end",
    between: "ui:justify-between",
  },
  md: {
    start: "ui:md:justify-start",
    center: "ui:md:justify-center",
    end: "ui:md:justify-end",
    between: "ui:md:justify-between",
  },
  lg: {
    start: "ui:lg:justify-start",
    center: "ui:lg:justify-center",
    end: "ui:lg:justify-end",
    between: "ui:lg:justify-between",
  },
};

const crossAxisAlignmentStyles = {
  default: {
    start: "ui:items-start",
    center: "ui:items-center",
    end: "ui:items-end",
    stretch: "ui:items-stretch",
  },
  md: {
    start: "ui:md:items-start",
    center: "ui:md:items-center",
    end: "ui:md:items-end",
    stretch: "ui:md:items-stretch",
  },
  lg: {
    start: "ui:lg:items-start",
    center: "ui:lg:items-center",
    end: "ui:lg:items-end",
    stretch: "ui:lg:items-stretch",
  },
};

const directionStyles = {
  default: {
    vertical: "ui:flex-col",
    horizontal: "ui:flex-row",
  },
  md: {
    vertical: "ui:md:flex-col",
    horizontal: "ui:md:flex-row",
  },
  lg: {
    vertical: "ui:lg:flex-col",
    horizontal: "ui:lg:flex-row",
  },
};

export function SpaceBetween(props: SpaceBetweenProps) {
  // Default Values
  const defaultDirection = directionStyles.default[props.direction];
  const defaultMainAxisAlignment =
    mainAxisAlignmentStyles.default[props.mainAxisAlignment ?? "start"];
  const defaultCrossAxisAlignment =
    crossAxisAlignmentStyles.default[props.crossAxisAlignment ?? "start"];
  const defaultPadding = getPaddingStyle("default", props.padding);
  const defaultMargin = getMarginStyle("default", props.margin);
  const defaultSpacing = GapSpacing.default[props.spacing];
  const defaultWidth = props.fullWidth ? "ui:w-full" : "";

  const defaultStyle = joinStyles(
    defaultDirection,
    defaultMainAxisAlignment,
    defaultCrossAxisAlignment,
    defaultPadding,
    defaultMargin,
    defaultSpacing,
    defaultWidth,
  );
  // MD Values
  const mdDirection = props.md?.direction
    ? directionStyles.md[props.md.direction]
    : "";
  const mdMainAxisAlignment = props.md?.mainAxisAlignment
    ? mainAxisAlignmentStyles.md[props.md.mainAxisAlignment ?? "start"]
    : "";
  const mdCrossAxisAlignment = props.md?.crossAxisAlignment
    ? crossAxisAlignmentStyles.md[props.md.crossAxisAlignment ?? "start"]
    : "";
  const mdPadding = getPaddingStyle("md", props.md?.padding);
  const mdMargin = getMarginStyle("md", props.md?.margin);
  const mdSpacing = props.md?.spacing ? GapSpacing.md[props.md.spacing] : "";
  const mdWidth = props.md?.fullWidth ? "ui:w-full" : "";

  const mdStyle = joinStyles(
    mdDirection,
    mdMainAxisAlignment,
    mdCrossAxisAlignment,
    mdPadding,
    mdMargin,
    mdSpacing,
    mdWidth,
  );

  // LG Values
  const lgDirection = props.lg?.direction
    ? directionStyles.lg[props.lg.direction]
    : "";
  const lgMainAxisAlignment = props.lg?.mainAxisAlignment
    ? mainAxisAlignmentStyles.lg[props.lg.mainAxisAlignment ?? "start"]
    : "";
  const lgCrossAxisAlignment = props.lg?.crossAxisAlignment
    ? crossAxisAlignmentStyles.lg[props.lg.crossAxisAlignment ?? "start"]
    : "";
  const lgPadding = getPaddingStyle("lg", props.lg?.padding);
  const lgMargin = getPaddingStyle("lg", props.lg?.margin);
  const lgSpacing = props.lg?.spacing
    ? GapSpacing.lg[props.lg.spacing]
    : defaultSpacing;
  const lgWidth = props.lg?.fullWidth ? "ui:w-full" : "";

  const lgStyle = joinStyles(
    lgDirection,
    lgMainAxisAlignment,
    lgCrossAxisAlignment,
    lgPadding,
    lgMargin,
    lgSpacing,
    lgWidth,
  );

  const style = joinStyles(
    defaultStyle,
    mdStyle,
    lgStyle,
    props.className ?? "",
  );

  return <div className={`ui:flex ${style}`}>{props.children}</div>;
}
