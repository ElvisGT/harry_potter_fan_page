import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import './static/styles.css';

const root = document.querySelector("#root");
const app = ReactDOM.createRoot(root);

app.render(<App />)