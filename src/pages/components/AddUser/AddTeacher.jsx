import { useState } from "react";
import useInsertTeacher from "../../../hooks/teacher/useInsertTeacher";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useUserdata from "../../../hooks/auth/useUserdata";


const AddTeacher = () => {
  const navigate = useNavigate()
  const { u_role } = useUserdata()
  const [insertTeacher, insertStresponse, isLoading, error] = useInsertTeacher()
  const [teacherData, setTeacherData] = useState([{name: "",number: "",img_link: ""}])


  useEffect(()=>{
    if(u_role === 'inactive'){
        navigate('/adminLayout')
    }
  },[u_role])

  useEffect(() => {
    if (insertStresponse && insertStresponse?.acknowledged) {
        toast.success(`Teacher deleted!`, {
        duration: 4000,
        position: 'top-right',
        style: {
          background: 'green',
          color: '#fff',
        },
        icon: '👏',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
    })
  }else if(insertStresponse && !insertStresponse?.acknowledged){
    toast.error('Failed', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: 'red',
          color: '#fff',
        },
        className: '',
        icon: '👏',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
  }, [insertStresponse])




  const handleAddField = (e) => {
    e.preventDefault();
    setTeacherData([
      ...teacherData,
      {
        name: "",
        number: "",
        img_link: "",
      },
    ])
  }

  const handleFieldChange = (index, key, newValue) => {
    const updatedFields = [...teacherData];
    updatedFields[index][key] = newValue;
    setTeacherData(updatedFields);
  }


  const handleteacherDataSubmit = async (e) => {
    e.preventDefault()
    await insertTeacher(teacherData)
    setTeacherData([
      {
        name: "",
        number: "",
        img_link: "",
      }
    ]);
  };


  return (
    <div className="p-3 bg-slate-300 my-7 w-11/12 lg:w-3/4  mx-auto">
      <h3 className="text-center font-semibold text-2xl">Add Teacher </h3>
      <div className="w-full mx-auto">
        <form className="mt-3 bg-slate-100 d-flex  flex-wrap">
          {teacherData.map((field, index) => (
            <div key={index}>
              <p className="my-3 text-orange-600">Teacher No:{index + 1}</p>
              <input
                type="text"
                placeholder="Name"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2  border-b-2"
                value={field.name}
                onChange={(e) =>
                  handleFieldChange(index, "name", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Number"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                value={field.number}
                onChange={(e) =>
                  handleFieldChange(index, "number", e.target.value)
                }
              />

              <input
                type="file"
                placeholder="img_link"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2  lg:mx-3 lg:pl-2 border-b-2 mt-2"
                onChange={(e) =>
                  handleFieldChange(index, "img_link", e.target.value)
                }
              />
            </div>
          ))}

          <button
            onClick={handleAddField}
            className="btn btn-sm mx-3 my-4 bg-blue-300 text-white"
          >
            Add Field
          </button>
          <button onClick={handleteacherDataSubmit} className="btn btn-sm bg-blue-700 text-white">
            Submit
          </button>
        </form>
      </div>
        <div class="flex justify-end mt-2">
          <button onClick={()=>navigate('/adminLayout/checkteacher')}  class="bg-blue-600 text-white px-4 rounded">Check teacher</button>
        </div>
    </div>
  );
};

export default AddTeacher;
