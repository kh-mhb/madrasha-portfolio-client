import React from "react";
import useGetAllStudents from "../../../hooks/student/useGetAllStudents";
import Loader from "../shared/Loader";
import { useNavigate } from "react-router-dom";

const Student = () => {
  let content 
  const [ fetchStart, data, isLoading1, error1 ] = useGetAllStudents()
  const navigate = useNavigate()

  content = isLoading1 ? <Loader />  : (

    <section className="text-gray-600 body-font">
      <div className="container px-1 py-24 mx-auto">
        

        
      <div className="hero h-1/3 mb-7 bg-base-300">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Our Students</h1>
              <p className="py-6">
                In seeking knowledge, you are lighting the path to wisdom. 
                Embrace the journey, for learning is a sacred pursuit that 
                leads to enlightenment and a deeper connection with Allah.</p>
              <button onClick={()=>navigate('/teacher')} className="btn btn-sm bg-blue-900 text-white">TEACHERS</button>
              <button onClick={()=>navigate('/')} className="btn btn-sm bg-blue-900 text-white">HOME</button>
              <button onClick={()=>navigate('/committe')} className="btn btn-sm bg-blue-900 text-white">COMMITTE</button>
            </div>
          </div>
        </div>



        <div className="flex flex-wrap -m-4">
          

          {data?.map(student =>
            <div key={student?._id} className="p-2 w-full mx-auto lg:w-1/2">
              <div className="h-full flex  bg-gray-100 p-2 rounded sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="image"
                  className="flex-shrink-0 rounded-lg w-full lg:w-48 h-48 object-cover object-center bg-gray-500 sm:mb-0 mb-4"
                  src={student?.img_link}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                  Name: {student?.name}
                  </h2>
                  <p className="mb-4">
                    Father name: {student?.father_name}
                  </p>
                  <p className="mb-4">
                    Mother name: {student?.mother_name}
                  </p>
                  <h3 className="text-gray-500 mb-3">District: {student?.district}</h3>
                  <p className="mb-4">
                    Village: {student?.village}
                  </p>


                  <span className="inline-flex">
                    <a className="text-gray-500">
                      DOB: {student?.date_of_brth} <span className="text-red-600 font-bold">--</span> class: {student?.stnd_class} 
                    </a>
                  </span>


                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>

)
  
  return content
};

export default Student;
