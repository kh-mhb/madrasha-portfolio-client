import React from "react";
import Loader from "../shared/Loader";
import useGetAllMember from "../../../hooks/committe/useGetAllMember";
import { useNavigate } from "react-router-dom";

const Committe = () => {
  let content
  const navigate = useNavigate()
  const [ getAllMembers , members , isLoading , error] = useGetAllMember()

  // console.log(members)



  content = isLoading ? <Loader /> : (

    <section className="text-gray-600 body-font">
      <div className="container px-1 rounded py-24 mx-auto">
        

      <div className="hero h-1/3 mb-7 bg-base-300">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Our committe</h1>
            <p className="py-6">
              In the pursuit of knowledge, the soul awakens, and in the 
              service of others, the heart finds peace. May the commitment 
              of our committee members be a beacon of light, guiding us 
              towards the path of wisdom, compassion, and unity.</p>
            <button onClick={()=>navigate('/student')} className="btn btn-sm bg-blue-900 text-white">STUDENTS</button>
            <button onClick={()=>navigate('/')} className="btn btn-sm bg-blue-900 text-white">HOME</button>
            <button onClick={()=>navigate('/teacher')} className="btn btn-sm bg-blue-900 text-white">TEACHERS</button>
          </div>
        </div>
      </div>
        


          <div className="flex flex-wrap -m-2">
            {members?.map(member => 
                  <div  key={member?._id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full  bg-gray-100 flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          Name: {member?.name}
                        </h2>
                        <p className="text-gray-500">Email: {member?.email}</p>
                        <p className="text-gray-500">Number: {member?.number}</p>
                        <p className="text-gray-500">Occupation: {member?.occupation}</p>
                      </div>
                    </div>
                </div>)}

          </div>

      </div>
    </section>

)

  return content
}

export default Committe;
