import { Outlet } from "react-router-dom";

const RootLayout = ({ logedIn }) => {
    return (
        <div className="root-layout">
            <header>
                Hello Tudu's team ! Tudu or not todu, it's up to u !
            </header>
            <main >
                < Outlet />
            </main>
            <footer className="">
            </footer>
        </div>
    );
}

export default RootLayout;