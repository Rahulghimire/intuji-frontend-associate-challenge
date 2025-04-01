// const ctx = document.getElementById("analyticsChart").getContext("2d");

// // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// const currentDay = new Date().getDay(); // 0 - 6

// const gradientLabel1 = ctx.createLinearGradient(0, 0, 0, 400);
// gradientLabel1.addColorStop(0, "rgba(71, 69, 164, 1)");
// gradientLabel1.addColorStop(1, "rgba(71, 69, 164, 0)");

// const gradientLabel2 = ctx.createLinearGradient(0, 0, 0, 400);
// gradientLabel2.addColorStop(0, "rgba(248, 205, 112, 1)");
// gradientLabel2.addColorStop(1, "rgba(248, 205, 112, 0)");

// const analyticsChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     datasets: [
//       {
//         label: "Label1",
//         data: [8000, 5000, 3000, 12000, 18000, 10000, 15000],
//         borderColor: "rgba(71, 69, 164, 1)",
//         backgroundColor: "rgba(74, 144, 226, 0.2)",
//         fill: true,
//         tension: 0.4,
//         pointRadius: 0,
//       },
//       {
//         label: "Label2",
//         data: [5000, 7000, 4000, 6000, 8000, 5000, 9000],
//         borderColor: "rgba(249, 186, 51, 1)",
//         backgroundColor: "rgba(245, 166, 35, 0.2)",
//         fill: true,
//         tension: 0.4,
//         borderWidth: 2,
//         pointRadius: 0,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//         labels: {
//           usePointStyle: true,
//           boxWidth: 10,
//           padding: 20,
//           font: {
//             size: 14,
//             weight: "regular",
//             fontFamily: "Plus Jakarta Sans",
//           },
//           color: "#0D163A",
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           color: (context) => {
//             return context.index === currentDay
//               ? "rgba(20, 23, 31, 1)"
//               : "rgba(153, 153, 153, 1)";
//           },
//         },
//       },
//       y: {
//         beginAtZero: true,
//         max: 20000,
//         ticks: {
//           stepSize: 5000,
//           callback: function (value) {
//             return value / 1000 + "k";
//           },
//           color: "rgba(153, 153, 153, 1)",
//         },
//         grid: {
//           color: "",
//         },
//       },
//     },
//   },
// });

// const ctx = document.getElementById("analyticsChart").getContext("2d");

// const currentDay = new Date().getDay(); // 0 - 6

// const analyticsChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     datasets: [
//       {
//         label: "Label 1",
//         borderColor: "#6A5ACD",
//         backgroundColor: "rgba(106, 90, 205, 0.1)",
//         data: [10000, 12000, 8000, 15000, 19000, 22000, 17000],
//         fill: true,
//         pointRadius: 0,
//       },
//       {
//         label: "Label 2",
//         borderColor: "#FFA500",
//         backgroundColor: "rgba(255, 165, 0, 0.1)",
//         data: [5000, 7000, 6000, 9000, 8000, 11000, 10000],
//         fill: true,
//         pointRadius: 0,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("analyticsChart").getContext("2d");

  new Chart(ctx, {
    type: "line", // Use 'line' type with fill to create an area chart
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Label1",
          data: [5000, 10000, 8000, 12000, 18000, 15000, 10000], // Sample data for blue line
          borderColor: "#5a4af5", // Blue line color
          backgroundColor: "rgba(90, 74, 245, 0.2)", // Blue fill with opacity
          fill: true,
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: "Label1",
          data: [3000, 6000, 4000, 8000, 10000, 7000, 5000], // Sample data for yellow line
          borderColor: "#f5a623",
          backgroundColor: "rgba(245, 166, 35, 0.2)",
          fill: true,
          borderWidth: 2,
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
            color: "#666",
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
            pointStyle: "circle",
            padding: 20,
            color: "#333",
          },
        },
      },
    },
  });
});
