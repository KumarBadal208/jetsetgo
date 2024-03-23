import { Provider } from "react-redux";
import "./App.css";
import appStore from "./store/appStore";
import { Outlet } from "react-router";
import Header from "./component/Header";

function App() {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    </Provider>
    
  );
}

export default App;