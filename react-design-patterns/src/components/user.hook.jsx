import { useEffect, useState } from 'react'
import axios from "axios"

const useUser = (userId) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data)
        })()
    }, [])

  return user
}

export default useUser
