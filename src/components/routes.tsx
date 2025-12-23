import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ExplorePage from "../pages/ExplorePage";

import MovieDetailPage from "../pages/MovieDetailPage";
import NavLayout from "./NavLayout";
import ErrorElement from "./ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorElement />,
  },

  {
    element: <NavLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/explore_movies",
        element: <ExplorePage />,
      },
      {
        path: "/explore_movies/:id",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

export default router;
