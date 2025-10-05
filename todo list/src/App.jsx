import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Content from "./components/Content";
import { createContext } from "react";
export let usercontent = createContext();

function App() {
  let [user, setUser] = useState("name: John Doe, age: 25, location: New York");
  /*   console.log(usercontent); */

  return (
    <usercontent.Provider value={{user}}>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </usercontent.Provider>
  );
}

export default App;
