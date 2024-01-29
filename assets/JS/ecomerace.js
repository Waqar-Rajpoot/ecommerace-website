const wrapper = document.querySelector(".slidewraper");
const menuItems = document.querySelectorAll(".menuitems");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./assets/img/air.png",
        },
        {
          code: "darkblue",
          img: "./assets/img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./assets/img/jordan.png",
        },
        {
          code: "green",
          img: "./assets/img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./assets/img/blazer.png",
        },
        {
          code: "green",
          img: "./assets/img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./assets/img/crater.png",
        },
        {
          code: "lightgray",
          img: "./assets/img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./assets/img/hippie.png",
        },
        {
          code: "black",
          img: "./assets/img/hippie2.png",
        },
      ],
    },
  ];


  let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

//   console.log(currentProductImg);


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Chaging of slides
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // console.log(item, index);
        chosenProduct = products[index];

        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
          color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
}); 

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

