import "regenerator-runtime/runtime";
import Highcharts from "highcharts";

function theChart(myData) {
  Highcharts.chart("container", {
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
      categories: myData.names,
    },
    yAxis: { type: "logarithmic", title: { text: "" } },
    series: [
      {
        name: "Stars",
        data: myData.stars,
      },
      {
        name: "Subcribers",
        data: myData.subcribers,
      },
      {
        name: "Forks",
        data: myData.forks,
      },
    ],
  });
}
export default theChart;
