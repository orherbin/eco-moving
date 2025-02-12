import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createMuiTheme({
    palette: {
        primary: {
            //rgb 91,196,117
            main: "#55ca72"
        },
        secondary: {
            main: "#ffffff"
        }
    }
});
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <App />
          </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
