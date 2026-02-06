import type { FontWeight, TextColorTypes, TextPresets } from "../../lib";
import { joinStyles } from "../../utils/helpers";

export type LabelOptions = {
  textPreset?: TextPresets;
  fontWeight?: FontWeight;
};

export interface LabelProps {
  text: string;
  textPreset: TextPresets;
  color?: TextColorTypes;
  fontWeight?: FontWeight;
  className?: string;
  md?: LabelOptions;
  lg?: LabelOptions;
}

const textPresetStyles = {
  default: {
    1: "ui:text-preset-1",
    2: "ui:text-preset-2",
    3: "ui:text-preset-3",
    4: "ui:text-preset-4",
  },
  md: {
    1: "ui:md:text-preset-1",
    2: "ui:md:text-preset-2",
    3: "ui:md:text-preset-3",
    4: "ui:md:text-preset-4",
  },
  lg: {
    1: "ui:lg:text-preset-1",
    2: "ui:lg:text-preset-2",
    3: "ui:lg:text-preset-3",
    4: "ui:lg:text-preset-4",
  },
};

const fontWeightStyles = {
  default: {
    bold: "ui:font-bold",
    medium: "ui:font-medium",
    regular: "ui:font-regular",
    semibold: "ui:font-semibold",
  },
  md: {
    bold: "ui:md:font-bold",
    medium: "ui:md:font-medium",
    regular: "ui:md:font-regular",
    semibold: "ui:md:font-semibold",
  },
  lg: {
    bold: "ui:lg:font-bold",
    medium: "ui:lg:font-medium",
    regular: "ui:lg:font-regular",
    semibold: "ui:lg:font-semibold",
  },
};

const colorStyles = {
  default: "ui:text-text-default",
  onSurface: "ui:text-text-on-surface",
  caption: "ui:text-text-caption",
};

export function Label(props: LabelProps) {
  const { text, textPreset, fontWeight, className, md, lg } = props;

  const defaultTextPreset = textPresetStyles.default[textPreset];
  const mdTextPreset = md?.textPreset ? textPresetStyles.md[md.textPreset] : "";
  const lgTextPreset = lg?.textPreset ? textPresetStyles.lg[lg.textPreset] : "";

  const defaultFontWeight = fontWeightStyles.default[fontWeight ?? "regular"];
  const mdFontWeight = md?.fontWeight ? fontWeightStyles.md[md.fontWeight] : "";
  const lgFontWeight = lg?.fontWeight ? fontWeightStyles.lg[lg.fontWeight] : "";

  const colorStyle = colorStyles[props.color ?? "default"];

  const styles = [
    defaultTextPreset,
    mdTextPreset,
    lgTextPreset,
    defaultFontWeight,
    mdFontWeight,
    lgFontWeight,
    colorStyle,
    className ?? "",
  ];

  const textStyle = joinStyles(...styles);
  console.log(textStyle);
  return <span className={textStyle}>{text}</span>;
}
