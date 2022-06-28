const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = function(quantity) {
  let markup = "";

  for (let i=0; i < quantity; i++) {
    const block = document.createElement("div");
    block.classList = "item";
    block.innerText = i + 1; 

    markup += block.outerHTML;
  }

  return markup;
};

quantitySelector.addEventListener("change", function(event) {
  const quantity = event.target.value;
  const markup = createMarkup(quantity);

  blocksContainer.innerHTML = markup;
});

const colorTheBlock = function(block, color) {
  block.style.backgroundColor = color;
};

let changed = false; 

colorSelector.addEventListener("change", function(event) {
  const color = event.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed; 

  for (let i = 0; i < items.length; i++) {
    const currentblock = items[i];
    const blockNumber = i+1;

    if (changed) {
      const colorToApply  = blockNumber % 2 != 0 ? color : "#fff";
      colorTheBlock(currentblock, colorToApply);
    } else {
      const colorToApply  = blockNumber % 2 == 0 ? color : "#fff";
      colorTheBlock(currentblock, colorToApply);
     } 
  } 
});
    
//////////////////////////////////////////////////////////////////////////////////


//     if(changed) {
//       if (blockNumber % 2 != 0) {
//         colorTheBlock(currentblock, color);
//       } else {
//         colorTheBlock(currentblock, "#fff");
//       }
//     } else {
//       if (blockNumber % 2 == 0) {
//         colorTheBlock(currentblock, color);
//       } else {
//         colorTheBlock(currentblock, "#fff");
//       }
//     }
//   } 
// });


