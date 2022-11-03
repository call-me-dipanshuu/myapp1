import { createContext } from "react";
import "./App.css";
import Home from "./Home";
const context = createContext();
function App() {
  return (
    <context.Provider value={"Abhi"}>
      <div>
        <Home />
      </div>
    </context.Provider>
  );
}

export default App;
export { context };
