import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Cards from "../Cards/Cards";
import Apps from "../Apps/Apps";
import Error from "../Error/Error";
import CardDetails from "../CardDetails/CardDetails";

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/data2.json"),
        Component: Apps,
      },
      {
        path: "cardsDetails/:id",
        loader: () => fetch("/data2.json"),
        Component: CardDetails,
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
