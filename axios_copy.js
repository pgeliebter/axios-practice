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

    const frameworkItems = response.data;

    console.log(`GET: Here's the list of todos`, frameworkItems);

    frameworkData.push(response.data);
    console.log(`Framework data:`, frameworkData);
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
    frameworkItems.map((todoItem) => {
      frameworkList.appendChild(createElement(todoItem));
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
