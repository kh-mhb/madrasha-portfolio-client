import { useEffect } from "react"
import { useState } from "react"


const useGetAllEditorial = () => {
    const [editorials,setEditorials]  = useState(null)
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)

    const getAllEditorials = async() =>{
        setIsLoading(true)
        try{
            const response = await fetch('http://localhost:7071/committe/all')
            const res = await response.json()

            console.log(res)
            setEditorials(res)
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