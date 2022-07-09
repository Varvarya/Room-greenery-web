import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";
import './i18n'
import i18n from "./i18n";

const customTheme = createTheme(
    {
        palette: {
            type: 'light',
            primary: {
                main: '#ffffed',
                light: '#ffffed',
                background: '#7FB069',
            },
            secondary: {
                main: '#E6AA68',
            },
            error: {
                main: '#CA3C25',
            },
            warning: {
                main: '#E6AA68',
            },
            success: {
                main: '#7FB069',
            },
            info: {
                main: '#FFFBBD',
            },
            text: {
                primary: '#1D1A05',
                link: '#351575',
                light: '#ffffed'
            },
            typography: {
                "fontFamily": 'Comfortaa',
                "fontSize": 16,
                "fontWeightLight": 300,
                "fontWeightRegular": 400,
                "fontWeightMedium": 500
            },
            textField: {
                color: "#f1d045",
            },
            action: {
                hover: "#f1d045",
            }
        },
    }
)

ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>,
    document.getElementById('root')
);

reportWebVitals();
