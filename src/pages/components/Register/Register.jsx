import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useCheckAdmin from "../../../hooks/auth/useCheckAdmin";
import Loader from "../shared/Loader";
import { useState } from "react";
import useRegisterEditorialsAdmin from "../../../hooks/auth/useRegisterEditorialsAdmin";

const Register = () => {
  const [ checkWebAdmin , isAdminFound , isLoading , error] = useCheckAdmin()
  const location = useLocation()
  const navigate = useNavigate()
  const [regInfo, setReginInfo] = useState({ name: '' , email: '' , password: '' , role : 'admin' , number: 0})
  const [insertAdmin, insertRegResponse , isLoadingReg , errorReg] = useRegisterEditorialsAdmin()

  useEffect(()=>{
    if(isLoading || isLoadingReg){
      return <Loader />
    }

    if(location?.pathname.includes('/register') || !isLoading){
      checkWebAdmin()
    }

    if(isAdminFound === true && location?.pathname.includes('/register')){
      navigate('/')
    }

  },[ isAdminFound , isLoading , location])

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setReginInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }


  const handleRegSubmit = async (e) => {
    e.preventDefault();
    console.log(regInfo)
    await insertAdmin(regInfo)
    setReginInfo({
      name: '',
      email: '',
      number: 0,
      password: '',
    })
  }
  console.log(insertRegResponse)

  if(insertRegResponse?.response){
    const access_token = insertRegResponse?.access_token
    localStorage.setItem('access_token',access_token)
  }

  return (
    <div>
      <section className="px-4 pb-24 mx-auto max-w-7xl">
        <header className="flex items-center justify-center py-5 mb-5 "></header>
        <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
          <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
            Create your admin account
          </h1>
          
          <form className="mt-8 space-y-4"  onSubmit={handleRegSubmit}>
            
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Name
              </label>
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
                value={regInfo.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
                value={regInfo.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Number
              </label>
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Number"
                name="number"
                value={regInfo.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Number
              </label>
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                name="password"
                value={regInfo.password}
                onChange={handleChange}
                required
              />
            </div>

            <input 
              type="submit"
              className="btn btn-md bg-gray-700 text-white"
            />

          </form>

          
        </div>
      </section>
    </div>
  );
};

export default Register;
