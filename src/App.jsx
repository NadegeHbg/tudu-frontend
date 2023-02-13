import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout.jsx";
import Login from "./Components/forms/Login.jsx";
import Registration from "./Components/forms/Registration.jsx";
import Tudu from "./pages/PersonalTudu.jsx";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard.jsx";
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* from origin project - example of routing*/}
      <Route index element={<HomePage/>} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/register" element={<Registration/>} /> 
      <Route path="/Login" element={<Login/>} /> 
      <Route path="/personal/:id" element={<Tudu />} /> 
    </Route>
  )
);

function App() {
    return <RouterProvider router={router} />;
}


export default App;
