import { Outlet } from "react-router-dom";
import Header from "../Components/header/header";

const RootLayout = ({ logedIn }) => {
    return (
        <div className="root-layout">
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className=""></footer>
        </div>
    );
};

export default RootLayout;
