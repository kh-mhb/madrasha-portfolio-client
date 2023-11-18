import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import useUpdateMember from "../../../hooks/committe/useUpdateMember"


const EditCommitteMember = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    let content
    const [webChecker, setWebChecker] = useState({name: "",email: "",number: "",occupation: ""})
    const [ updateMember , isLoading , error , resMessage ] = useUpdateMember()
    
    const handleInputChange = ( name, value ) => {
        setWebChecker((prevData) => ({
          ...prevData,
          [name]: value,
        }))
    }



    const handleSubmit = async () => {
        await updateMember(webChecker,id)
        setWebChecker({name: "",email: "",number: "",occupation: ""})
    }
    
    

    content = (
        <div>
            <p className="my-1 text-blue-700 font-bold">Edit committe member</p>
                <div className="p-3">
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
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                        <div className="mb-4 mx-2 mx-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 p-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="name"
                                name="email"
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>


                        <div className="mb-4 mx-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 p-2"
                            >
                                Occupation
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="occupation"
                                onChange={(e) => handleInputChange('occupation', e.target.value)}
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
                                type="number"
                                id="name"
                                name="number"
                                onChange={(e) => handleInputChange('number', e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <button onClick={(e)=>{e.preventDefault();handleSubmit()}} className="btn mx-3 my-2 bg-gray-500 text-white">Update</button>
                    </form>
                </div>
                <div class="flex justify-end mt-2">
                    <button onClick={()=>navigate('/adminLayout/checkcommitte')}  class="bg-blue-600 text-white py-2 px-4 rounded">Check committe</button>
                </div>
        </div>
    )
    
    return content
}

export default EditCommitteMember