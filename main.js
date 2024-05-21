import "./style.css";

window.onload = () => {
  const numberTag = document.querySelector(".number");
  
  const generateNumbers = () => {
    let newArray = [];
    for (let i = 0; i < window.innerHeight; i++) {
      newArray.push(Math.floor(Math.random() * 9));
    }
    return newArray;
  };

  // add numbers inside numberTag
  const addNumbers = () => {
    const numbers = generateNumbers();
    let newElements = "";
    for (let i = 0; i < numbers.length; i++) {
      newElements += "<span>" + numbers[i] + "</span>";
    }
    numberTag.innerHTML = newElements;
  };

  addNumbers();
};
