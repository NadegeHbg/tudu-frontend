import React from 'react'
import { useState } from 'react'
import { GetTodos,filteringTudu } from './axiosGlobal'
const filteringTudu = () => {
    const [allTudu,setAllTudu] = useState([])
    const [filterTudu, setFilterTudu] = useState([])
    setAllTudu( GetTodos)
  return (
    <div>
      
    </div>
  )
}

// export default filteringTudu
