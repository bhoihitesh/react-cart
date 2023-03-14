import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./app/Store";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
