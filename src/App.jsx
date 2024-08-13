import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { lazy, Suspense } from "react";

const WatchPage = lazy(()=> import("./components/WatchPage"))

function App() {
  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: (<Suspense>
            <WatchPage/>
          </Suspense>),
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appLayout} />
      </div>
    </Provider>
  );
}

export default App;
