import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
  
    children: [
        {
            path: "",
            element: <Main />,
        },
        {
            path: "detail/:id",
            element: <div>Detail</div>,

        }
    ],
  },
]);
