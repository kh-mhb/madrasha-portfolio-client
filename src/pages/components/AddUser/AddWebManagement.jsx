import { useEffect } from 'react';
import { useState } from 'react';
import useCreateEditorials from '../../../hooks/auth/useCreateEditorials';
import Loader from '../shared/Loader';

const AddWebManagement = () => {
    let content
    let [emptyFieldError,setEmptyFieldError] = useState('')
    const [ insertEditorials , insertResponse , isLoading , error ] = useCreateEditorials()
    const [editorial , setEditorial] = useState({
        name: "",
        number: "",
        email: "",
        role: "",
        password: ""
    });


    if( isLoading){
        content = <Loader />
    }


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

    console.log(insertResponse,error)

    content = (
        <div className="w-full mx-auto mt-8">
            <p className="my-1 text-green-700">Add member to the editorials body!</p>
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
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    {/* Add more options as needed */}
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
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    )
  
    return content
}

export default AddWebManagement