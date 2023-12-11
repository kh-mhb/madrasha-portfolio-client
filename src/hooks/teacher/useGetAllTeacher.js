import { useEffect } from "react"
import { useState } from "react"


const useGetAllTeacher = () => {
    const  [data,setData] = useState(null)
    const  [isLoading,setIsLoading] = useState(true)
    const  [error,setError] = useState(null)
    const  [teachersCount,setTeachersCount]  = useState(0)


        const fetchStart = async() =>{
            try{
                fetch('https://server-null.vercel.app/teacher/all',{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(teacher => {
                    setData(teacher.teachers)
                    setTeachersCount(teacher.count)
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


    return [ fetchStart , data , teachersCount , isLoading , error ]
}

export default useGetAllTeacher