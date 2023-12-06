import React from "react";

const Form = ( {handleSubmit}) => {
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Name"/>
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input type="url" name="url" id="url" placeholder="Link to image"/>
        <input type="number" name="age" id="age" placeholder="Age"/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
