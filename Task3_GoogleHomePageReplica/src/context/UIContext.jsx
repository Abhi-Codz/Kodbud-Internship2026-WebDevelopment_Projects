import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIProvider({ children }) {

  const [theme, setTheme] = useState("dark");
  const [background, setBackground] = useState("default");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <UIContext.Provider
      value={{
        theme,
        toggleTheme,
        background,
        setBackground,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}