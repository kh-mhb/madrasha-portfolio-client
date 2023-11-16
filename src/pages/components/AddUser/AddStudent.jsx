import { useState } from "react";
import useInsertStudent from "../../../hooks/student/useInsertStudent";


const AddStudent = () => {

  const [studentData,setStudentData] = useState([{
    name:'',
    father_name:'',
    mother_name:'',
    date_of_brth:'',
    village:'',
    district:'',
    stnd_class:'',
    img_link:'',
  },])

  const handleAddField = (e) => {
    e.preventDefault()
    setStudentData([...studentData, {
      name:'',
      father_name:'',
      mother_name:'',
      date_of_brth:'',
      village:'',
      district:'',
      stnd_class:'',
      img_link:'',
    }]);
  }

  const handleFieldChange = (index, key, newValue) => {
    const updatedFields = [...studentData]
    updatedFields[index][key] = newValue
    setStudentData(updatedFields)
  }
  const [insertStudent, insertStresponse, isLoading, error] = useInsertStudent()



  const handleStudentDataSubmit = async(e) =>{
    e.preventDefault()
    
    await insertStudent(studentData)

    setStudentData([{
      name:'',
      father_name:'',
      mother_name:'',
      date_of_brth:'',
      village:'',
      district:'',
      stnd_class:'',
      img_link:'',
    },])
  }

  // console.log(insertStresponse) //message
  return (
    <div>
      <h3 className="text-center font-semibold text-2xl">Add Student</h3>
      <div className="w-full mx-auto">
        <form className="bg-white shadow-mx rounded px-8 pt-6 pb-8 mb-4 d-flex flex-wrap">
          
        {studentData.map((field, index) => (
        
          <div key={index}>
            <p className="my-3 text-orange-600">Student No:{index+1}</p>
              <input
                type="text"
                placeholder="Name"
                className="text-gray-700 text-sm font-bold mb-2 py-2 ps-1 border-b-2 mr-3"
                value={field.name}
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="father's name"
                className="text-gray-700 text-sm font-bold mb-2 py-2 border-b-2 mr-3"
                value={field.father_name}
                onChange={(e) => handleFieldChange(index, 'father_name', e.target.value)}
              />
              <input
                type="text"
                placeholder="mother's name"
                className="text-gray-700 text-sm font-bold mb-2 py-2 border-b-2 mr-3"
                value={field.mother_name}
                onChange={(e) => handleFieldChange(index, 'mother_name', e.target.value)}
              />
              <input
                type="text"
                placeholder="date of birth"
                className="text-gray-700 text-sm font-bold mb-2 py-2 border-b-2 mr-3"
                value={field.date_of_brth}
                onChange={(e) => handleFieldChange(index, 'date_of_brth', e.target.value)}
              />
              <input
                type="text"
                placeholder="village"
                className="text-gray-700 text-sm font-bold mb-2 py-2 border-b-2 mr-3"
                value={field.village}
                onChange={(e) => handleFieldChange(index, 'village', e.target.value)}
              />
              <input
                type="text"
                placeholder="district"
                className="text-gray-700 text-sm font-bold mb-2 py-2 border-b-2 mr-3"
                value={field.district}
                onChange={(e) => handleFieldChange(index, 'district', e.target.value)}
              />
              <input
                type="text"
                placeholder="class"
                className="text-gray-700 text-sm font-bold mb-2 py-2 border-b-2 mr-3"
                value={field.stnd_class}
                onChange={(e) => handleFieldChange(index, 'stnd_class', e.target.value)}
              />
              <input
                type="file"
                placeholder="img_link"
                className="text-gray-700 text-sm font-bold mb-2 mr-3"
                onChange={(e) => handleFieldChange(index, 'img_link', e.target.value)}
              />
            </div>
        
        ))}


            <button onClick={handleAddField} className="btn btn-primary mx-3 my-4">Add Field</button>
            <button onClick={handleStudentDataSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;