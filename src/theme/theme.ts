import { createTheme } from "@mui/material/styles";

const customColors = {
  primary: "#4310AE",
  secondary: "#1FDCC1",
  text: {
    primary: "#fff",
    secondary: "#05111A",
    placeHolder: "#A1A1A1",
    darker: "#200062",
    label: "#7b7a7e",
  },
  background: {
    default: "#fff",
    table: "#F5F0FF",
    paper: "#f5f5f5",
    hoverRoot: "#f7f7fe",
    hoverSelected: "#350C8B",
    root: "#efeffd",
    card: "#f7f5fd",
    search: "#EFEFF4",
    dark: "#333333",
  },
  input: {
    outline: "#DDDDDD",
  },
  shadows: "#ece7f7",
};

const theme = createTheme({
  palette: {
    primary: {
      main: customColors.primary,
      light: customColors.background.card,
      dark: customColors.text.darker,
    },
    secondary: {
      main: customColors.secondary,
      light: customColors.shadows,
      dark: customColors.text.label,
    },
    text: {
      primary: customColors.text.primary,
      secondary: customColors.text.secondary,
    },
    background: {
      default: customColors.background.default,
      paper: customColors.background.table,
    },
    info: {
      main: customColors.primary,
    },
    success: {
      main: customColors.secondary,
      light: customColors.background.search,
      dark: customColors.background.dark
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "unset",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.background.root,
          color: customColors.primary,
          width: "204px",
          fontWeight: 400,
          size: "16px",
          "&:hover": {
            backgroundColor: customColors.background.root,
            fontWeight: 500,
          },
          "&.Mui-selected": {
            backgroundColor: customColors.primary,
            color: customColors.text.primary,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: customColors.background.hoverSelected,
            },
          },
          "&:first-child":{
            borderRadius: "8px 0 0 8px",
          },
          "&:last-child":{
            borderRadius: "0 8px 8px 0",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minWidth: "400px",
          backgroundColor: customColors.background.default,
          color: customColors.primary,
          border: `1px solid ${customColors.input.outline}`,
          borderRadius: "4px",
          height: "48px",
          "input::placeholder": {
            color: customColors.text.placeHolder,
            opacity: "1",
            fontWeight: "400",
            fontSize: "14px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.primary,
          border: `1px solid black`,
          borderRadius: "8px",
          padding: "12px 32px 12px 32px",
          height: "46px",
          color: customColors.text.primary,
          "&:hover": {
            color: customColors.primary,
            borderColor: customColors.primary,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
    MuiGrid:{
      styleOverrides:{
        root:{
          textAlign: "left",
        },
      },
    },
  },
});

export default theme;
