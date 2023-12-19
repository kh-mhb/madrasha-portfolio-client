import React, { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useCheckAdmin from "../../../hooks/auth/useCheckAdmin"
import Loader from "../shared/Loader"
import { useState } from "react"
import useRegisterEditorialsAdmin from "../../../hooks/auth/useRegisterEditorialsAdmin"


const Register = () => {
  let content
  const location = useLocation()
  const navigate = useNavigate()
  const [ checkWebAdmin , isAdminFound , isLoading , error] = useCheckAdmin()
  const [regInfo, setReginInfo] = useState({ name: '' , email: '' , password: '' , role : 'admin' , number: 0})
  const [insertAdmin, insertRegResponse , isLoadingReg , errorReg] = useRegisterEditorialsAdmin()

  useEffect(()=>{
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
    e.preventDefault()
    await insertAdmin(regInfo)
    setReginInfo({
      name: '',
      email: '',
      number: 0,
      password: '',
    })
  }


  if(insertRegResponse?.response){
    const access_token = insertRegResponse?.access_token
    localStorage.setItem('access_token',access_token)
  }
  // http://localhost:5173/register
  content = isLoading ? <Loader /> : (
      <section className="px-4 pb-24 mx-auto max-w-7xl">
        <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
          <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
            Create your admin account
          </h1>
          
          <form className="mt-8 space-y-4 bg-gray-300 p-4 rounded"  onSubmit={handleRegSubmit}>
            
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
                Password
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
  )

  return content
};

export default Register;
