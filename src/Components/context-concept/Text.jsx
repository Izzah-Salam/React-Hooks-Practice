import React, { useContext } from "react";
import { GlobalContext } from "../../context/Index";

const Text = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div>
      <h1
        style={{
          fontSize: theme === "light" ? "50px" : "100px",
          backgroundColor: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Izzah Salam
      </h1>
    </div>
  );
};

export default Text;
