import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#313638',
    },
    background: {
      default: '',
    },
    text: {
      primary: '#313638',
    },
    link: {
      main: '#313638',
    },
    button: {
      main: '#f06543',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#313638',
          '&:hover': {
            backgroundColor: 'rgba(99, 193, 50, 0.7)',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0',
        },
      },
    },
  },
});

export default lightTheme;
