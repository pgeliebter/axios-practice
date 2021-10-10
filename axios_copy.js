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

    frameworkData.push(response.data);
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
  frameworksParams.forEach((framework) => getFrameworkData(framework));
  return frameworkData;
};

const main = () => {
  setTimeout(updateFrameworkElements(frameworkData), 1000);
};
boo();
main();
console.log(frameworkData);
