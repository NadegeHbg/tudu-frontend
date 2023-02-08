import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = '';
const HandleConnetion = () => {
    const [connection, setConnection] = useState('')
    useEffect(()=>{
        const fetchData = async(req,res) =>{
          try{
              const response = axios.get(`${url}`) 
              console.log(response,'connectionResponse')
              setConnection(response)
          } catch(err){
              console.log(err,'connectionError')
          }
        }
    fetchData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default HandleConnetion
