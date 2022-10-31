import {createTheme} from '@mui/material/styles';
import {blue} from "@mui/material/colors";

declare module '@mui/material/styles' {
  interface Palette {
    naver: Palette['primary'];
    kakao: Palette['primary'];
    google: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    naver?: PaletteOptions['primary'];
    kakao?: PaletteOptions['primary'];
    google?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    naver: true;
    kakao: true;
    google: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
      contrastText: '#fff',
    },
    secondary: {
      main: blue[50],
      contrastText: '#594640',
    },
    naver: {
      main: '#03C75A',
      contrastText: '#fff',
    },
    kakao: {
      main: '#FEE500',
      contrastText: '#383332',
    },
    google: {
      main: '#383332',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif"
  }
});

export default theme;