import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import useUpdateTeacher from "../../../hooks/teacher/useUpdateTeacher"
import { useEffect } from "react"


const EditTeacher = () => {
    let content
    const navigate = useNavigate()
    const { id } = useParams()
    const [teacherData, setTeacherData] = useState({name: "",number: "",img_link: ""})
    const [editTeacher , response , isLoading , error] = useUpdateTeacher()

    useEffect(()=>{
        if(response?.acknowledged){
            navigate('/adminLayout/checkteacher')
        }
    },[response?.acknowledged])

    
    const handleFieldChange = (fieldName, value) => {
        setTeacherData(prevData => ({
          ...prevData,
          [fieldName]: value,
        }));
    };
    
    const handleUpdateTeacher = async() =>{
        await editTeacher(teacherData,id)
    }
    


    content = (
        <div className="p-3">
            <button className="btn btn-sm my-3" onClick={()=>navigate('/adminLayout/checkteacher')}>back</button>
            <form className="bg-slate-100 my-7">
                
                <div className="mb-4 mx-2 mx-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 p-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>


                <div className="mb-4 mx-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 p-2"
                    >
                        Number
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => handleFieldChange('number', e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                
                <div className="mb-4 mx-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 p-2"
                    >
                        Image
                    </label>
                    <input
                        type="file"
                        id="name"
                        name="name"
                        onChange={(e) => handleFieldChange('img_link', e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <button onClick={(e)=>{e.preventDefault();handleUpdateTeacher()}} className="btn mx-3 my-2 bg-gray-500 text-white">Update</button>
            </form>
        </div>
    )
  
    return content
}

export default EditTeacher