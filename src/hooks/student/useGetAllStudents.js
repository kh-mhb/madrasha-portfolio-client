import { useEffect } from "react"
import { useState } from "react"

const useGetAllStudents = () => {
    const  [data,setData] = useState(null)
    const  [isLoading,setIsLoading] = useState(true)
    const  [error,setError] = useState(null)


        const fetchStart = async() =>{
            try{
                fetch('https://server-null.vercel.app/student/all',{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(student => {
                    setData(student.students)
                })
            }catch(err){
                setError(err)
            }finally{
                setIsLoading(false)
            }
        }

        useEffect(() => {
            fetchStart();
        }, []);

    return [ fetchStart , data , isLoading , error ]
}

export default useGetAllStudents