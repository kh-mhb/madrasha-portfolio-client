import React from "react";
import "ldrs/ring";

const Loader = () => {
  return (
    <div>
      import {spiral} from 'ldrs' spiral.register() // Default values shown
      <l-spiral size="40" speed="0.9" color="black"></l-spiral>
    </div>
  );
};

export default Loader;
