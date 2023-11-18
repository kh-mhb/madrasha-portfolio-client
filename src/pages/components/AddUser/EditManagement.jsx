import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../shared/Loader"


const EditManagement = () => {
    let content
    const { id , p_email} = useParams()
    const navigate = useNavigate()
    const [memberData , setMemberData] = useState({name: "",number: "",img_link: ""})


    useEffect(() => {
        // Check if id and p_email exist before using them
        
      }, [id, p_email, navigate])
      if (!id || !p_email) {
        // Redirect or handle the missing parameters as needed
        content = <Loader />
      }
    const handleFieldChange = (fieldName, value) => {
        setMemberData(prevData => ({
          ...prevData,
          [fieldName]: value,
        }));
    };
    
    const handleUpdateTeacher = async() =>{
        // await 
    }
    

    console.log(id)
    content = (
        <div className="p-3 bg-slate-100 my-7">
            <div className="flex justify-between items-center">
                <p className="text-blue-700 font-bold">Hello : {p_email}</p>
                <button className="btn btn-sm bg-blue-700 text-white" onClick={()=>navigate('/adminLayout/checkeditorials')}>Back</button>
            </div>
            
            <form className="mt-3">
                
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

export default EditManagement