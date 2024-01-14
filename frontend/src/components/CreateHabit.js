import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Button from "./Button";

const CreateHabit = ({ closeHandler, addHabit }) => {
  const [color, setColor] = useState("#20d400");
  const [showPicker, setShowPicker] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    unittype: "",
    type: "number",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.title) {
      return;
    }

    console.log(formData);

    const data = await fetch("http://localhost:5000/habits", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        settings: {
          title: formData.title,
          type: formData.type,
          unitType: formData.unittype,
          colour: color,
        },
      }),
    }).then((res) => res.json());

    addHabit(data);

    console.log(data);

    closeHandler();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input">
        <label htmlFor="title" className="form__label">
          Habit Name:
        </label>

        <input
          autoComplete="off"
          className="form__text-input"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form__input form__input--inline">
        <label className="form__label" htmlFor="type">
          Habit Type:
        </label>

        <select
          className="form__select"
          value={formData.type}
          onChange={handleChange}
          name="type"
        >
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
        </select>
      </div>

      {formData.type === "number" && (
        <div className="form__input">
          <label htmlFor="unittype" className="form__label">
            Unit:
          </label>

          <input
            autoComplete="off"
            className="form__text-input"
            type="unittype"
            name="unittype"
            value={formData.unittype}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="form__input form__input--inline">
        <label className="form__label">Colour: </label>
        <button
          className="form__color-select"
          onClick={(e) => {
            e.preventDefault();

            setShowPicker((prev) => !prev);
          }}
          style={{ background: `${color}` }}
        >
          {showPicker && (
            <>
              <div
                className="form__color-picker-backdrop"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setShowPicker(false);
                }}
              ></div>
              <HexColorPicker
                className="form__color-picker"
                color={color}
                onChange={setColor}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              />
            </>
          )}
        </button>
      </div>
      <Button type="submit" text="Create" classes="form__button" />
    </form>
  );
};

export default CreateHabit;
