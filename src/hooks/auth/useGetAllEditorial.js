import { useEffect } from "react"
import { useState } from "react"


const useGetAllEditorial = () => {
    const [editorials,setEditorials]  = useState(null)
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)

    const getAllEditorials = async() =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const response = await fetch('https://server-null.vercel.app/auth/all',{
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
            })
            const res = await response.json()

            setEditorials(res.editorial)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getAllEditorials()
    },[])
    

    return [ getAllEditorials , editorials , isLoading , error]
}

export default useGetAllEditorial