import { useEffect } from "react"
import { useState } from "react"


const useGetAllMember = () => {
    const [members,setMembers]  = useState(null)
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)

    const getAllMembers = async() =>{
        setIsLoading(true)
        try{
            const response = await fetch('https://server-null.vercel.app/committe/all')
            const res = await response.json()

            setMembers(res.committe)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getAllMembers()
    },[])
    

    return [ getAllMembers , members , isLoading , error]
}

export default useGetAllMember