const ctx = document.getElementById("analyticsChart").getContext("2d");

// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDay = new Date().getDay(); // 0 - 6

const gradientLabel1 = ctx.createLinearGradient(0, 0, 0, 400);
gradientLabel1.addColorStop(0, "rgba(71, 69, 164, 1)");
gradientLabel1.addColorStop(1, "rgba(71, 69, 164, 0)");

const gradientLabel2 = ctx.createLinearGradient(0, 0, 0, 400);
gradientLabel2.addColorStop(0, "rgba(248, 205, 112, 1)");
gradientLabel2.addColorStop(1, "rgba(248, 205, 112, 0)");

const analyticsChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label1",
        data: [8000, 5000, 3000, 12000, 18000, 10000, 15000],
        borderColor: gradientLabel1,
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Label2",
        data: [5000, 7000, 4000, 6000, 8000, 5000, 9000],
        borderColor: "rgba(249, 186, 51, 1)",
        backgroundColor: "rgba(245, 166, 35, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 20,
          font: {
            size: 14,
            weight: "regular",
            fontFamily: "Plus Jakarta Sans",
          },
          color: "#0D163A",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: (context) => {
            return context.index === currentDay
              ? "rgba(20, 23, 31, 1)"
              : "rgba(153, 153, 153, 1)";
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 20000,
        ticks: {
          stepSize: 5000,
          callback: function (value) {
            return value / 1000 + "k";
          },
          color: "rgba(153, 153, 153, 1)",
        },
        grid: {
          color: "",
        },
      },
    },
  },
});

document.getElementById("timeframe").addEventListener("change", (event) => {
  const timeframe = event.target.value;
  console.log(`Timeframe changed to: ${timeframe}`);
});
