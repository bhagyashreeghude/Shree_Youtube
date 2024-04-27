import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Live from "./components/Live/Live";
import Sport from "./components/sportPage/Sport";
import TechContainer from "./components/technology/TechContainer";
import Download from "./Downloads/Download";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/live",
        element: <Live/>,
      },
      {
        path: "/sport",
        element: <Sport/>,
      },
      {
        path: "/tech",
        element: <TechContainer/>,
      },
      {
        path: "/downloads",
        element: <Download/>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
