import { useState } from "react";

export const AddCategory = ({onNewcategory}) => {
  const [inputvalue, setInputvalue] = useState("");

  const onInputchange = (event) => {
    setInputvalue(event.target.value);
  };
  const onsubmit = (event) => {
    event.preventDefault();
    if(inputvalue.trim().length <=1) return ;
    // setCategories(categories => [inputvalue,...categories])
    onNewcategory(inputvalue.trim())
    setInputvalue('')
  }

  return (
    <form onSubmit={(event) => onsubmit(event)}>

        <input
          type="text"
          placeholder="Buscar gift"
          value={inputvalue}
          onChange={onInputchange}
        />
    </form>
  );
};
