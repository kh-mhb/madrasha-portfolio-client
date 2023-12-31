import { useState } from "react"



const useGetSingleStudent = () => {
    const  [data,setData] = useState(null)
    const  [isLoading,setIsLoading] = useState(true)
    const  [error,setError] = useState(null)


        const fetchStart = async(id) =>{
            try{
                fetch(`https://server-null.vercel.app/student/studentby${id}`,{
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

export default useGetSingleStudent