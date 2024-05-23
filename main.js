import "./style.css";

window.onload = () => {
  const numberTag = document.querySelector(".number");

  const generateNumbers = () => {
    let newArray = [];
    for (let i = 0; i < window.innerHeight + window.innerWidth; i++) {
      newArray.push(Math.floor(Math.random() * 9));
    }
    return newArray;
  };

  // add numbers inside numberTag
  const addNumbers = () => {
    const numbers = generateNumbers();
    let newElements = "";
    for (let i = 0; i < numbers.length; i++) {
      newElements += "<span class='number_block'>" + numbers[i] + "</span>";
    }
    numberTag.innerHTML = newElements;
  };
  addNumbers();

  const number_blocks = document.querySelectorAll(".number_block");

  // state
  let hover_count = 0;

  const make_color = () => {
    return `hsl(${hover_count},50%,50%)`;
  };

  number_blocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      hover_count++;
      block.style.textShadow = `0px 0px 10px ${make_color()},0px 0px 20px ${make_color()},0px 0px 40px ${make_color()},0px 0px 80px ${make_color()},0px 0px 160px ${make_color()}`;
    });

    block.addEventListener("mouseout", () => {
      block.style.textShadow = "";
    });
  });
};
