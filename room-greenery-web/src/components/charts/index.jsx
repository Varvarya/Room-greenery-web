import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import useStyles from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

function createGradient(ctx, area) {
  const colorStart = '#ff0000';
  const colorMid = '#ffff00';
  const colorEnd = '#ff00ff';

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export const CustomChart = ({ data }) => {
  const classes = useStyles();
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    // eslint-disable-next-line no-shadow
    const chartData = {
      ...data,
      // eslint-disable-next-line react/prop-types
      datasets: data.datasets,
    };

    setChartData(chartData);
  }, []);

  return (
    <div
      className={classes.chart}
    >
      <Chart
        ref={chartRef}
        type="line"
        data={chartData}
        width="30%"
        options={{ maintainAspectRatio: false }}
      />
    </div>

  );
};

CustomChart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      data: PropTypes.arrayOf(),
    })),
  }).isRequired,
};

CustomChart.defaultProps = {
};

export default CustomChart;
