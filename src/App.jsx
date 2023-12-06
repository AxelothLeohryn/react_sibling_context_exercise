import { useState } from "react";
import { UserContext } from "./context/userContext";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    url: "",
    age: "",
  });

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  );
}

export default App;
