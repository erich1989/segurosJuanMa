import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import SectionDetails from "../pages/SectionDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/section-details/:id", // Ruta dinámica para los detalles de cada sección
        element: <SectionDetails />, // Página que mostrará los detalles de la sección
    },
]);

export default router;