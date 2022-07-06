import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../Context/Context'

function Home() {
    const {UserLog}=useContext(DataContext)
    const [loggedIN, setloggedIn] = UserLog;

    useEffect(() => {
        setloggedIn(true)
      
    }, [])
    

  return (
    <div>Home</div>
  )
}

export default Home