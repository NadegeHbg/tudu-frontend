import React from 'react'
import axios from 'axios'

const id =''
const handleEdit = () => {
  useEffect(()=>{
    const fetchData = async(req,res) =>{
      try{
          const response = axios.patch(`\todo\${id}`,{
          })
          response.data.headers['Content-Type'];
          
          console.log(response,'EditResponse')
          setConnection(response)
      } catch(err){
          console.log(err,'EditError')
      }
    }
fetchData()
},[])
  return (
    <div>
      
    </div>
  )
}

export default handleEdit
