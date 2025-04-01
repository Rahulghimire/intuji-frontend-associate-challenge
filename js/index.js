const currentDay = new Date().getDay();

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("analyticsChart").getContext("2d");

  const gradientLabel1 = ctx.createLinearGradient(0, 0, 0, 400);
  gradientLabel1.addColorStop(0, "rgba(71, 69, 164, 1)");
  gradientLabel1.addColorStop(1, "rgba(71, 69, 164, 0)");

  const gradientLabel2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradientLabel2.addColorStop(0, "rgba(248, 205, 112, 1)");
  gradientLabel2.addColorStop(1, "rgba(114, 76, 0, 0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Label1",
          data: [5000, 10000, 8000, 12000, 18000, 15000, 10000],
          borderColor: "rgb(71, 69, 164)",
          backgroundColor: gradientLabel1,
          fill: true,
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: "Label1",
          data: [3000, 6000, 4000, 8000, 10000, 7000, 5000], // Sample data for yellow line
          borderColor: "rgba(248, 205, 112, 1)",
          backgroundColor: gradientLabel2,
          fill: true,
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 20000,
          ticks: {
            stepSize: 5000,
            callback: function (value) {
              return value / 1000 + "k";
            },
            color: "#666",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        x: {
          ticks: {
            color: (context) => {
              return context.index === currentDay
                ? "rgba(20, 23, 31, 1)"
                : "rgba(153, 153, 153, 1)";
            },
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 30,
            font: {
              size: 8,
              weight: "regular",
              fontFamily: "Plus Jakarta Sans",
            },
            color: "#0D163A",
          },
        },
      },
    },
  });
});
