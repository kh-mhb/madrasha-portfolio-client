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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Our Students
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In seeking knowledge, you are lighting the path to wisdom. 
            Embrace the journey, for learning is a sacred pursuit that 
            leads to enlightenment and a deeper connection with Allah.
          </p>
        </div>
        <div className="flex justify-end mb-2">
          <button onClick={()=>navigate('/')} className="btn btn-sm bg-blue-600 text-white">HOME</button>
        </div>
        <div className="flex flex-wrap -m-4">
          

          {data?.map(student =>
            <div key={student?._id} className="p-4 w-full mx-auto lg:w-1/2">
              <div className="h-full flex  bg-gray-100 p-2 rounded sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="image"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center bg-gray-500 sm:mb-0 mb-4"
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
