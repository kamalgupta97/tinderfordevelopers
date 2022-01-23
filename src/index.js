import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./Redux/store";
import App from "./App";
import socketIOClient from "socket.io-client";
import SocketContext from "./Context/SocketContext";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <SocketContext.Provider value={socket}>
          <App />
        </SocketContext.Provider>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
