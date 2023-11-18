import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import useUpdateMember from "../../../hooks/committe/useUpdateMember"
import toast from "react-hot-toast"


const EditCommitteMember = () => {
    let content
    const { id , u_email } = useParams()
    const navigate = useNavigate()
    const [webChecker, setWebChecker] = useState({name: "",email: "",number: "",occupation: ""})
    const [ updateMember , isLoading , error , resMessage ] = useUpdateMember()
    
    useEffect(() => {
        if(resMessage && resMessage?.acknowledged) {
            toast.success(`Edit successfull!`, {
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
      }else if(resMessage && !resMessage?.acknowledged){
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
    }, [resMessage])

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
    
    console.log(resMessage)

    content = (
        <div className="bg-slate-100 p-3">
            <div className="flex justify-between items-center">
                <p className="my-1 ml-2 text-blue-700 font-bold">Edit committe member: {u_email}</p>
                <button className="btn btn-sm bg-blue-700 text-white" onClick={()=>navigate('/adminLayout/checkcommitte')}>Check comitte</button>
            </div>

                <div className="p-3">
                    <form className="">
                        
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
                        <button onClick={(e)=>{e.preventDefault();handleSubmit()}} className="btn btn-sm bg-blue-600 text-white ml-2 mb-2 rounded">Update</button>
                    </form>
                </div>
        </div>
    )
    
    return content
}

export default EditCommitteMember