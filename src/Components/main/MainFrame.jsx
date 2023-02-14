import React ,{useEffect,useState}from 'react'
import { GetTodos } from '../../events/axiosGlobal'
import Cookies from 'js-cookie'
const MainFrame = () => {
  const [tudu,setTudu] = useState([])
  useEffect( () => {
    async function fetchData() {
      const data = Cookies.get("id");
      setTudu(await GetTodos(data));
    }
    fetchData()
  }, []);
  return (
    <div>
      
    </div>
  )
// category,description,duedate,entrydate,id,place,ptaskname,style,url,user_id


export default MainFrame
