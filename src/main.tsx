// vite.config.ts 修改 css.preprocessorOptions 来修改 antd 变量来设置样式
import "antd/dist/antd.less";
import "amis/lib/themes/default.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./pages/App";
import { ToastComponent, AlertComponent } from "amis";
// import GlobalStyles from './styles/GlobalStyles'

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  // ReactDom.render(
  // <React.StrictMode>
  // <StoresContext.Provider value={stores}>
  <Router>
    <ToastComponent key="toast" position="top-right" />
    <AlertComponent key="alert" />
    <App />
  </Router>
  // </StoresContext.Provider>,
  // </React.StrictMode>,
  // document.getElementById("root")
);
