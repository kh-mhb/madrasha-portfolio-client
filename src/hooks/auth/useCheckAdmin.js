import { useEffect } from "react"
import { useState } from "react"


const useCheckAdmin = () => {
    const [isAdminFound,setIsAdminFound] = useState(false)
    const [admin_e,setAdmin_e] = useState('')
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)

    const checkWebAdmin = async() =>{
        setIsLoading(true)
        try{
            const response = await fetch('https://server-null.vercel.app/auth/admin')
            const res = await response.json()

            if(res.present === true){
                setIsAdminFound(true)
                setAdmin_e(res.admin_e)
            }else{
                setIsAdminFound(false)
                setAdmin_e('')
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
    

    return [ checkWebAdmin , isAdminFound , admin_e, admin_e , isLoading , error]
}

export default useCheckAdmin