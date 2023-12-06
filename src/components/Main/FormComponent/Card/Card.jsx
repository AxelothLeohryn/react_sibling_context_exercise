import React from "react";

const Card = ({ userData }) => {
  return (
    <>
      {userData.name.length > 0 ? (
        <article id="card">
          <img src={userData.url} />
          <h2>Usuario: {userData.name}</h2>
          <h2>Email: {userData.email}</h2>
          <h2>Edad: {userData.age}</h2>
        </article>
      ) : null}
    </>
  );
};

export default Card;
