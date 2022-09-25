import { useState } from "react";
import "./App.css";
import ThemeContext from "./ContextApi/ThemeContext/Theme";
import HomePage from "./Page/Home/HomePage";

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((theme) => theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`App ${theme}`}>
        <HomePage></HomePage>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
