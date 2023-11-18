import { useEffect } from 'react';
import { useState } from 'react';
import useCreateEditorials from '../../../hooks/auth/useCreateEditorials';
import Loader from '../shared/Loader';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useUserdata from '../../../hooks/auth/useUserdata';

const AddWebManagement = () => {
    let content
    const navigate = useNavigate()
    const { u_role } = useUserdata()
    let [emptyFieldError,setEmptyFieldError] = useState('')
    const [ insertEditorials , insertResponse , isLoading , error ] = useCreateEditorials()
    const [editorial , setEditorial] = useState({name: "",number: "",email: "",role: "",password: ""});

        if(u_role === 'editor'){
            navigate('/adminLayout/checkeditorials')
        }else if(u_role === 'inactive'){
            navigate('/adminLayout/checkeditorials')
        }

    
    console.log(u_role)
    useEffect(() => {
        if(insertResponse && insertResponse?.acknowledged) {
            toast.success(`Member added!`, {
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
      }else if(insertResponse && !insertResponse?.acknowledged){
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
    }, [insertResponse])


    
    const handleFieldChange = (e) => {
        const { name , value } = e.target
        setEditorial((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }


    const handleSubmit = async(e) =>{
        e.preventDefault()
        if( !editorial.name || !editorial.number || !editorial.email || !editorial.role || !editorial.password){
            setEmptyFieldError('No empty field allowed!')
        }else{
            await insertEditorials(editorial)
        }
        setEditorial({name: "",number: "",email: "",role: "",password: ""})
    }



    content = (
        <div className="bg-slate-100 p-2">
            <div className="flex justify-between items-center mt-2 mb-2">
                <p className="my-1 text-blue-800 font-bold">Add member to the editorials body!</p>
                <button onClick={()=>navigate('/adminLayout/checkeditorials')}  className="btn btn-sm bg-blue-600 text-white rounded">Check editorials</button>
            </div>
            <p className="my-1 text-green-700">{emptyFieldError}</p>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={editorial.name}
                        onChange={handleFieldChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={editorial.email}
                        onChange={handleFieldChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">
                        Role
                    </label>
                    <select
                    id="position"
                    name="role"
                    value={editorial.role}
                    onChange={handleFieldChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Select Position</option>
                        <option value="editor">Editor</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
                    Number
                    </label>
                    <input
                        type="number"
                        id="number"
                        name="number"
                        value={editorial.number}
                        onChange={handleFieldChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={editorial.password}
                    onChange={handleFieldChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    disabled={u_role === 'editor' || u_role == 'inactive'}
                    className="btn btn-sm bg-blue-600 text-white px-4 rounded-md hover:bg-green-600 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    )
  
    return content
}

export default AddWebManagement