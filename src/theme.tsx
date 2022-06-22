import {DefaultTheme} from '@react-navigation/native';

export const NAVIGATION_CUSTOM_APP_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
  },
};

// Customize the Theme
// 1. Import the extendTheme function
import {extendTheme} from 'native-base';

// 2. Extend the theme to include custom colors, fonts, etc
const customColorTheme = {
  // just apply whatever theme you want here
  // primary: {
  //   50: '#099846',
  //   100: '#099846',
  //   200: '#099846',
  //   300: '#099846',
  //   400: '#099846',
  //   500: '#099846',
  //   600: '#099846',
  //   700: '#206e40',
  //   800: '#099846',
  //   900: '#099846',
  // },
};

export const CUSTOM_APP_THEME = extendTheme({
  colors: customColorTheme,
});
