import React, {useEffect, useState} from 'react'
import axiosGlobal from './axiosGlobal'
import axios from 'axios'

const url =""

const HandleRegistration = () => {

  const [responseRegister, setResponseRegister] = useState('')

    useEffect(()=>{
        const fetchData = async() =>{
          try{
            const response = await axios.post(url,{data})
            console.log(response,'registration post request')

          }catch(error){
            console.log(error,'registration post error')
          }
        }
        fetchData()
      },[])
  return (
    <div>
      
    </div>
  )
}

export default HandleRegistration
