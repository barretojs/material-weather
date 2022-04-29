import "./App.css";

import ReactDOM from "react-dom";

import Header from "@components/shared/Header";
import AppRoutes from "./routes";
import QueryInput from "@components/shared/QueryInput";
import FABMenu from "@components/shared/FABMenu";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <QueryInput />
      <AppRoutes />
      {ReactDOM.createPortal(<FABMenu />, document.getElementById("fab-temp")!)}
    </div>
  );
};

export default App;
