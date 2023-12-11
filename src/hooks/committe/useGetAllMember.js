import { useEffect } from "react"
import { useState } from "react"


const useGetAllMember = () => {
    const [members,setMembers]  = useState(null)
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)
    const [memberCount,setMemberCount]  = useState(0)

    const getAllMembers = async() =>{
        setIsLoading(true)
        try{
            const response = await fetch('https://server-null.vercel.app/committe/all')
            const res = await response.json()
            setMemberCount(res.count)
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
    

    return [ getAllMembers , members , memberCount , isLoading , error]
}

export default useGetAllMember