import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "0.1",
    "0.2",
    "0.2",
    "0.2",
    "0.2",
    "0.2",
    "1",
    "2",
    "3",
    "4",
    "3",
    "6",
  ],

  datasets: [
    {
      data: [
        7.69542, 0.24698, 3.88011, 4.83912, 6.45225, 5.46428, 9.74327, 9.50274,
        1.32201, 1.29893, 7.89967, 5.71464, 7.09818, 3.21676, 3.05474, 8.76389,
        4.17843, 3.46429, 1.38341, 7.41063, 4.55408, 9.49004, 2.99844, 7.27309,
        1.89902, 7.08652, 7.91144, 6.28936, 2.05831, 5.00801, 5.15826, 1.95214,
        3.80943, 3.11819, 1.07711, 8.90188, 1.80873, 3.84555, 1.67387, 4.36676,
        1.75228, 6.01367, 1.28835, 8.6953, 5.18953, 8.10492, 0.88521, 2.47618,
        3.08897, 0.31811, 7.391, 1.60949, 3.4011, 8.30078, 4.21249, 8.74492,
        8.74021, 2.11216, 0.32402, 9.4176, 3.66383, 2.33083, 2.40244, 4.81269,
        7.9872, 6.41974, 2.39428, 9.23432, 2.28865, 8.51301, 3.04827, 4.5595,
        8.09117, 0.87354, 9.62422, 6.99751, 2.3122, 8.26605, 7.61376, 1.89591,
        6.11049, 9.7672, 5.61236, 0.63515, 4.14516, 7.65578, 4.74559, 9.2502,
        4.65142, 7.26749, 3.30373, 2.36121, 1.46463, 1.33769, 7.80942, 7.86732,
        1.37243, 3.97289, 6.86029, 3.90987, 3.49486, 5.56607, 3.27257, 0.63101,
        9.32496, 1.46374, 2.64494, 5.37127, 5.88065, 7.97263, 9.38929, 6.44975,
        4.04112, 9.09626, 1.22161, 7.73456, 9.48419, 0.09707, 5.51608, 9.05804,
        2.1601, 9.5881, 5.57203, 4.4633, 5.49335, 2.50074, 2.39662, 6.51343,
        8.63987, 2.65187, 5.65239, 3.2395, 6.3022, 4.91179, 1.43207, 4.35961,
        2.70672, 3.9411, 2.24827, 5.9031, 1.95993, 2.02754, 6.63707, 8.9178,
        6.98328, 9.22915, 4.04046, 3.28682, 3.82857, 1.02166, 9.28263, 7.07766,
        5.66043, 7.78453, 5.04934, 3.65175, 1.65912, 0.65388, 0.67969, 3.82916,
        9.39492, 5.1814, 4.38776, 1.2387, 7.76297, 6.92834, 1.93701, 6.95976,
        9.92738, 1.12086, 0.70917, 4.58612, 1.99133, 8.81132, 0.83843, 4.97363,
        1.73887, 8.8298, 7.61453, 4.7956, 0.18935, 7.18469, 4.33965, 1.50999,
        6.55623, 5.00338, 4.24971, 9.62052, 2.46056, 1.51912, 8.9719, 0.30567,
        2.16477, 8.63085, 0.92774, 1.22423, 1.09465, 4.24342, 0.09215, 8.25797,
        2.98983, 7.5888, 9.37733, 2.66989, 9.25469, 6.34132, 3.71758, 5.41346,
        7.45392, 8.66295, 1.7013, 4.76167, 7.59673, 8.98502, 9.58825, 2.40354,
        9.5403, 9.54792, 3.94534, 9.07096, 1.55271, 3.77691, 1.09718, 8.49388,
        2.32876, 1.22263, 5.58176, 8.82156, 8.40969, 7.81015, 8.71995, 1.2453,
        3.37032, 1.99868, 7.8542, 6.54054, 2.88079, 5.16787, 0.07578, 8.49373,
        7.27507, 0.88069, 0.2826, 3.72542, 0.99695, 9.88069, 7.43578, 6.2537,
        5.88196, 1.20058, 0.6633, 3.5977, 6.96184, 5.41562, 2.78621, 6.68025,
        5.36864, 6.32911, 4.28691, 4.84038, 1.84789, 5.11116, 8.66709, 1.40641,
        2.80473, 1.50915, 1.15416, 1.36764, 3.91406, 6.1549, 4.35173, 0.29629,
        1.83911, 5.74253, 0.65404, 7.63549, 2.28891, 4.88142, 8.06953, 5.10613,
        3.11066, 5.96305, 4.16487, 4.48117, 6.15861, 5.50891, 0.5216, 1.45527,
        9.26087, 0.69724, 4.75747, 4.67924, 1.84737, 0.07018, 3.57113, 1.73302,
        0.18433, 1.57044, 6.90859, 1.43051,
      ],
      fill: false,
      backgroundColor: "#18B1EE",
      borderColor: "#18B1EE",
      lineTension: 0,
    },
  ],
};

const options = {
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
        legend: {
          display: false,
        },
      },
      legend: {
        display: false,
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
  tooltips: {
    enabled: false,
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
