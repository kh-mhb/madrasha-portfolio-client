import { useEffect } from "react"
import { useState } from "react"


const useGetAllMember = () => {
    const [members,setMembers]  = useState(null)
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)

    const getAllMembers = async() =>{
        setIsLoading(true)
        try{
            const response = await fetch('http://localhost:7071/committe/all')
            const res = await response.json()
            // console.log(res)

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