const widthBorder = document.querySelector(".widthBorder");
const heightBorder = document.querySelector(".heightBorder");
const position = document.querySelector(".position");
const img = document.querySelector("img");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  position.innerText = `
        ${x}px,${y}px
    `;
  widthBorder.style.top = `${y}px`;
  heightBorder.style.left = `${x}px`;
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  position.style.left = `${x}px`;
  position.style.top = `${y}px`;
});
