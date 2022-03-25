import React from "react";

import './ChartBar.css'

/**
 * Dynamically renders individual chart.
 * Calculates how much of this specific chart needs to be filled if props.max value is more than 0.
 * Uses the calculated value as the css style height for the chart bar.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ChartBar = props => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return <div className="chart-bar">
    <div className="chart-bar__inner">
      <div
        className="chart-bar__fill"
        style={{height: barFillHeight}}
      />
    </div>
    <div className="chart-bar__label">{props.label}</div>
  </div>
};

export default ChartBar