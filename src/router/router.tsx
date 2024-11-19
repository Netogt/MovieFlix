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
    }
})

export default function Router() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}