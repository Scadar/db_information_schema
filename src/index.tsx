import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { blue } from "@material-ui/core/colors";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import "./index.css";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        flow: {
            background: string;
            arrowColor: string;
            tableColor: string;
        };
    }

    interface PaletteOptions {
        flow: {
            background: string;
            arrowColor: string;
            tableColor: string;
        };
    }
}

const theme = createTheme({
    typography: {
        fontFamily: "Montserrat",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600
    },
    palette: {
        flow: {
            background: "#273136",
            arrowColor: blue[800],
            tableColor: "#3c3f41"
        }
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
        <ReduxProvider store={ store }>
            <App/>
        </ReduxProvider>
    </MuiThemeProvider>,
    document.getElementById("root")
);

reportWebVitals();
