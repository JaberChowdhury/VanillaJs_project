window.onload = () => {
  //   DOM selectors
  const bands = document.querySelectorAll(".bands");
  const wrists = document.querySelectorAll(".wrists");
  const imageContainer = document.getElementById("imageContainer");
  const countValue = document.getElementById("count");
  const plusButton = document.getElementById("plusbtn");
  const minusButton = document.getElementById("minusbtn");
  const addcartbtn = document.getElementById("addcartbtn");
  const totalItemContainer = document.getElementById("totalitem");
  const checkoutsection = document.getElementById("checkoutsection");
  const cencelcheckout = document.getElementById("cencelcheckout");
  const selectedItemListContainer = document.getElementById("selectedItemList");
  const buymodelcontainer = document.getElementById("buymodelcontainer");
  const ContinueShoppingbtn = document.getElementById("ContinueShoppingbtn");
  const totalquantitycontainer = document.getElementById("totalquantity");
  const totalpricecontainer = document.getElementById("totalprice");

  // states
  const images = [
    "./images/cyan.png",
    "./images/gray.png",
    "./images/purple.png",
    "./images/teal.png",
  ];
  let count = 2;
  const itemName = "Classy modern smart watch";
  let selectedColor = "";
  let selectedImage = "";
  let selectedSize = "";
  let selectedPrice = 0;
  let totalquantity = 0;
  let totalprice = 0;
  const items = [];

  //   INITIALIZATION
  countValue.innerHTML = count;
  totalItemContainer.innerHTML = count;
  //   addcartbtn.disabled = count !== 0 && true;

  //   helper
  const updateCount = (value) => {
    count += value;
    countValue.innerHTML = count;
    totalItemContainer.innerHTML = count;
  };
  const getPrice = (data) => {
    const dataArray = data.split("");
    let numb = "";
    for (let i = 0; i < dataArray.length; i++) {
      if (parseInt(dataArray[i]) >= 0 && parseInt(dataArray[i]) <= 10) {
        numb += dataArray[i].toString();
      }
    }
    return numb;
  };
  const getSize = (data) => {
    const dataArray = data.split("");
    let size = "";
    for (let i = 0; i < dataArray.length; i++) {
      if (!(parseInt(dataArray[i]) >= 0 && parseInt(dataArray[i]) <= 10)) {
        size += dataArray[i].toString();
      }
    }
    return size.split("$")[0];
  };
  const updateTotalValues = () => {
    totalprice = 0;
    totalquantity = 0;
    items.forEach((item) => {
      totalprice += parseInt(item.price);
      totalquantity += parseInt(item.quantity);
    });
    totalquantitycontainer.innerHTML = totalquantity;
    totalpricecontainer.innerHTML = totalprice;
  };

  //   handling bandscolor
  bands.forEach((band, i) => {
    band.addEventListener("click", (e) => {
      bands.forEach((b) => {
        b.style.border = "0px solid black";
      });
      selectedImage = images[i];
      selectedColor = e.target.id;
      imageContainer.src = images[i];
      band.style.border = "2px solid black";
    });
  });

  // handling wrists
  wrists.forEach((wrist, i) => {
    wrist.addEventListener("click", () => {
      wrists.forEach((w) => {
        w.style.backgroundColor = "white";
        w.style.color = "black";
      });
      selectedSize = getSize(wrist.innerText);
      selectedPrice = getPrice(wrist.innerHTML);
      wrist.style.backgroundColor = "black";
      wrist.style.color = "white";
    });
  });

  // handling counter
  plusButton.addEventListener("click", () => {
    updateCount(1);
  });
  minusButton.addEventListener("click", () => {
    if (count !== 0) {
      updateCount(-1);
    }
  });

  //   handle addcartbtn
  addcartbtn.addEventListener("click", () => {
    if (count > 0 && selectedColor !== "" && selectedSize !== "") {
      checkoutsection.classList.remove("hidden");
      checkoutsection.classList.add("flex");
      items.push({
        item: itemName,
        color: selectedColor,
        size: selectedSize,
        quantity: count,
        price: count * selectedPrice,
        selectedImage,
      });
      console.log(items);
      updateTotalValues();
    }
  });
  //   handle cencelCheckoutbtn
  cencelcheckout.addEventListener("click", () => {
    checkoutsection.classList.remove("flex");
    checkoutsection.classList.add("hidden");
  });

  //   handle ContinueShoppingbtn
  ContinueShoppingbtn.addEventListener("click", () => {
    buymodelcontainer.classList.remove("flex");
    buymodelcontainer.classList.add("hidden");
  });

  //   handle buymodelcontainer
  checkoutsection.addEventListener("click", () => {
    buymodelcontainer.classList.remove("hidden");
    buymodelcontainer.classList.add("flex");
    // cencel checkoutsection
    checkoutsection.classList.remove("flex");
    checkoutsection.classList.add("hidden");
    // render the list
    let datahtml = "";
    for (let i = 0; i < items.length; i++) {
      datahtml += ` 
        <div class="w-full grid grid-cols-5 gap-x-6 font-bold text-center">
                     <div class="flex"><img class="size-20" src="${
                       items[i].selectedImage
                     }" />              
                      ${items[i].item.slice(0, 10)}...</div>
                       <div>${items[i].color}</div>
                       <div>${items[i].size}</div>
                       <div>${items[i].quantity}</div>
                       <div>${items[i].price}</div>
                 </div>
    `;
    }
    selectedItemListContainer.innerHTML = datahtml;
  });
};
