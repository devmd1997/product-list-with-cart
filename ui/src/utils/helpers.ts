import { MarginSpacing, MarginXSpacing, MarginYSpacing, PaddingSpacing, PaddingXSpacing, PaddingYSpacing, type DirectionalSpacingProps, type SpacingMap } from "../lib";

export const joinStyles = (...styles: string[]) => styles.filter((style) => style.trim() !== "").join(" ");

export const getPaddingStyle = (screenSize: keyof SpacingMap, props?: DirectionalSpacingProps,) => {
    if (!props) return "";
    const { x, y, all } = props;
    if (all) {
        return PaddingSpacing[screenSize][all];
    }
    
    const xStyle = x ? PaddingXSpacing[screenSize][x] : "";
    const yStyle = y ? PaddingYSpacing[screenSize][y] : "";
    return joinStyles(xStyle, yStyle);
}

export const getMarginStyle = (screenSize: keyof SpacingMap, props?: DirectionalSpacingProps) => {
    if (!props) return "";
    const { x, y, all } = props;
    if (all) {
        return MarginSpacing[screenSize][all];
    }

    const xStyle = x ? MarginXSpacing[screenSize][x] : "";
    const yStyle = y ? MarginYSpacing[screenSize][y] : "";
    return joinStyles(xStyle, yStyle);


}