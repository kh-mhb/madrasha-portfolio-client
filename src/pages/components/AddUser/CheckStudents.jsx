import { useEffect, useState } from "react"
import useDeleteStudent from "../../../hooks/student/useDeleteStudent"
import useGetAllStudents from "../../../hooks/student/useGetAllStudents"
import Loader from "../shared/Loader"

const CheckStudents = () => {
    let content
    const [IdStID,setIdStID] = useState('')
    const [fetchStart , data , isLoading1 , error1] = useGetAllStudents()
    const [deleteStudent , response , isLoading2 , error2] = useDeleteStudent()
    
    useEffect(() => {
        if (response) {
          fetchStart()
        }
    }, [response]);
    
    if(isLoading1 || isLoading2){
        return content = <Loader />
    }
    

    const handleDeleteStudent = async () =>{
        const res = await deleteStudent(IdStID)
        console.log(res)
    } 

    
    content = (
        <div className="overflow-x-hidden 	">
            <div className="">
                <table className="table table">
                    <thead>
                        <tr>
                            <th>img</th> 
                            <th>Name</th> 
                            <th>Father's name</th> 
                            <th>Mother's name</th> 
                            <th>Class</th> 
                            <th>Village</th> 
                            <th>District</th>
                            <th>DOB</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead> 

                    <tbody>
                    
                    {data?.map(student => 
                        <tr key={student?._id}>
                            <th><img src={student?.img_link} /></th> 
                            <th className={{fontSize:'10px'}}>{student?.name}</th> 
                            <td className={{fontSize:'10px'}}>{student?.father_name}</td> 
                            <td className={{fontSize:'10px'}}>{student?.mother_name}</td> 
                            <td className={{fontSize:'10px'}}>{student?.stnd_class}</td> 
                            <td className={{fontSize:'10px'}}>{student?.village}</td> 
                            <td className={{fontSize:'10px'}}>{student?.district}</td> 
                            <td className={{fontSize:'10px'}}>{student?.date_of_brth}</td>
                            <td className={{fontSize:'10px'}}><button>Edit</button></td>
                            <td className={{fontSize:'10px'}}><button onClick={(e)=>{e.preventDefault();setIdStID(student?._id);handleDeleteStudent()}}>Delete</button></td>
                        </tr>)
                    }
                    
                    </tbody>

                    <tfoot>
                        <tr>
                            <th>img</th> 
                            <th>Name</th> 
                            <th>Father's name</th> 
                            <th>Mother's name</th> 
                            <th>Class</th> 
                            <th>Village</th> 
                            <th>District</th>
                            <th>DOB</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
    


    return content
}

export default CheckStudents