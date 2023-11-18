import React from "react";
import { useState } from "react";
import useInsertCommitteMember from "../../../hooks/committe/useInsertCommitteMember";
import Loader from "../shared/Loader";
import { useNavigate } from "react-router-dom";

const AddCommitte = () => {
    const navigate = useNavigate()
    const [webChecker, setWebChecker] = useState({
      name: "",
      email: "",
      number: "",
      occupation: "",
    })
    const [ insertMember , insertResponse , isLoading , error ] = useInsertCommitteMember()

  if(isLoading){
    return <Loader />
  }

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

  // console.log(insertResponse,error)



  return (
    <div className="w-full mx-auto mt-8">
      <p className="my-1 text-blue-700 font-bold">Add member to the committe!</p>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
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
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
        <div class="flex justify-end mt-2">
          <button onClick={()=>navigate('/adminLayout/checkcommitte')}  class="bg-blue-600 text-white py-2 px-4 rounded">Check All</button>
        </div>
    </div>
  );
};

export default AddCommitte;
