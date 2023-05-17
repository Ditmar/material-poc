import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Inter from "../assets/fonts/Inter-Regular.ttf";
import Poppins from "../assets/fonts/Poppins-Regular.ttf";
const InterRegular = {
  fontFamily: "Inter-Regular",
  fontStyle: "normal",
  fontWeight: 100,
  src: `url(${Inter})`,
};
const InterBold = {
  fontFamily: "Inter-Bold",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url(${Inter})`,
};

const PoppinsRegular = {
  fontFamily: "Poppins-Regular",
  fontStyle: "normal",
  fontWeight: 100,
  src: `url(${Poppins})`,
};
const PoppinsBold = {
  fontFamily: "Poppins-Bold",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url(${Poppins})`,
};
const theme = createTheme({
  typography: {
    fontFamily: [
      InterRegular.fontFamily,
      InterBold.fontFamily,
      PoppinsRegular.fontFamily,
      PoppinsBold.fontFamily,
    ].join(","),
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#F1F0F0",
      dark: "#898C81",
      contrastText: "#FD3939",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#F1F0F0",
      dark: "#898C81",
      contrastText: "#64D148",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [PoppinsRegular, PoppinsBold, InterRegular, InterBold],
      },
      body: {
        fontFamily: ["PoppinsRegular"],
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0,
        padding: 0,
      },
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
export default Theme;
