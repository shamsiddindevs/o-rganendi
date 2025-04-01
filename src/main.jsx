import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalContext from "./context/GlobalContext";
import {ToastContainer, toast} from "react-toastify";
// import { store } from "./store/store";
// import {Provider} from "react-redux";
import Main from "./app/main";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App />
    <ToastContainer position="top-center" />
  </GlobalContext>
  // <Main/>
);
