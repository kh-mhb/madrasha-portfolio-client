import { useState } from "react"

const useUpdateTeacher = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [response,setResponse] = useState(null)


    const editTeacher = async(data,id) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const updateRes = await fetch(`https://server-null.vercel.app/teacher/edit/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })

            const res = await updateRes.json()
            setResponse(res)

        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    return [editTeacher , response , isLoading , error]
}


export default useUpdateTeacher