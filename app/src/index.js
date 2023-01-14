

import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import  App  from './App'
import Footer from "./Footer";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
    <App />
    <Footer />
    </BrowserRouter>
);


