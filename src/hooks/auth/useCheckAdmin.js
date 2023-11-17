import { useEffect } from "react"
import { useState } from "react"


const useCheckAdmin = () => {
    const [isAdminFound,setIsAdminFound] = useState(false)
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)

    const checkWebAdmin = async() =>{
        setIsLoading(true)
        try{
            const response = await fetch('http://localhost:7071/auth/admin')
            const res = await response.json()

            console.log(res)
            if(res.present === true){
                setIsAdminFound(true)
            }
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        checkWebAdmin()
    },[])
    

    return [ checkWebAdmin , isAdminFound , isLoading , error]
}

export default useCheckAdmin