import { Outlet } from "react-router-dom";
import Header from "../Components/header/header";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header  className='text-neutral'>
                <Header />
            </header>
            <main >
                < Outlet />
            </main>
            <footer className=""></footer>
        </div>
    );
};

export default RootLayout;
