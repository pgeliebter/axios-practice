import "regenerator-runtime/runtime";
import Highcharts from "highcharts";

document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container", {
    chart: {
      type: "column",
    },
    title: {
      text: "Popular Frontend Frameworks",
    },
    xAxis: {
      title: {
        text: "Frameworks",
      },
      categories: ["Vue", "Angular", "Ember", "Svelte", "React"],
    },
    yAxis: { type: "logarithmic", title: { text: "" } },
    series: [
      {
        name: "Stars",
        data: [189097, 59600, 22023, 50923, 175928],
      },
      {
        name: "Watchers",
        data: [30367, 28443, 4253, 2441, 35530],
      },
      {
        name: "Forks",
        data: [6222, 3909, 918, 876, 6675],
      },
    ],
  });
});
