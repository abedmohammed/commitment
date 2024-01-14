import React, { useState } from "react";
import Button from "./Button";

const AddEntry = ({
  closeHandler,
  initialTitle,
  initialUnittype,
  completeTaskHandler,
}) => {
  const [formData, setFormData] = useState({
    value: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleEntry = (event) => {
    event.preventDefault();
    if (formData.value === "") {
      return;
    }
    completeTaskHandler(formData.value);
    closeHandler();
  };

  return (
    <form className="form" onSubmit={handleEntry}>
      <h4 className="form__title">{initialTitle}</h4>

      <div className="form__input">
        <label htmlFor="value" className="form__label">
          {initialUnittype}
        </label>

        <input
          autoComplete="off"
          className="form__text-input"
          type="number"
          name="value"
          value={formData.value}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" text="Add" classes="form__button" />
    </form>
  );
};

export default AddEntry;
