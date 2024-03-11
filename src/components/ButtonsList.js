import React from "react";
import Button from "./Button";
const ButtonsList = () => {

  return (
    <div className=" flex ">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Games" />
      <Button name="Live" />

      <Button name="Mantras" />
      <Button name="T-series" />
      <Button name="Comedy" />
      <Button name="Web Development" />
      <Button name="Computer Science" />
      <Button name="Idian Pop Music" />
    </div>
  );
};

export default ButtonsList;
