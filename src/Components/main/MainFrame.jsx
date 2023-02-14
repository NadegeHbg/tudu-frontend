import React ,{useEffect,useState}from 'react'
import { GetTodos } from '../../events/axiosGlobal'
const MainFrame = () => {
    const [tuduArray,setTuduArray] = useState([])
      setTuduArray(GetTodos())
    console.log(tuduArray)
  return (
    <div>
      
    </div>
  )
}

export default MainFrame
