import { useState } from "react";
import useInsertTeacher from "../../../hooks/teacher/useInsertTeacher";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AddTeacher = () => {
  const navigate = useNavigate()
  const [insertTeacher, insertStresponse, isLoading, error] = useInsertTeacher()
  const [teacherData, setTeacherData] = useState([{name: "",number: "",img_link: ""}])


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
    <div>
      <h3 className="text-center font-semibold text-2xl">Add Teacher </h3>
      <div className="w-full mx-auto">
        <form className="bg-white shadow-mx rounded px-8 pt-6 pb-8 mb-4 d-flex flex-wrap">
          {teacherData.map((field, index) => (
            <div key={index}>
              <p className="my-3 text-orange-600">Teacher No:{index + 1}</p>
              <input
                type="text"
                placeholder="Name"
                className="text-gray-700 text-sm font-bold mb-2 py-2 ps-1 border-b-2 mr-3"
                value={field.name}
                onChange={(e) =>
                  handleFieldChange(index, "name", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Number"
                className="text-gray-700 text-sm font-bold mb-2 py-2 ps-1 border-b-2 mr-3"
                value={field.number}
                onChange={(e) =>
                  handleFieldChange(index, "number", e.target.value)
                }
              />

              <input
                type="file"
                placeholder="img_link"
                className="text-gray-700 text-sm font-bold mb-2 mr-3"
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
