import React, { useState } from "react";
import Button from "./Button";
import { FaCog, FaRegCheckSquare } from "react-icons/fa";
import EditHabit from "@/components/EditHabit";
import Modal from "./Modal";
import AddEntry from "./AddEntry";

const CommitChart = ({ title, unitType, type, data, colour }) => {
  const [showEdit, setShowEdit] = useState(false);
  const openEditHandler = () => setShowEdit(true);
  const closeEditHandler = () => setShowEdit(false);

  const [showAddEntry, setShowAddEntry] = useState(false);
  const openAddEntryHandler = () => setShowAddEntry(true);
  const closeAddEntryHandler = () => setShowAddEntry(false);

  const completeTaskHandler = () => {};

  return (
    <>
      <Modal show={showEdit} onCancel={closeEditHandler} title="Edit Habit">
        <EditHabit
          closeHandler={closeEditHandler}
          initialTitle={title}
          initialUnittype={unitType}
          initialType={type}
          initialColor={colour}
        />
      </Modal>
      <Modal
        show={showAddEntry}
        onCancel={closeAddEntryHandler}
        title="Add Entry"
      >
        <AddEntry
          closeHandler={closeAddEntryHandler}
          initialTitle={title}
          initialUnittype={unitType}
          initialType={type}
          initialColor={colour}
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
            {[...Array(366)].map(() => {
              const num = Math.random().toFixed(2);

              return (
                <li className="chart__squares--active">
                  <div
                    style={{ backgroundColor: `${colour}`, opacity: `${num}` }}
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
                type === "number" ? openAddEntryHandler : completeTaskHandler
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
              <p className="habit__stat-value">8 {unitType}</p>
            </div>
            {type === "number" && (
              <div className="habit__stat">
                <p className="habit__stat-label">Average: </p>
                <p className="habit__stat-value">8 {unitType}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitChart;
