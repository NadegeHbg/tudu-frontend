// import Sidebar from '../Components/main/Sidebar';
import perso from '../Components/assets/homeAssets/perso.png'
import cardLeft from '../Components/assets/homeAssets/squareOne.png'
import cardRight from '../Components/assets/homeAssets/squareTwo.png'
import blueBubble from '../Components/assets/homeAssets/blueBubble.png'
import redBubble from '../Components/assets/homeAssets/redBubble.png'
import pen from '../Components/assets/homeAssets/pen.png'
import note from '../Components/assets/homeAssets/note.png'
import calendar from '../Components/assets/homeAssets/calendar.png'

const HomePage = () => {
    return(
        // <div className='container mx-auto flex justify-center items-center w-full h-screen'>
        //     <img src={cardLeft} alt="" className='max-w-1/4 self-start -translate-y-8'/>
        //     <div className='flex items-end justify-center w-8/12 aspect-square rounded-full translate-x-8 bg-gradient-to-r from-[#45BCB7] via-[#064566] via-[#1C373F] via-[#733C47] to-[#E73F4E] '>
        //         <img src={perso} alt="decoration image of a cartoon's people" className='h-[65%] aspect-square'/>
        //     </div>
        //     <img src={cardRight} alt="" className='max-w-1/4 self-end -translate-y-8' />
        // </div>
        <div className='grid grid-cols-8 grid-rows-5 w-full h-screen container mx-auto'>
            {/* grid principale à diviser en 8 colones et 14 lignes */}
            <div className='flex justify-center items-start col-start-1 col-end-4 row-start-1 row-end-3'>
                <img src={cardLeft} alt=""  className='-translate-y-8 rotate-90 max-w-3/4'/>
            </div>
            <div className='flex justify-center items-end col-start-7 col-end-9 row-start-4 row-end-6'>
                <img src={cardRight} alt=""  />
            </div>
            <div className='flex justify-center items-center col-start-2 col-end-4 row-start-2 row-end-4'>
                <img src={blueBubble} alt=""  />
            </div>
            <div className='flex justify-center items-center col-start-6 col-end-8 row-start-2 row-end-4'>
                <img src={blueBubble} alt=""  />
            </div>
            <div className='flex justify-center items-center col-start-1 col-end-3 row-start-4 row-end-6'>
                <img src={blueBubble} alt=""  />
            </div>
            <div className='flex justify-center items-center col-start-3 col-end-5 row-start-1 row-end-3' >
                <img src={redBubble} alt="" />
            </div>
            <div className='flex justify-center items-center col-start-7 col-end-9 row-start-1 row-end-3'>
                <img src={redBubble} alt=""  />
            </div>
            <div className='flex justify-center items-center col-start-5 col-end-7 row-start-4 row-end-6'>
                <img src={redBubble} alt=""  />
            </div>
            <div className=' flex justify-end items-end col-start-7 col-end-9 row-start-3 row-end-5'>
            <img src={pen} alt=""  />
            </div>
            <div className='flex justify-center items-center col-start-5 col-end-7 row-start-1 row-end-3' >
                <img src={note} alt="" />
            </div>
            <div className='flex justify-center items-center col-start-3 col-end-5 row-start-4 row-end-6'>
                <img src={calendar} alt="" />
            </div>
            <div className='col-start-3 col-end-7 row-start-2 row-end-5 flex items-center justify-center'>
                <div className='bg-red-300/50 max-h-full aspect-square rounded-full flex justify-center items-end overflow-hidden -z-50'>
                    <img src={perso} alt="" className='h-[75%] translate-y-2 aspect-square'/>    
                </div>
            </div>
        </div>
    )
}

export default HomePage;