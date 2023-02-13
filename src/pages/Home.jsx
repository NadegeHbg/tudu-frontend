import Sidebar from '../Components/main/Sidebar';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
const navigate = useNavigate();

    return(
<div className='flex'>
<button className='flex p-2 border-2 border-primary' onClick={() => {navigate('/login')}}>Login</button>
<button className='flex p-2 border-2 border-primary' onClick={() => {navigate('/register')}}>Register</button>
</div>
    )
}

export default HomePage;