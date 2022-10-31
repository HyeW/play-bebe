import {createTheme} from '@mui/material/styles';
import {blue} from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      main: blue[50],
      contrastText: '#594640',
    },
    secondary: {
      main: blue[500],
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif"
  }
});

export default theme;