
type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<Min extends number, Max extends number> = Exclude<
  Enumerate<Max>,
  Enumerate<Min>
>;

export type GridColumn = Range<1, 12>;

export type SpacingTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const Spacing = {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    xxl: '48px',
}

export interface SpacingProps {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string
}

export interface SpacingMap {
    default: SpacingProps;
    sm: SpacingProps;
    md: SpacingProps;
    lg: SpacingProps;
}

export const GapSpacing: SpacingMap = {
    default:{
        xs: "ui:gap-1",
        sm: "ui:gap-2",
        md: "ui:gap-3",
        lg: "ui:gap-4",
        xl: "ui:gap-5",
        xxl: "ui:gap-6",
    },
    sm: {
        xs: "ui:sm:gap-1",
        sm: "ui:sm:gap-2",
        md: "ui:sm:gap-3",
        lg: "ui:sm:gap-4",
        xl: "ui:sm:gap-5",
        xxl: "ui:sm:gap-6",
    },
    md: {
        xs: "ui:md:gap-1",
        sm: "ui:md:gap-2",
        md: "ui:md:gap-3",
        lg: "ui:md:gap-4",
        xl: "ui:md:gap-5",
        xxl: "ui:md:gap-6",
    },
    lg: {
        xs: "ui:lg:gap-1",
        sm: "ui:lg:gap-2",
        md: "ui:lg:gap-3",
        lg: "ui:lg:gap-4",
        xl: "ui:lg:gap-5",
        xxl: "ui:lg:gap-6",
    }
}

export const GapXSpacing: SpacingMap = {
    default: {
        xs: "ui:gap-x-1",
        sm: "ui:gap-x-2",
        md: "ui:gap-x-3", 
        lg: "ui:gap-x-4",
        xl: "ui:gap-x-5",
        xxl: "ui:gap-x-6",
    },
    sm: {
        xs: "ui:sm:gap-x-1",
        sm: "ui:sm:gap-x-2",
        md: "ui:sm:gap-x-3",
        lg: "ui:sm:gap-x-4",
        xl: "ui:sm:gap-x-5",
        xxl: "ui:sm:gap-x-6",
    },
    md: {
        xs: "ui:md:gap-x-1",
        sm: "ui:md:gap-x-2",
        md: "ui:md:gap-x-3",
        lg: "ui:md:gap-x-4",
        xl: "ui:md:gap-x-5",
        xxl: "ui:md:gap-x-6",
    },
    lg: {
        xs: "ui:lg:gap-x-1",
        sm: "ui:lg:gap-x-2",
        md: "ui:lg:gap-x-3",
        lg: "ui:lg:gap-x-4",
        xl: "ui:lg:gap-x-5",
        xxl: "ui:lg:gap-x-6",
    }
}

export const GapYSpacing: SpacingMap = {
    default: {
        xs: "ui:gap-y-1",
        sm: "ui:gap-y-2",
        md: "ui:gap-y-3",
        lg: "ui:gap-y-4",
        xl: "ui:gap-y-5",
        xxl: "ui:gap-y-6",
    },
    sm: {
        xs: "ui:sm:gap-y-1",
        sm: "ui:sm:gap-y-2",
        md: "ui:sm:gap-y-3",
        lg: "ui:sm:gap-y-4",
        xl: "ui:sm:gap-y-5",
        xxl: "ui:sm:gap-y-6",
    },
    md: {
        xs: "ui:md:gap-y-1",
        sm: "ui:md:gap-y-2",
        md: "ui:md:gap-y-3",
        lg: "ui:md:gap-y-4",
        xl: "ui:md:gap-y-5",
        xxl: "ui:md:gap-y-6",
    },
    lg: {
        xs: "ui:lg:gap-y-1",
        sm: "ui:lg:gap-y-2",
        md: "ui:lg:gap-y-3",
        lg: "ui:lg:gap-y-4",
        xl: "ui:lg:gap-y-5",
        xxl: "ui:lg:gap-y-6",
    }
}