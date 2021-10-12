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
      categories: myData.names.map(
        (name) => `${name[0].toUpperCase()}${name.slice(1)}`,
      ),
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
    plotOptions: {
      series: {
        // cursor: "pointer",
        events: {
          click: function (event) {
            let i = myData.names.indexOf(event.point.category.toLowerCase());
            let url = myData.htmlLink[i];
            window.open(url, "_blank").focus();
          },
        },
      },
    },
  });
}
export default theChart;
