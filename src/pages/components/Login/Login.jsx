import React, { useState } from 'react';
import useLoginEditorials from '../../../hooks/auth/useLoginEditorials';
import Loader from '../shared/Loader';

const Login = () => {
  const [ loginEditor , loginResponse , error , isLoading ] = useLoginEditorials()
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  if(isLoading){
    return <Loader />
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginEditor(loginInfo)
    setLoginInfo({
      email: '',
      password: '',
    })
  };

  if(loginResponse?.access_token){
    localStorage.setItem('access_token',loginResponse.access_token)
  }

  return (
    <div className="w-1/2 mt-7 mx-auto ">
      <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
            Login your account
      </h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
