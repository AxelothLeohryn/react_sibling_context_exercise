import { React, useContext } from "react";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const { userData } = useContext(UserContext);
  return <header>
    {userData.email? <h1>Welcome, {userData.email}</h1> : null}
  </header>;
};

export default Header;
