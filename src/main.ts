import "./style.css";

window.onload = () => {
  const popular_products = document.getElementById("popular_products");

  if (popular_products) {
    console.log(popular_products);
    const data = [
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Onion 1KG",
        price: "$39.99",
        img_src: "/images/onion.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Tomato 500g",
        price: "$39.99",
        img_src: "/images/tomato.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Potato 1KG",
        price: "$39.99",
        img_src: "/images/potato.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Onion 1KG",
        price: "$39.99",
        img_src: "/images/onion.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Tomato 500g",
        price: "$39.99",
        img_src: "/images/tomato.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Potato 1KG",
        price: "$39.99",
        img_src: "/images/potato.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Onion 1KG",
        price: "$39.99",
        img_src: "/images/onion.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Tomato 500g",
        price: "$39.99",
        img_src: "/images/tomato.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Potato 1KG",
        price: "$39.99",
        img_src: "/images/potato.png",
      },
      {
        id: crypto.randomUUID(),
        rating: "4.5",
        name: "Potato 1KG",
        price: "$39.99",
        img_src: "/images/potato.png",
      },
    ];
    let html_data = "";
    for (let i = 0; i < data.length; i++) {
      html_data += `<div class="flex justify-center items-center gap-x-3 p-2">
              <!-- left -->
              <div
                class="bg-[#EFEBE3] rounded size-[53.75px] flex justify-center items-center border-2 border-slate-400"
              >
                <img
                  class="w-[43px]"
                  src=${data[i].img_src}
                  alt="onion"
                />
              </div>
              <!-- right -->
              <div>
                <div class="flex gap-x-4 text-[10px]">
                  <i class="fa-solid fa-star"></i>
                  <p>${data[i].rating}</p>
                </div>
                <p class="text-[12px] lg:text-xs font-bold">${data[i].name}</p>
                <p class="font-semibold text-[10px]">${data[i].price}</p>
              </div>
            </div>`;
    }
    popular_products.innerHTML = html_data;
  }
  console.log("Hello World");
};
