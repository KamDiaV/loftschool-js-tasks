const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const list = document.querySelector("#list");
const computedStyles = getComputedStyle(list);
const items = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step; 
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0; 

list.style.right = currentRight; 

rightBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (currentRight < maxRight) {
      currentRight += step; 
      list.style.right = `${currentRight}px`;
    }
  }); 

leftBtn.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (currentRight > minRight) {
      currentRight -= step; 
      list.style.right = `${currentRight}px`;
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// rightBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight < 500) {
//     list.style.right = `${currentRight + 100}px`;
//   }
// });

// leftBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight > 0) {
//     list.style.right = `${currentRight - 100}px`;
//   }
// });