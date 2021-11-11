import React from "react";
import useTagDataContext from "../../hooks/useTagDataContext";
import Input from "../common/Input/Input";

const UserInput = () => {
  const { setTag } = useTagDataContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  return <Input onChange={onChange} placeholder="Tag me baby!" />;
};

export default UserInput;
