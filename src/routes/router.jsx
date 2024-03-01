import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FormMovie from "../components/features/Movie/FormMovie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/movie",
        element: <FormMovie />,
    },
    {
        path: "/movie/:id",
        element: <FormMovie />,
    },
    {
        path: "/movie/:id?mode=Modifier",
        element: <FormMovie />,
    },
    {
        path: "/movie/:id?mode=Ajouter",
        element: <FormMovie />,
    },
    {
        path: "*",
        element: <h1>404</h1>,
    },

]);

export default router;