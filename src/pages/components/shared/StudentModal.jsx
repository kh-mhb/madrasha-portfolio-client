import React, { useEffect } from "react";

const StudentModal = ({ isEditModalOpen, setIsEditModalOpen }) => {
  return (
    <div
      className={`modal-box ${
        !isEditModalOpen ? "hidden" : "w-full absolute top-0.5"
      } `}
    >
      <h3 className="font-bold text-lg">Edit Student</h3>
      <button onClick={() => setIsEditModalOpen(!isEditModalOpen)}>
        Close
      </button>
    </div>
  );
};

export default StudentModal;
