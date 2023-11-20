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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our committe
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
          <div className="flex justify-end mb-2">
            <button onClick={()=>navigate('/')} className="btn btn-sm bg-blue-600 text-white">HOME</button>
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
