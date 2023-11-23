import { useState } from "react"

const useCreateEditorials = () => {
    const [insertResponse, setInsertResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const insertEditorials = async(insert_doc) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const response = await fetch('https://server-null.vercel.app/auth/create',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(insert_doc)
            })
            if (!response.ok) {
                if (response.status === 404) {
                  const res = await response.json()
                  setInsertResponse(res?.message)
                }
            }else{
                const res = await response.json()
                console.log(res, 'from 200')
                setInsertResponse(res?.response)
            }
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    return [ insertEditorials , insertResponse , isLoading , error ]
}

export default useCreateEditorials