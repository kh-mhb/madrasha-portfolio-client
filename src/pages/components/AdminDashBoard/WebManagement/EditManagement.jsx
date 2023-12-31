import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../../shared/Loader"
import useUserdata from "../../../../hooks/auth/useUserdata"
import useCheckAdmin from "../../../../hooks/auth/useCheckAdmin"
import useUpdateEditorials from "../../../../hooks/auth/useUpdateEditorials"
import toast from "react-hot-toast"


const EditManagement = () => {
    let content
    const { u_email, u_role } = useUserdata()
    const [ checkWebAdmin , isAdminFound ] = useCheckAdmin() 
    const { id , p_email} = useParams()
    const navigate = useNavigate()
    const [ updateEditorials , isLoading , error , resMessage , message] = useUpdateEditorials()
    const [memberData , setMemberData] = useState({name: "",number: "",email: "",password: "", role: ""})

    useEffect(()=>{
        if(u_role === 'inactive'){
            navigate('/adminLayout')
        }
    },[u_role , u_email])

    useEffect(() => {
        if (resMessage && resMessage?.acknowledged) {
            toast.success(`${message}`, {
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
        checkWebAdmin()
      }else if(resMessage && !resMessage?.acknowledged){
        toast.error(`${message}`, {
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
        }else if(!resMessage && message){
        toast.error(`${message}`, {
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


    const handleFieldChange = (fieldName, value) => {
        setMemberData(prevData => ({
          ...prevData,
          [fieldName]: value,
        }));
    };
    
    const handleUpdateTeacher = async() =>{
        await updateEditorials(id,memberData) 
    }

    console.log(message,resMessage)
    

    content = (
        <div className="p-3 bg-slate-300 my-7 w-11/12 lg:w-1/2  mx-auto">
            <div className="flex justify-between items-center">
                <p className="text-blue-700 font-bold">Hello - {p_email}</p>
                <button className="btn btn-sm bg-blue-700 text-white" onClick={()=>navigate('/adminLayout/checkeditorials')}>Back</button>
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
                        name="name"
                        disabled={u_email !== p_email}
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
                        type="number"
                        name="number"
                        disabled={u_email !== p_email}
                        onChange={(e) => handleFieldChange('number', e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

    
                
                <div className="mb-4 mx-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 p-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        disabled
                        value={u_email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                
                <div className="mb-4 mx-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 p-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        disabled={u_email !== p_email}
                        onChange={(e) => handleFieldChange('password', e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                 
                {u_role === 'admin' && <div className="mb-4 mx-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 p-2"
                    >
                        Role
                    </label>
                    <select
                        name="role"
                        onChange={(e) => handleFieldChange('role', e.target.value)}
                    >
                        <option value="">select a role</option>
                        <option value="editor">editor</option>
                        <option value="inactive">inactive</option>
                    </select>
                </div>}

                <button onClick={(e)=>{e.preventDefault();handleUpdateTeacher()}} className="btn btn-sm mb-1 ml-2 bg-blue-800 text-white">Update</button>
            </form>
            <p className="font-bold text-red-700 text-sm">Only admin can change the role.</p>
            {u_email !== p_email && <p className="font-bold text-red-700 text-sm">Only user can change his password , name and number.</p>}
        </div>
    )
    return content
}

export default EditManagement