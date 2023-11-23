import { useState } from "react"

const useLoginEditorials = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [loginResponse,setLoginResponse] = useState(null)

    const loginEditor = async(data) =>{
        setIsLoading(true)
        try{
            const loginRes = await fetch(`https://server-null.vercel.app/auth/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            const res = await loginRes.json()
            setLoginResponse(res)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
  
    return [ loginEditor , loginResponse , error , isLoading ]
}

export default useLoginEditorials