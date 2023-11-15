import React from "react";
import { spiral } from "ldrs";
spiral.register();

const Loader = () => {
  return (
    <div>
      <l-spiral size="40" speed="0.9" color="black"></l-spiral>
    </div>
  );
};

export default Loader;
