import { Outlet } from "react-router-dom";

const RootLayout = ({ logedIn }) => {
    return (
        <div className="root-layout">
            <header></header>
            <main>
                <Outlet />
            </main>
            <footer className=""></footer>
        </div>
    );
};

export default RootLayout;
