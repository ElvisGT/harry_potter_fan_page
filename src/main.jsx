import React from "react";
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import router from './routers/router';
import './static/styles.css';

const root = document.querySelector("#root");
const app = ReactDOM.createRoot(root);

app.render(
    <RouterProvider router={router} />
)