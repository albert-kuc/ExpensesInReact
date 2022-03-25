import React from "react";

import ChartBar from './ChartBar'
import './Chart.css'

/**
 * Renders 12 chart bars for each month.
 * Receives data point as props when a chart component is used somewhere in the application.
 * Maps every data point to a ChartBar, hence returns as many bars as input data points.
 * Each bar plots the data point value in relation to the maximum value in the entire chart.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Chart = props => {
  /*
  find the biggest value across all months
   */
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxMonthValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxMonthValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
};

export default Chart