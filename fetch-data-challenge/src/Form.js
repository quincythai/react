import React from "react";
import Button from "./Button";

const Form = ({ selection, setSelection }) => {
  return (
    <form onClick={(e) => e.preventDefault()}>
      <Button text="users" selection={selection} setSelection={setSelection} />
      <Button text="posts" selection={selection} setSelection={setSelection} />
      <Button
        text="comments"
        selection={selection}
        setSelection={setSelection}
      />
    </form>
  );
};

export default Form;
