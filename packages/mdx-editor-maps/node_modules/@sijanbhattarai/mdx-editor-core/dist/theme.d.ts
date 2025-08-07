export declare const theme: {
    color: {
        primary: string;
        secondary: string;
        base: string;
        surface: string;
        link: string;
        danger: string;
        warning: string;
        success: string;
    };
    shape: {
        rounded: string;
        border: string;
    };
    button: {
        shape: {
            rounded: string;
            border: string;
        };
        type: {
            weight: string;
            style: string;
            settings: {
                light: string;
                regular: string;
                medium: string;
                semiBold: string;
                bold: string;
                extraBold: string;
            };
            case: string;
        };
    };
    type: {
        base: {
            size: string;
            leadSize: string;
            lineHeight: string;
            light: string;
            regular: string;
            medium: string;
            semiBold: string;
            bold: string;
            extraBold: string;
        };
        heading: {
            fontFamily: string;
            settings: {
                light: string;
                regular: string;
                medium: string;
                semiBold: string;
                bold: string;
                extraBold: string;
            };
        };
        body: {
            fontFamily: string;
            settings: {
                light: string;
                regular: string;
                medium: string;
                semiBold: string;
                bold: string;
                extraBold: string;
            };
        };
    };
};
export type ThemeColors = typeof theme.color;
export type ThemeType = typeof theme.type;
