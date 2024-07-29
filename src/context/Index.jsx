import { createContext, useState } from "react";
// First we have to create a Context
export const GlobalContext = createContext(null);

// than we create a context provider
export default function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

// now you have to wrape this globalstate into root component
