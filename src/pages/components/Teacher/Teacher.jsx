import React from "react";
import useGetAllTeacher from "../../../hooks/teacher/useGetAllTeacher";
import Loader from "../shared/Loader";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  let content
  const [ fetchStart , data , isLoading , error ] = useGetAllTeacher()
  const navigate = useNavigate()

  content = isLoading? <Loader /> : (

    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          
        
        <div className="hero h-1/3 mb-7 bg-base-300">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Our teacher's panel</h1>
              <p className="py-6">
                Teaching is an act of faith.
                The teacher believes in the seeds they sow, 
                and in the harvest they will reap in the hearts of their students.</p>
              <button onClick={()=>navigate('/student')} className="btn btn-sm bg-blue-900 text-white">STUDENTS</button>
              <button onClick={()=>navigate('/')} className="btn btn-sm bg-blue-900 text-white">HOME</button>
              <button onClick={()=>navigate('/committe')} className="btn btn-sm bg-blue-900 text-white">COMMITTE</button>
            </div>
          </div>
        </div>

 
          <div className="flex flex-wrap -m-4">
            
            {data?.map(teacher => <div key={teacher?._id} className="p-4 w-full  lg:w-1/3">
            <div className="h-full flex flex-col items-center text-center  bg-gray-100 p-1">
                <img
                  alt="team"
                  className="flex-shrink-0 bg-gray-400 rounded-lg w-11/12 h-56 object-cover object-center mb-4"
                  src={teacher?.img_link}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Name:{teacher?.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">Mobile number: {teacher?.number}</h3>

                </div>
              </div>
            </div>)}


            

          </div>
        </div>
    </section>

  )
  
  return content
}

export default Teacher;
