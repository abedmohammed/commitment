import React from "react";

const ApiMenu = ({ data }) => {
  return (
    <div className="api-menu">
      <ul className="api-menu__list">
        {data.map((habit) => {
          console.log(habit);
          return (
            <li className="api-menu__item">
              <p className="api-menu__item-name">{habit.settings.title}:</p>
              <p className="api-menu__item-key">{habit._id}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ApiMenu;
