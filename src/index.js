import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import LikeContextProvider from "./context/LikeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LikeContextProvider>
                <App/>
            </LikeContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

