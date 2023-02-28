import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout.jsx";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard.jsx";
import MainFrame from "./Components/main/MainFrame.jsx";
import "./index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* from origin project - example of routing*/}
            <Route index element={<HomePage />} />
            <Route path="/mainframe" element={<MainFrame />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
