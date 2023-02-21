import perso from "../Components/assets/homeAssets/perso.png";
import cardLeft from "../Components/assets/homeAssets/squareOne.png";
import cardRight from "../Components/assets/homeAssets/squareTwo.png";
import blueBubble from "../Components/assets/homeAssets/blueBubble.png";
import redBubble from "../Components/assets/homeAssets/redBubble.png";
import pen from "../Components/assets/homeAssets/pen.png";
import note from "../Components/assets/homeAssets/note.png";
import calendar from "../Components/assets/homeAssets/calendar.png";
import logo from "../Components/assets/logo_3d.png"

// import { useNavigate } from "react-router-dom";
const HomePageDesktop = () => {
    // const navigate = useNavigate();

    return (
        // <div>
        //      <div className='flex'>
        //     <button className='flex p-2 border-2 border-primary' onClick={() => {navigate('/login')}}>Login</button>
        //     </div>
        //     {/*  */}

        // </div>
        <div className="hidden md:grid grid-cols-8 grid-rows-5 w-full max-h-screen h-fit overflow-hidden container mx-auto">
            {/* grid principale à diviser en 8 colones et 14 lignes */}
            <div className='aspect-square col-start-1 col-end-4 row-start-1 row-end-2 grid grid-cols-6 grid-rows-6 -z-10'>
                <img src={cardLeft} alt="" className='rotate-90 scale-75 col-start-2 col-end-7 row-start-2 row-end-6' />
                <h2 className='z-10 col-start-3 col-end-5 translate-x-5 row-start-4 -translate-y-4 xl:-translate-y-8 xxl:-translate-y-16 xxl:-translate-x-4 flex justify-center items-center text-center'>A fun way to keep track of your tasks</h2>
            </div>

            <div className='aspect-square col-start-6 col-end-9 row-start-3 row-end-6 grid grid-cols-6 grid-rows-6 bg/50'>
                <img src={cardRight} alt="" className='col-start-3 col-end-6 row-start-3 row-end-6' />
                <h2 className='z-10 col-start-3 col-end-6 row-start-3 row-end-6 -translate-y-4 flex justify-center items-center text-center'>
                    Tudu or not Tudu
                    <br />
                    It's up to you
                </h2>
                <img src={pen} alt="" className='z-10 col-start-5 col-end-6 row-start-2 row-end-4 -translate-x-8 translate-y-8' />
            </div>
            <div className="flex justify-center items-center col-start-2 col-end-4 row-start-2 row-end-4 -z-10">
                <img src={blueBubble} alt="" />
            </div>
            <div className="flex justify-center items-center col-start-6 col-end-8 row-start-2 row-end-4 -z-10">
                <img src={blueBubble} alt="" />
            </div>
            <div className="flex justify-center items-center scale-50 col-start-1 col-end-3 row-start-4 row-end-6 -z-10">
                <img src={blueBubble} alt="" />
            </div>
            <div className="flex justify-center items-center col-start-3 col-end-5 row-start-1 row-end-3 -z-10">
                <img src={redBubble} alt="" />
            </div>
            <div className="flex justify-center items-center scale-50 col-start-7 col-end-9 row-start-1 row-end-3 -z-10">
                <img src={redBubble} alt="" />
            </div>
            <div className="flex justify-center items-center scale-75 col-start-5 col-end-7 row-start-4 row-end-6 -z-10">
                <img src={redBubble} alt="" />
            </div>
            <div className="flex justify-center items-center col-start-5 col-end-7 row-start-1 row-end-3">
                <img src={note} alt="" className="xxl:translate-y-4 xxl:-translate-x-4 -z-10" />
            </div>
            <div className="flex justify-center items-center col-start-3 col-end-5 row-start-4 row-end-6">
                <img src={calendar} alt="" className="xxl:-translate-y-4 xxl:translate-x-4 -z-10" />
            </div>
            <div className="items-center justify-center col-start-3 col-end-7 row-start-2 row-end-5 grid grid-cols-8 grid-rows-6">
                
                <div className="max-h-full rounded-full aspect-square shadow-2xl col-start-2 col-end-9 row-start-1 row-end-7 flex justify-center items-end overflow-hidden bg-gradient-to-bl from-[hsla(177,47%,50%,.3)] via-[hsla(201,89%,21%,.3)] via-[hsla(194,38%,18%,.3)] via-[hsla(348,31%,34%,.3)] to-[hsla(355,78%,58%,.3)] -z-50 ">
                    <img src={perso} alt="" className="h-[75%] translate-y-2 aspect-square" />
                </div>
                <img src={logo} alt="logo" className="max-h-32 col-start-2 col-end-4 row-start-3 row-end-4 translate-x-[50%] -z-10" />
            </div>

            {/* <div className="col-start-4 col-end-6 row-start-4 row-end-5 flex justify-center items-end">
                <button
                    className="p-2 border-2 border-primary bg-red-500"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    Register
                </button>
            </div> */}
            {/* <div className="col-start-4 col-end-6 row-start-4 row-end-5 flex justify-center items-end">
                <button
                    className="p-2 border-2 border-primary bg-red-500"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    Register
                </button>
            </div> */}
        </div>
    );
};

const HomePageMobile = () => {
    return(
        <div className="w-screen h-screen max-w-full max-h-full grid grid-rows-6 grid-cols-8 md:hidden overflow-hidden">
            <div className="row-start-1 row-end-5 col-start-1 col-end-9 rounded-b-full -translate-y-8 bg-gradient-to-bl from-[hsla(177,47%,50%,.3)] via-[hsla(201,89%,21%,.3)] via-[hsla(194,38%,18%,.3)] via-[hsla(348,31%,34%,.3)] to-[hsla(355,78%,58%,.3)]"></div>

            <div className="row-start-2 row-end-4 col-start-2 col-end-8 flex justify-center items-center font-extrabold text-[100px] text-transparent bg-clip-text bg-gradient-to-l from-[hsl(201,89%,21%)] via-[hsl(194,38%,18%)] to-[hsl(355,78%,58%)]">
                <h1>TUDU</h1>
            </div>

            <div className="row-start-4 row-end-7 col-start-1 col-end-9 flex justify-end items-end">
                <img src={perso} alt="" className="translate-x-[20%] translate-y-[20%]" />
            </div>

            <img src={logo} alt="" className="row-start-5 row-end-6 col-start-2 col-end-4 translate-y-[50%]" />

        </div>
    )
}

const HomePage = () => {
    return(
        <>
            <HomePageDesktop />
            <HomePageMobile />
        </>
    )
}

export default HomePage;
