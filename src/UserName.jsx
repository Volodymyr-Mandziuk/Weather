import React from "react";

const UserName = (props) => {
  console.log(props);
  return (
    props.user.age > 20 ? (
    <p className="uyrjhfg">{props.user.name} <button>Change name</button> </p>
  ): (
    <p className="uyrjhfg">{props.user.name} {props.user.userSurname} </p>
  ));
}

export default UserName;