import "./style.css";
import data from "./minidata.json";
// import data from "./data.json";

window.onload = () => {
  const parsedData = JSON.parse(JSON.stringify(data));
  const dataArray = Object.entries(parsedData);

  const color = () => {
    const r = Math.floor(Math.random() * 9);
    const g = Math.floor(Math.random() * 9);
    const b = Math.floor(Math.random() * 9);
    return `#${r}${g}${b}${r}${g}${b}`;
  };

  const render_data = (eachData) => {
    const domtag = document.createElement("div");

    for (let i = 0; i < eachData.length; i++) {
      const key = eachData[i][0];
      const value = eachData[i][1];

      const keyElement = document.createElement("div");
      keyElement.textContent = key + ": ";
      keyElement.classList.add("key");
      domtag.appendChild(keyElement);

      if (typeof value === "string" || typeof value === "number") {
        const valueElement = document.createElement("span");
        valueElement.textContent = value;
        valueElement.setAttribute("class", `box bg-[${color()}]/[0.52]`);
        domtag.appendChild(valueElement);
      } else if (typeof value === "object" && value !== null) {
        const nestedContainer = render_data(Object.entries(value));
        nestedContainer.setAttribute("class", "box");
        domtag.appendChild(nestedContainer);
      } else if (typeof value === "array" && value !== null) {
        const nestedContainer = render_data(data);
        nestedContainer.setAttribute("class", "box");
        domtag.appendChild(nestedContainer);
      }

      domtag.appendChild(document.createElement("br"));
    }

    return domtag;
  };

  // App root
  const root = document.getElementById("root");
  const app = render_data(dataArray);
  root.appendChild(app);
};
