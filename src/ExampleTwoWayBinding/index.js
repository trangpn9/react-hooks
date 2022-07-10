import React, { useState } from "react";

const classGroup = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "Angular" },
  { id: 3, name: "VueJS" },
];

function ExampleTwoWayBinding() {
  const [radioChecked, setRadioChecked] = useState(1);
  const [checkboxChecked, setCheckboxChecked] = useState([]);

  /**
   * Handle action on radio
   */
  const handleOnChangeRadio = (id) => {
    setRadioChecked(id);
  };

  const handleCheckedRadio = (id) => {
    let isChecked = radioChecked === id ? true : false;
    return isChecked;
  };

  const handleSubmitRadio = (e) => {
    e.preventDefault();
    console.log("Selected value: ", radioChecked);
  };

  /**
   * Handle action on checkbox
   */
  const handleIsCheckedCheckbox = (id) => {
    return checkboxChecked.includes(id);
  };

  const handleOnChangeCheckbox = (id) => {
    let newCheckbox;

    // if (handleIsCheckedCheckbox(id)) {
    //   newCheckbox = checkboxChecked.filter(item => item != id)
    //   console.log('New checkbox: ', newCheckbox);
    //   setCheckboxChecked(newCheckbox);
    // } else {
    //   newCheckbox = [...checkboxChecked, id]
    //   setCheckboxChecked(newCheckbox);
    //   console.log('New state: ', newCheckbox);
    // }

    setCheckboxChecked((pre) => {
      if (handleIsCheckedCheckbox(id)) {
        newCheckbox = checkboxChecked.filter((item) => item != id);
      } else {
        newCheckbox = [...pre, id];
      }
      console.log("New checkbox: ", newCheckbox);
      return newCheckbox;
    });
  };

  const handleSubmitCheckbox = (e) => {
    e.preventDefault();
    console.log("Checkbox state: ", checkboxChecked);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Example Two-Way Binding</h1>
      <h2>Input type radio:</h2>
      <form>
        {classGroup.map((classItem, index) => (
          <div key={index} style={{ padding: "5px" }}>
            <input
              type="radio"
              id={classItem.id}
              value={classItem.name}
              style={{ marginRight: "5px" }}
              onChange={() => handleOnChangeRadio(classItem.id)}
              checked={handleCheckedRadio(classItem.id)}
            />
            <label htmlFor={classItem.id}>{classItem.name}</label>
          </div>
        ))}
        <button type="button" onClick={(e) => handleSubmitRadio(e)}>
          Submit radio
        </button>
      </form>

      <h2>Input type checkbox:</h2>
      <form>
        {classGroup.map((classItem, index) => (
          <div key={index} style={{ padding: "5px" }}>
            <input
              type="checkbox"
              id={classItem.id}
              value={classItem.name}
              style={{ marginRight: "5px" }}
              checked={handleIsCheckedCheckbox(classItem.id)}
              onChange={() => handleOnChangeCheckbox(classItem.id)}
            />
            <label htmlFor={classItem.id}>{classItem.name}</label>
          </div>
        ))}
        <button type="button" onClick={handleSubmitCheckbox}>
          Submit checkbox
        </button>
      </form>
    </div>
  );
}

export default ExampleTwoWayBinding;
