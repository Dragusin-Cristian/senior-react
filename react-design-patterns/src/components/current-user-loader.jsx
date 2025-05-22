import React, { useEffect, useState } from 'react'
import axios from "axios"

const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(()=> {
        (async () => {
            const response = await axios.get("/current-user")
            setUser(response.data)
        })()
    }, [])
  return (
    <>
      {React.children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, {user})
        }
        return child
      })}
    </>
  )
}

export default CurrentUserLoader
