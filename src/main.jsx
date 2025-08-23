import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import './index.css'
import App from './App.jsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
// import { ThemeOptions } from '@mui/material/styles';

const theme = createTheme({
  //Crear usando https://zenoo.github.io/mui-theme-creator/
  //Paleta de colores https://www.shutterstock.com/es/color/olive-green
  palette: {
    mode: 'light',
    primary: {
      main: '#526534',
    },
    secondary: {
      main: '#B2BDA0',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
        fontFamily: 'Satisfy',
    },
    h2: {
        fontFamily: 'Satisfy',
    },
    h3: {
        fontFamily: 'Satisfy',
    },
    h4: {
        fontFamily: 'Satisfy',
    },
    h5: {
        fontFamily: 'Satisfy',
    },
    h6: {
        fontFamily: 'Satisfy',
    },
    body3: {
        fontFamily: 'Roboto'
    }
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
