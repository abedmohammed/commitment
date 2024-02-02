import React, { useState } from "react";
import Button from "./Button";
import { FaCog, FaRegCheckSquare } from "react-icons/fa";
import EditHabit from "@/components/EditHabit";
import Modal from "./Modal";
import AddEntry from "./AddEntry";

const CommitChart = ({
  title,
  unitType,
  type,
  data,
  colour,
  id,
  deleteHabit,
  updateHabits,
  streak,
  average,
  currDay,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const openEditHandler = () => setShowEdit(true);
  const closeEditHandler = () => setShowEdit(false);

  const [showAddEntry, setShowAddEntry] = useState(false);
  const openAddEntryHandler = () => setShowAddEntry(true);
  const closeAddEntryHandler = () => setShowAddEntry(false);

  const dayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 1); // January 1st of the given year
    const diff = date - start; // Difference in milliseconds
    const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in one day
    return Math.floor(diff / oneDay);
  };

  if (data.at(-1)?.day < dayOfYear(new Date()) - 1) {
    streak = 0;
  }

  const completeTaskHandler = async (value) => {
    const data = await fetch(`http://localhost:5000/habits/${id}/addEntry`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: currDay,
        value: value,
      }),
    }).then((res) => res.json());

    updateHabits(data);
  };

  const setGraphArray = () => {
    const arr = Array(366).fill(0);

    data.forEach((entry) => {
      const { day, value } = entry;
      if (type === "number") {
        arr[day] = Number(value) / (average + Number(value));
      } else {
        arr[day] = 1;
      }
    });

    return arr;
  };

  return (
    <>
      <Modal show={showEdit} onCancel={closeEditHandler} title="Edit Habit">
        <EditHabit
          id={id}
          closeHandler={closeEditHandler}
          initialTitle={title}
          initialUnittype={unitType}
          initialType={type}
          initialColor={colour}
          deleteHabit={deleteHabit}
          updateHabits={updateHabits}
        />
      </Modal>
      <Modal
        show={showAddEntry}
        onCancel={closeAddEntryHandler}
        title="Add Entry"
      >
        <AddEntry
          id={id}
          closeHandler={closeAddEntryHandler}
          initialTitle={title}
          initialUnittype={unitType}
          initialType={type}
          initialColor={colour}
          completeTaskHandler={completeTaskHandler}
        />
      </Modal>
      <div className="habit">
        <h2 className="habit__title">{title}</h2>
        <div className="chart">
          <ul className="chart__months">
            <li>Jan</li>
            <li>Feb</li>
            <li>Mar</li>
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
            <li>Jul</li>
            <li>Aug</li>
            <li>Sep</li>
            <li>Oct</li>
            <li>Nov</li>
            <li>Dec</li>
          </ul>
          <ul className="chart__days">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="chart__squares">
            {[...Array(1)].map(() => (
              <li></li>
            ))}
            {setGraphArray().map((val, i) => {
              let num = Math.random().toFixed(2);

              if (i > 200) {
                num = 0;
              }

              return (
                <li className="chart__squares--active">
                  <div
                    style={{ backgroundColor: `${colour}`, opacity: `${val}` }}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="habit__info">
          <div className="habit__actions">
            <Button
              classes={"button--bordered"}
              icon={<FaRegCheckSquare />}
              text={type === "number" ? "Add Entry" : "Complete Today"}
              clickHandler={
                type === "number"
                  ? openAddEntryHandler
                  : () => {
                      completeTaskHandler(1);
                    }
              }
            />
            <Button
              classes={"button--bordered"}
              icon={<FaCog />}
              text="Edit Habit"
              clickHandler={openEditHandler}
            />
          </div>
          <div className="habit__stats">
            <div className="habit__stat">
              <p className="habit__stat-label">Streak: </p>
              <p className="habit__stat-value">
                {streak} day{streak !== 1 ? "s" : ""}
              </p>
            </div>
            {type === "number" && (
              <div className="habit__stat">
                <p className="habit__stat-label">Average: </p>
                <p className="habit__stat-value">
                  {average.toFixed(2)} {unitType}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitChart;
