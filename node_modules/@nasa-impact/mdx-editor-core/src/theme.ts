export const theme = {
  color: {
    primary: '#1565EF',
    secondary: '#EC6547',
    base: '#16171B',
    surface: '#ffffff',
    link: '#1565EF',
    danger: '#C34848',
    warning: '#F39B2B',
    success: '#3CAD50',
  },
  shape: {
    rounded: 'small',
    border: '1px',
  },
  button: {
    shape: {
      rounded: 'small',
      border: '1px',
    },
    type: {
      weight: '600',
      style: 'normal',
      settings: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
      },
      case: 'uppercase',
    },
  },
  type: {
    base: {
      // Font sizes
      size: '1rem',
      leadSize: '1.5rem',
      // Line heights
      lineHeight: '1.5',
      // Font weights
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
    },
    heading: {
      fontFamily: "'Barlow', serif",
      settings: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
      },
    },
    body: {
      fontFamily: "'Barlow Condensed', serif",
      settings: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
      },
    },
  },
};

export type ThemeColors = typeof theme.color;
export type ThemeType = typeof theme.type;