import { useState } from "react"



const useGetSingleStudent = () => {
    const  [data,setData] = useState(null)
    const  [isLoading,setIsLoading] = useState(true)
    const  [error,setError] = useState(null)


        const fetchStart = async() =>{
            try{
                fetch(`http://localhost:7071/student/studentby${id}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(student => {
                    // console.log(student.students)
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