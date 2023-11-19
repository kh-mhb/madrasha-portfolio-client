import React from "react";
import { useState } from "react";
import useInsertCommitteMember from "../../../hooks/committe/useInsertCommitteMember";
import Loader from "../shared/Loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";


const AddCommitte = () => {
    const navigate = useNavigate()
    const [webChecker, setWebChecker] = useState({name: "",email: "",number: "",occupation: ""})
    const [ insertMember , insertResponse , isLoading , error ] = useInsertCommitteMember()


    useEffect(() => {
      if (insertResponse && insertResponse?.acknowledged) {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWebChecker((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await insertMember(webChecker)
    setWebChecker({
      name: "",
      email: "",
      number: "",
      occupation: "",
    })
  }

  return (
    <div className="p-3 bg-slate-300 my-7 w-11/12 lg:w-1/2  mx-auto">
      
      <div class="flex justify-between items-center mt-2">
        <p className="my-1 text-blue-700 font-bold">Add member to the committe!</p>
        <button onClick={()=>navigate('/adminLayout/checkcommitte')}  class="btn btn-sm bg-blue-600 text-white px-4 rounded">Check all</button>
        </div>
      <form onSubmit={handleSubmit} className=" bg-slate-100 p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={webChecker.name}
            onChange={handleInputChange}
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
            value={webChecker.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
            Number
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={webChecker.number}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={webChecker.occupation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className=" btn btn-sm bg-blue-600 text-white px-4 rounded hover:bg-green-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCommitte;
