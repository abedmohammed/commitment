import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Button from "./Button";

const EditHabit = ({
  closeHandler,
  initialTitle,
  initialUnittype,
  initialType,
  initialColor,
}) => {
  const [color, setColor] = useState(initialColor);
  const [showPicker, setShowPicker] = useState(false);
  const [formData, setFormData] = useState({
    title: initialTitle,
    unittype: initialUnittype || "",
    type: initialType,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (!formData.title) {
      return;
    }

    console.log(formData);
    closeHandler();
  };

  return (
    <form className="form" onSubmit={handleEdit}>
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
      <Button type="submit" text="Edit" classes="form__button" />
    </form>
  );
};

export default EditHabit;
