import { useContext } from "react";
import { GlobalContext } from "../../context/Index";

const Button = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};

export default Button;
