import type { PropsWithChildren } from "react";
import {
  GapSpacing,
  GapXSpacing,
  GapYSpacing,
  type GridColumn,
  type SpacingTypes,
} from "../../lib";

export interface GridContainerSettings {
  columns?: GridColumn;
  gapX?: SpacingTypes;
  gapY?: SpacingTypes;
}

type GridContainerProps = PropsWithChildren & {
  sm?: GridContainerSettings;
  md?: GridContainerSettings;
  lg?: GridContainerSettings;
  columns?: GridColumn;
  gap?: SpacingTypes;
  gapX?: SpacingTypes;
  gapY?: SpacingTypes;
  className?: string;
};

const defaultGridStyle = "ui:grid";

const colClass = {
  default: {
    1: "ui:grid-cols-1",
    2: "ui:grid-cols-2",
    3: "ui:grid-cols-3",
    4: "ui:grid-cols-4",
    5: "ui:grid-cols-5",
    6: "ui:grid-cols-6",
    7: "ui:grid-cols-7",
    8: "ui:grid-cols-8",
    9: "ui:grid-cols-9",
    10: "ui:grid-cols-10",
    11: "ui:grid-cols-11",
    12: "ui:grid-cols-12",
  },
  sm: {
    1: "ui:sm:grid-cols-1",
    2: "ui:sm:grid-cols-2",
    3: "ui:sm:grid-cols-3",
    4: "ui:sm:grid-cols-4",
    5: "ui:sm:grid-cols-5",
    6: "ui:sm:grid-cols-6",
    7: "ui:sm:grid-cols-7",
    8: "ui:sm:grid-cols-8",
    9: "ui:sm:grid-cols-9",
    10: "ui:sm:grid-cols-10",
    11: "ui:sm:grid-cols-11",
    12: "ui:sm:grid-cols-12",
  },
  md: {
    1: "ui:md:grid-cols-1",
    2: "ui:md:grid-cols-2",
    3: "ui:md:grid-cols-3",
    4: "ui:md:grid-cols-4",
    5: "ui:md:grid-cols-5",
    6: "ui:md:grid-cols-6",
    7: "ui:md:grid-cols-7",
    8: "ui:md:grid-cols-8",
    9: "ui:md:grid-cols-9",
    10: "ui:md:grid-cols-10",
    11: "ui:md:grid-cols-11",
    12: "ui:md:grid-cols-12",
  },
  lg: {
    1: "ui:lg:grid-cols-1",
    2: "ui:lg:grid-cols-2",
    3: "ui:lg:grid-cols-3",
    4: "ui:lg:grid-cols-4",
    5: "ui:lg:grid-cols-5",
    6: "ui:lg:grid-cols-6",
    7: "ui:lg:grid-cols-7",
    8: "ui:lg:grid-cols-8",
    9: "ui:lg:grid-cols-9",
    10: "ui:lg:grid-cols-10",
    11: "ui:lg:grid-cols-11",
    12: "ui:lg:grid-cols-12",
  },
};

export function GridContainer(props: GridContainerProps) {
  const defaultCols = "ui:grid-cols-1";
  const cols = props.columns ? colClass.default[props.columns] : defaultCols;
  const smCols = props.sm?.columns ? colClass.sm[props.sm.columns] : "";
  const mdCols = props.md?.columns ? colClass.md[props.md.columns] : "";
  const lgCols = props.lg?.columns ? colClass.lg[props.lg.columns] : "";

  const gap = props.gap ? GapSpacing.default[props.gap] : "ui:gap-2";
  const gapX = props.gapX ? GapSpacing.default[props.gapX] : "";
  const gapY = props.gapY ? GapSpacing.default[props.gapY] : "";

  const smGapX = props.sm?.gapX ? GapXSpacing.sm[props.sm.gapX] : "";
  const smGapY = props.sm?.gapY ? GapYSpacing.sm[props.sm.gapY] : "";

  const mdGapX = props.md?.gapX ? GapXSpacing.md[props.md.gapX] : "";
  const mdGapY = props.md?.gapY ? GapYSpacing.md[props.md.gapY] : "";

  const lgGapX = props.lg?.gapX ? GapXSpacing.lg[props.lg.gapX] : "";
  const lgGapY = props.lg?.gapY ? GapYSpacing.lg[props.lg.gapY] : "";

  const defaultStyle = `${cols} ${gap} ${gapX} ${gapY}`;
  const smallStyle = `${smCols} ${smGapX} ${smGapY}`;
  const mediumStyle = `${mdCols} ${mdGapX} ${mdGapY}`;
  const largeStyle = `${lgCols} ${lgGapX} ${lgGapY}`;

  const styles = [
    defaultGridStyle,
    defaultStyle,
    smallStyle,
    mediumStyle,
    largeStyle,
  ]
    .filter((style) => style.trim() !== "")
    .join(" ");

  return <div className={`${styles}`}>{props.children}</div>;
}
