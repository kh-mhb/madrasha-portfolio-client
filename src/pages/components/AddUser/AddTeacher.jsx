import { useState } from "react";
import useInsertTeacher from "../../../hooks/teacher/useInsertTeacher";

const AddTeacher = () => {
  const [teacherData, setteacherData] = useState([
    {
      name: "",
      father_name: "",
      mother_name: "",
      date_of_brth: "",
      village: "",
      district: "",
      stnd_class: "",
      img_link: "",
    },
  ]);

  const handleAddField = (e) => {
    e.preventDefault();
    setteacherData([
      ...teacherData,
      {
        name: "",
        father_name: "",
        mother_name: "",
        date_of_brth: "",
        village: "",
        district: "",
        stnd_class: "",
        img_link: "",
      },
    ]);
  };

  const handleFieldChange = (index, key, newValue) => {
    const updatedFields = [...teacherData];
    updatedFields[index][key] = newValue;
    setteacherData(updatedFields);
  };
  const [insertTeacher, insertStresponse, isLoading, error] =
    useInsertTeacher();

  const handleteacherDataSubmit = async (e) => {
    e.preventDefault();

    await insertTeacher(teacherData);

    setteacherData([
      {
        name: "",
        father_name: "",
        mother_name: "",
        date_of_brth: "",
        village: "",
        district: "",
        stnd_class: "",
        img_link: "",
      },
    ]);
  };

  // console.log(insertStresponse) //message
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
                type="text"
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
            className="btn btn-primary mx-3 my-4"
          >
            Add Field
          </button>
          <button onClick={handleteacherDataSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
