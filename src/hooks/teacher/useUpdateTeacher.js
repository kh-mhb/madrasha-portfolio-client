import { useState } from "react"

const useUpdateTeacher = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [response,setResponse] = useState(null)


    const editTeacher = async(data,id) =>{

        setIsLoading(true)
        try{
            const updateRes = await fetch(`http://localhost:7071/teacher/edit/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            // if(!updateRes.ok){
            //     throw new Error(`HTTP error! Status: ${response.status}`)
            // }

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