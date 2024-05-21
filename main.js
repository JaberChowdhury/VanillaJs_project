import "./style.css";

window.onload = () => {
  // access  the dom
  const imageDiv = document.querySelector(".images");
  const btn_left = document.querySelector(".btn-left");
  const btn_right = document.querySelector(".btn-right");

  // state
  const image_urls = [
    "https://cdn.pixabay.com/photo/2022/12/02/16/34/western-honey-bee-7631244_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/21/14/29/chevrolet-8647804_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/16/15/14/sunset-8068208_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/14/15/00/sunset-8063358_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/21/13/00/ginger-8403355_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/04/16/16/25/ai-generated-8700383_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/11/29/11/30/lake-7624330_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/11/07/21/31/rose-7577265_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/09/12/06/fruit-8750860_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/01/09/20/41/wheat-8498380_1280.jpg",
  ];
  let image_position = 0;

  const maintain_image_position = () => {
    if (image_position < 0) {
      image_position = image_urls.length - 1;
    } else if (image_position > image_urls.length - 1) {
      image_position = 0;
    }
  };

  const update_imagesrc = () => {
    imageDiv.src = image_urls[image_position];
  };

  btn_left.addEventListener("click", () => {
    image_position -= 1;
    maintain_image_position();
    update_imagesrc();
  });
  btn_right.addEventListener("click", () => {
    image_position += 1;
    maintain_image_position();
    update_imagesrc();
  });

  setInterval(() => {
    image_position += 1;
    maintain_image_position();
    update_imagesrc();
  }, 1500);

  update_imagesrc();
};
