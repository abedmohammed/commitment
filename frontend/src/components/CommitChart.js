import React from "react";

const CommitChart = ({ title, data, colour }) => {
  return (
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
    </div>
  );
};

export default CommitChart;
