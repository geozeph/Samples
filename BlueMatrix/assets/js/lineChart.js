new Chart(document.getElementById("chartjs-2"), {
  type: "line",
  data: {
    labels: ["3/18","6/18", "9/18", "12/18", "3/19"],
    datasets: [
      {
        label: "One Year Performance Chart",
        data: [80,82,105,69,110],
        fill: false,
        backgroundColor: "#4E7AC7",
        borderColor: "#4E7AC7",
        lineTension: 0.1,
      },
    ],
  },
  options: {},
});
