import React, { useState } from 'react'
import { createContext } from 'react'
export const DataContext=createContext()

function Context({children}) {
    const [loggedIN,setloggedIn]=useState(false)
    const [auth,setauth]=useState(false)
    
  return (
    <DataContext.Provider value={{UserLog:[loggedIN,setloggedIn]}}>
        {children}
    </DataContext.Provider>
  )
}

export default Context