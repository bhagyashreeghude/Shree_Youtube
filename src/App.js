import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Sidebar />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
