import { Outlet } from "react-router-dom";
import HeaderDashboard from "../Components/header/headerDashboard";
import Header from "../Components/header/header";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <Header />
                <HeaderDashboard />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className=""></footer>
        </div>
    );
};

export default RootLayout;
