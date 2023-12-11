import React from "react";
import Loader from "../shared/Loader";
import useGetAllMember from "../../../hooks/committe/useGetAllMember";
import { useNavigate } from "react-router-dom";

const Committe = () => {
  let content
  const navigate = useNavigate()
  const [ getAllMembers , members , memberCount , isLoading , error] = useGetAllMember()



  content = isLoading ? <Loader /> : (

    <section className="text-gray-600 body-font">
      <div className="container px-0  mx-auto">
        

      <div className="hero  mb-7 bg-base-300 rounded w-full lg:w-11/12 lg:mx-auto mt-3">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-900">Our committe</h1>
            <p className="py-6">
              In the pursuit of knowledge, the soul awakens, and in the 
              service of others, the heart finds peace. May the commitment 
              of our committee members be a beacon of light, guiding us 
              towards the path of wisdom, compassion, and unity.</p>
          </div>
        </div>
      </div>
        


          <div className="flex flex-wrap ">
            {members?.map(member => 
                  <div  key={member?._id} className="p-2 w-full mx-auto">
                    <div className="h-full  bg-gray-100 flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="image"
                        className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full lg:ml-24"
                        src={member?.img_link}
                      />
                      <div className="flex-grow ml-4 lg:ml-12">
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
