import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorElement from "../components/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />
    }
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
    }
})

export default function Router() {
    return (
        <RouterProvider router={router} future={{ v7_startTransition: true }}></RouterProvider>
    )
}