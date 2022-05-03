import "./App.css";

import ReactDOM from "react-dom";

import Header from "@components/shared/Header";
import AppRoutes from "./routes";
import QueryInput from "@components/shared/QueryInput";
import FABMenu from "@components/shared/FABMenu";
import ErrorToast from "@components/shared/ErrorToast";

const App: React.FC = () => {
  return (
    <div className="App">
      {ReactDOM.createPortal(<ErrorToast />, document.getElementById("error-toast")!)}
      <Header />
      <QueryInput />
      <AppRoutes />
      {ReactDOM.createPortal(<FABMenu />, document.getElementById("fab-temp")!)}
    </div>
  );
};

export default App;
