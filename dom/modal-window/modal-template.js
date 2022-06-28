const openBtn = document.querySelector("#openOverlay");
const modal = createModal("Спасибо за обратную связь!");
const body = document.body;

openBtn.addEventListener("click", function(event) {
  body.appendChild(modal);
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");

  overlayElement.innerHTML = template.innerHTML;
  overlayElement.addEventListener("click", function (event) {
    if (event.target == overlayElement) {
      closeElement.click();
    }
  });

  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", function(event) {
    event.preventDefault();
    body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".content");
  contentElement.innerHTML = content; 

  return overlayElement;
}
