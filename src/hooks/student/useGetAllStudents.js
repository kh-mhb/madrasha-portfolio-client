import { useEffect } from "react"
import { useState } from "react"

const useGetAllStudents = () => {
    const  [data,setData] = useState(null)
    const  [isLoading,setIsLoading] = useState(false)
    const  [error,setError] = useState(null)
    const  [studentsCount,setStudentsCount]  = useState(0)


        const fetchStart = async() =>{
            setIsLoading(true)
            try{
                fetch('https://server-null.vercel.app/student/all',{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(student => {
                    setData(student.students)
                    setStudentsCount(student.count)
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

    return [ fetchStart , data , studentsCount , isLoading , error ]
}


export default useGetAllStudents