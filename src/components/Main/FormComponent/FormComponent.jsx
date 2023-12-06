import { React, useContext } from "react";
import Form from "./Form";
import Card from "./Card";
import { UserContext } from "../../../context/userContext";

const FormComponent = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserData = {
      name: event.target.name.value,
      email: event.target.email.value,
      url: event.target.url.value,
      age: event.target.age.value,
    };
    setUserData(newUserData);
  };
  return (
    <section id="form-component">
      <Form handleSubmit={handleSubmit} />
      {userData ? <Card userData={userData} /> : null}
    </section>
  );
};

export default FormComponent;
