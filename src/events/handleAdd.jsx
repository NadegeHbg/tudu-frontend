import React from 'react'

const HandleAdd = () => {
  useEffect(()=>{
    const fetchData = async(req,res) =>{
      try{
          const response = axios.post("/todo/"+id,{data})          
          console.log(response,'AddResponse')
          setConnection(response)
      } catch(err){
          console.log(err,'AddError')
      }
    }
fetchData()
},[])
  return (
    <div>
      
    </div>
  )
}

export default HandleAdd
