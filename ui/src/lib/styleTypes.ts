
type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<Min extends number, Max extends number> = Exclude<
  Enumerate<Max>,
  Enumerate<Min>
>;

export type GridColumn = Range<1, 13>;

export type TextPresets = Range<1, 5>;

export type TextColorTypes = 'default' | 'onSurface' | 'caption';

export type FontWeight = 'regular' | 'medium' | 'bold' | 'semibold';

export type SpacingTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type MainAxisTypes = 'start' | 'end' | 'center' | 'between';

export type CrossAxisTypes = 'start' | 'end' | 'center' | 'stretch';


export const Spacing = {
    xs: '8py',
    sm: '16py',
    md: '24py',
    lg: '32py',
    xl: '40py',
    xxl: '48py',
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

export type DirectionalSpacingProps = {
    x?: SpacingTypes;
    y?: SpacingTypes;
    all?: SpacingTypes;
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

export const PaddingSpacing: SpacingMap = {
    default:{
        xs: "ui:p-1",
        sm: "ui:p-2",
        md: "ui:p-3",
        lg: "ui:p-4",
        xl: "ui:p-5",
        xxl: "ui:p-6",
    },
    sm: {
        xs: "ui:sm:p-1",
        sm: "ui:sm:p-2",
        md: "ui:sm:p-3",
        lg: "ui:sm:p-4",
        xl: "ui:sm:p-5",
        xxl: "ui:sm:p-6",
    },
    md: {
        xs: "ui:md:p-1",
        sm: "ui:md:p-2",
        md: "ui:md:p-3",
        lg: "ui:md:p-4",
        xl: "ui:md:p-5",
        xxl: "ui:md:p-6",
    },
    lg: {
        xs: "ui:lg:p-1",
        sm: "ui:lg:p-2",
        md: "ui:lg:p-3",
        lg: "ui:lg:p-4",
        xl: "ui:lg:p-5",
        xxl: "ui:lg:p-6",
    }
}

export const PaddingXSpacing: SpacingMap = {
    default:{
        xs: "ui:px-1",
        sm: "ui:px-2",
        md: "ui:px-3",
        lg: "ui:px-4",
        xl: "ui:px-5",
        xxl: "ui:px-6",
    },
    sm: {
        xs: "ui:sm:px-1",
        sm: "ui:sm:px-2",
        md: "ui:sm:px-3",
        lg: "ui:sm:px-4",
        xl: "ui:sm:px-5",
        xxl: "ui:sm:px-6",
    },
    md: {
        xs: "ui:md:px-1",
        sm: "ui:md:px-2",
        md: "ui:md:px-3",
        lg: "ui:md:px-4",
        xl: "ui:md:px-5",
        xxl: "ui:md:px-6",
    },
    lg: {
        xs: "ui:lg:px-1",
        sm: "ui:lg:px-2",
        md: "ui:lg:px-3",
        lg: "ui:lg:px-4",
        xl: "ui:lg:px-5",
        xxl: "ui:lg:px-6",
    }
}

export const PaddingYSpacing: SpacingMap = {
    default:{
        xs: "ui:py-1",
        sm: "ui:py-2",
        md: "ui:py-3",
        lg: "ui:py-4",
        xl: "ui:py-5",
        xxl: "ui:py-6",
    },
    sm: {
        xs: "ui:sm:py-1",
        sm: "ui:sm:py-2",
        md: "ui:sm:py-3",
        lg: "ui:sm:py-4",
        xl: "ui:sm:py-5",
        xxl: "ui:sm:py-6",
    },
    md: {
        xs: "ui:md:py-1",
        sm: "ui:md:py-2",
        md: "ui:md:py-3",
        lg: "ui:md:py-4",
        xl: "ui:md:py-5",
        xxl: "ui:md:py-6",
    },
    lg: {
        xs: "ui:lg:py-1",
        sm: "ui:lg:py-2",
        md: "ui:lg:py-3",
        lg: "ui:lg:py-4",
        xl: "ui:lg:py-5",
        xxl: "ui:lg:py-6",
    }
}

export const MarginSpacing: SpacingMap = {
    default:{
        xs: "ui:m-1",
        sm: "ui:m-2",
        md: "ui:m-3",
        lg: "ui:m-4",
        xl: "ui:m-5",
        xxl: "ui:m-6",
    },
    sm: {
        xs: "ui:sm:m-1",
        sm: "ui:sm:m-2",
        md: "ui:sm:m-3",
        lg: "ui:sm:m-4",
        xl: "ui:sm:m-5",
        xxl: "ui:sm:m-6",
    },
    md: {
        xs: "ui:md:m-1",
        sm: "ui:md:m-2",
        md: "ui:md:m-3",
        lg: "ui:md:m-4",
        xl: "ui:md:m-5",
        xxl: "ui:md:m-6",
    },
    lg: {
        xs: "ui:lg:m-1",
        sm: "ui:lg:m-2",
        md: "ui:lg:m-3",
        lg: "ui:lg:m-4",
        xl: "ui:lg:m-5",
        xxl: "ui:lg:m-6",
    }
}

export const MarginXSpacing: SpacingMap = {
    default:{
        xs: "ui:mx-1",
        sm: "ui:mx-2",
        md: "ui:mx-3",
        lg: "ui:mx-4",
        xl: "ui:mx-5",
        xxl: "ui:mx-6",
    },
    sm: {
        xs: "ui:sm:mx-1",
        sm: "ui:sm:mx-2",
        md: "ui:sm:mx-3",
        lg: "ui:sm:mx-4",
        xl: "ui:sm:mx-5",
        xxl: "ui:sm:mx-6",
    },
    md: {
        xs: "ui:md:mx-1",
        sm: "ui:md:mx-2",
        md: "ui:md:mx-3",
        lg: "ui:md:mx-4",
        xl: "ui:md:mx-5",
        xxl: "ui:md:mx-6",
    },
    lg: {
        xs: "ui:lg:mx-1",
        sm: "ui:lg:mx-2",
        md: "ui:lg:mx-3",
        lg: "ui:lg:mx-4",
        xl: "ui:lg:mx-5",
        xxl: "ui:lg:mx-6",
    }
}

export const MarginYSpacing: SpacingMap = {
    default:{
        xs: "ui:my-1",
        sm: "ui:my-2",
        md: "ui:my-3",
        lg: "ui:my-4",
        xl: "ui:my-5",
        xxl: "ui:my-6",
    },
    sm: {
        xs: "ui:sm:my-1",
        sm: "ui:sm:my-2",
        md: "ui:sm:my-3",
        lg: "ui:sm:my-4",
        xl: "ui:sm:my-5",
        xxl: "ui:sm:my-6",
    },
    md: {
        xs: "ui:md:my-1",
        sm: "ui:md:my-2",
        md: "ui:md:my-3",
        lg: "ui:md:my-4",
        xl: "ui:md:my-5",
        xxl: "ui:md:my-6",
    },
    lg: {
        xs: "ui:lg:my-1",
        sm: "ui:lg:my-2",
        md: "ui:lg:my-3",
        lg: "ui:lg:my-4",
        xl: "ui:lg:my-5",
        xxl: "ui:lg:my-6",
    }
}