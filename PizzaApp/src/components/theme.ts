import {
  createBox,
  createText,
  createTheme,
  useTheme as useReTheme,
} from '@shopify/restyle';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

const palette = {
  white: '#fff',
  lightGray: '#F5F5F5',
  black: '#000',
  red: '#db040e',
  gray: '#EEEEEE',
  grey: '#BDBDBD',
};

export const theme = createTheme({
  fonts: {
    primary: 'montserrat',
  },
  colors: {
    primary: palette.red,
    mainBackground: palette.lightGray,
    inputBackground: palette.gray,
    red: palette.red,
    textColor: palette.black,
    textColorSecondaryLight: palette.grey,
    textColorSecondary: palette.white,
    transparent: 'transparent',
  },
  textVariants: {
    textSM: {
      fontSize: 14,
      fontWeight: '400',
      color: 'textColor',
    },
    textBase: {
      fontSize: 16,
      fontWeight: '400',
      color: 'textColor',
    },
    header: {
      fontSize: 30,
      fontWeight: '700',
      color: 'textColor',
    },
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
});
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
