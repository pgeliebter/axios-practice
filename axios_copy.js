import "regenerator-runtime/runtime";
import axios from "axios";

const BASE_URL = "https://api.github.com";
let frameworksParams = [
  "vuejs/vue",
  "angular/angular.js",
  "emberjs/ember",
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
    console.log(responses);
    return responses;
  });
};

const main = () => {
  updateFrameworkElements(boo());
};

main();
