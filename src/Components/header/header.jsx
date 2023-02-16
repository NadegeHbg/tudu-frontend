// import KUTE from 'kute.js'

// const tween = KUTE.fromTo(
//     '#head1',
//     { path: '#head1' },
//     { path: '#head2' },
//     { repeat: 999, duration: 3000, yoyo: true }
// );
// tween.start()
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='h-20'>
            <div className='container mx-auto flex justify-end'>
                <button className='mt-2 p-1 border-2 border-primary' onClick={() => { navigate('/login') }}>Login</button>
            </div>
            <div className="wave h-26">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <linearGradient
                        id="gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#45BCB7" stopOpacity=".7" />
                        <stop offset="20%" stopColor="#064566" stopOpacity=".7" />
                        <stop offset="25%" stopColor="#1C373F" stopOpacity=".7" />
                        <stop offset="50%" stopColor="#DE3F4D" stopOpacity=".7" />
                        <stop offset="75%" stopColor="#733C47" stopOpacity=".7" />
                        <stop offset="100%" stopColor="#733C47" stopOpacity=".7" />
                    </linearGradient>
                    <path id="head1" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="url(#gradient)" />
                    <path id="head2" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" transform="scale(-1, 1) translate(-700, 0)" fill="url(#gradient)" visibility='hidden' />
                </svg>
            </div>
        </div>

    )
}

export default Header