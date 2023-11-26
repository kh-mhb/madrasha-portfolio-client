import React from "react";
import pubali from "../../../assets/pubali.jpg";

const Donation = () => {
  return (
    <div className="mt-10">
      <h1 className="sm:text-3xl text-3xl text-center  border-y-4 lg:w-1/3 sm:w-1/3 mx-auto py-3 font-medium title-font mb-10 text-gray-900">
        Donate Us
      </h1>
      <div className="grid lg:grid-cols-2 gap-y-4 items-center justify-center">
        <div className=" mx-auto ">
          <img className="h-[350px]" src={pubali} alt="" />
        </div>
        <div className="p-3">
          <h3 className="mb-4">
            <span className="font-semibold text-xl font-serif">Bank Name:</span>
            <span className="font-thin text-lg"> Pubali Bank Limited</span>
          </h3>
          <p className="mb-4">
            <span className="font-semibold text-xl font-serif"> Address: </span>
            <span className="font-thin text-lg">
              Moulavibazar Branch,Ashraf Center(1st Floor),M.Saifur Rahman
              Road,Moulavibazar.
            </span>
          </p>
          <p className="mb-4">
            {" "}
            <span className="font-semibold text-xl font-serif">
              Account Number:
            </span>
            <span className="font-thin text-lg"> C/A:26549010001596</span>
          </p>
          <p>
            {" "}
            <span className="font-semibold text-xl font-serif">
              Account Name:
            </span>
            <span className="font-thin text-lg"> Lutfia Atimkhana</span>
          </p>
        </div>
      </div>
      <h3 className="text-center font-mono text-3xl mt-10 mb-5">
        Support Us! Thank You for your Generosity.
      </h3>
    </div>
  );
};

export default Donation;
