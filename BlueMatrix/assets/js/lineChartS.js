var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var config = {
  type: "line",
  data: {
    labels: [
      "Oct-93",
      "Dec-94",
      "Feb-96",
      "Apr-97",
      "Jun-98",
      "Aug-99",
      "Oct-01",
      "Dec-02",
      "Feb-03",
      "Apr-04",
      "Jun-05",
      "Aug-06",
      "Oct-07",
      "Dec-08",
      "Feb-10",
      "Apr-11",
      "Jun-12",
      "Aug-13",
      "Oct-14",
      "Dec-15",
    ],
    datasets: [
      {
        label: "Loans",
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          4.9,
          4,
          3,
          3.9,
          3.5,
          3.4,
          3.3,
          2,
          1.9,
          1.8,
          1.7,
          1.6,
          2,
          1.9,
          1.5,
          1.5,
          1.3,
          1.2,
          1.1,
          1,
        ],
        fill: false,
      },
      {
        label: "TIBOR",
        fill: false,
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [
          2.5,
          2.3,
          2.8,
          0.9,
          0.5,
          0.2,
          0.5,
          0.5,
          0.5,
          0.5,
          0.5,
          0.4,
          0.2,
          0.2,
          0.2,
          0.1,
          0.2,
          0.1,
          0.1,
          0.01,
        ],
      },
      {
        label: "Deposits",
        fill: false,
        backgroundColor: window.chartColors.green,
        borderColor: window.chartColors.green,
        data: [
          2.5,
          2.3,
          2.8,
          0.9,
          0.5,
          0.2,
          0.5,
          0.3,
          0.2,
          0.1,
          0.1,
          0.2,
          0.1,
          0.1,
          0.2,
          0.1,
          0.2,
          0.1,
          0.1,
          0.01,
        ],
      },
      {
        label: "NIM",
        fill: false,
        backgroundColor: window.chartColors.yellow,
        borderColor: window.chartColors.yellow,
        data: [
          1,
          1.2,
          1.1,
          1.9,
          1.5,
          1.5,
          1.6,
          1.5,
          1.5,
          1.4,
          1.4,
          1.3,
          1.2,
          1.1,
          0.02,
          0.01,
          0.02,
          0.01,
          0.01,
          0.01,
        ],
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Rate drops over time, Numbers shown represent %",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    },
  },
};

window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
};

document.getElementById("removeData").addEventListener("click", function () {
  config.data.labels.splice(-1, 1); // remove the label first

  config.data.datasets.forEach(function (dataset) {
    dataset.data.pop();
  });

  window.myLine.update();
});
