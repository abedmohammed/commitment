import React from "react";

const CommitChart = () => {
  return (
    <div class="chart">
      <ul class="chart__months">
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
      <ul class="chart__days">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul class="chart__squares">
        {[...Array(365)].map(() => (
          <li data-level="2"></li>
        ))}
      </ul>
    </div>
  );
};

export default CommitChart;
