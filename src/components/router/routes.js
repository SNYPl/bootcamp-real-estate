import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Root from "./Root";
import ListingAdd from "../listingAdd/ListingAdd";
import ListingInfoPage from "../listingInfoPage/ListingInfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/add-listing",
        element: <ListingAdd />,
      },
      {
        path: "/listing/:id",
        element: <ListingInfoPage />,
      },
    ],
  },
]);
