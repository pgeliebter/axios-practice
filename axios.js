import "regenerator-runtime/runtime";
import axios from "axios";
import theChart from "./chart";

const BASE_URL = "https://api.github.com";
let frameworksParams = [
  "vuejs/vue",
  "angular/angular.js",
  "emberjs/ember.js",
  "sveltejs/svelte",
  "facebook/react",
];

let frameworkData = [];

const getFrameworkData = async (framework) => {
  try {
    const response = await axios.get(`${BASE_URL}/repos/${framework}`);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

const createElement = (item) => {
  const frameworkElement = document.createElement("li");

  frameworkElement.appendChild(document.createTextNode(item.name));

  return frameworkElement;
};

const updateFrameworkElements = (frameworkItems) => {
  const frameworkList = document.querySelector("ul");
  if (Array.isArray(frameworkItems) && frameworkItems.length > 0) {
    frameworkItems.map((element) => {
      frameworkList.appendChild(createElement(element));
    });
  } else if (frameworkItems) {
    frameworkList.appendChild(createElement(frameworkItems));
  }
};

const boo = () => {
  Promise.all([
    getFrameworkData(frameworksParams[0]),
    getFrameworkData(frameworksParams[1]),
    getFrameworkData(frameworksParams[2]),
    getFrameworkData(frameworksParams[3]),
    getFrameworkData(frameworksParams[4]),
  ]).then((responses) => {
    const boo = responses.map((e, i) => ({
      stars: e.stargazers_count,
      subcribers: e.subscribers_count,
      forks: e.forks_count,
      name: e.name,
      id: i,
    }));
    const fool = {
      stars: boo.map((e) => e.stars),
      forks: boo.map((e) => e.forks),
      subcribers: boo.map((e) => e.subcribers),
      names: boo.map((e) => e.name),
    };
    console.log(boo, fool);
    updateFrameworkElements(responses);
    document.addEventListener("DOMContentLoaded", theChart(fool));
  });
};

const main = () => {
  updateFrameworkElements(boo());
};

main();
