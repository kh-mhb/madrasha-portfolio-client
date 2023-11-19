import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import useUpdateTeacher from "../../../hooks/teacher/useUpdateTeacher"
import { useEffect } from "react"
import toast from "react-hot-toast"
import useUserdata from "../../../hooks/auth/useUserdata"


const EditTeacher = () => {
    let content
    const navigate = useNavigate()
    const { id , t_name } = useParams()
    const { u_role } = useUserdata()
    const [teacherData, setTeacherData] = useState({name: "",number: "",img_link: ""})
    const [editTeacher , response , isLoading , error] = useUpdateTeacher()

    useEffect(()=>{
        if(u_role === 'inactive'){
            navigate('/adminLayout')
        }
    },[u_role])

    useEffect(() => {
        if (response && response?.acknowledged) {
            toast.success(`Teacher deleted!`, {
            duration: 4000,
            position: 'top-right',
            style: {
              background: 'green',
              color: '#fff',
            },
            icon: '👏',
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
        })
      }else if(response && !response?.acknowledged){
        toast.error('Failed', {
            duration: 4000,
            position: 'top-right',
            style: {
              background: 'red',
              color: '#fff',
            },
            className: '',
            icon: '👏',
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
        }
    }, [response])


    
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
        <div className="p-3 bg-slate-300 my-7 w-11/12 lg:w-1/2  mx-auto">
            <div className="flex justify-between items-center">
                <p className="text-blue-700 font-bold">Edit page for mr/mrs: {t_name}</p>
                <button className="btn btn-sm bg-blue-700 text-white" onClick={()=>navigate('/adminLayout/checkteacher')}>Check teacher</button>
            </div>
            <form className="mt-3 bg-slate-200">
                
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
                <button onClick={(e)=>{e.preventDefault();handleUpdateTeacher()}} className="btn btn-sm mb-1 ml-2 bg-blue-800 text-white">Update</button>
            </form>
        </div>
    )
  
    return content
}

export default EditTeacher