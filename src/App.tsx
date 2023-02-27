import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LayOut from "./layout";
import DashBoard from "./pages/DashBoard";
import Pending from "./pages/Pending";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "/pending",
        element: <Pending />,
      },
      {
        path: "/students",
        element: <Students />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
