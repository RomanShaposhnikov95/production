import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);