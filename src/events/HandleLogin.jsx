import React from 'react'

const HandleLogin = () => {
    useEffect(()=>{
        const fetchData = async(req,res) =>{
          try{
              const response = axios.get(''+id,{data})
    
              console.log(response,'LoginConnectionResponse')
              setConnection(response)
          } catch(err){
              console.log(err,'LoginConnectionError')
          }
        }
    fetchData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default HandleLogin
