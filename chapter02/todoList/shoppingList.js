const list = document.querySelector(".list");
const addBtn = document.querySelector(".addBtn");
const trash = document.querySelector(".fa-trash-alt");
const input = document.querySelector("input");

function onAdd() {
  const createItem = document.createElement("li");
  const createItem__name = document.createElement("span");
  const createItem__trashButton = document.createElement("button");
  const createItem__trashImage = document.createElement("i");
  const input = document.querySelector("input");

  if (input.value === "") {
    return;
  }

  createItem.setAttribute("class", "item");
  createItem__name.setAttribute("class", "item__name");
  createItem__trashButton.setAttribute("class", "trashButton");
  createItem__trashImage.setAttribute("class", "fas fa-trash-alt");

  createItem__name.innerText = input.value;
  list.appendChild(createItem);
  createItem.appendChild(createItem__name);
  createItem.appendChild(createItem__trashButton);
  createItem__trashButton.appendChild(createItem__trashImage);

  input.value = "";
  input.focus();

  createItem.scrollIntoView();

  createItem__trashImage.addEventListener("click", () => {
    list.removeChild(createItem);
    input.focus();
  });
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});

// list.addEventListener("click", (e) => {
//     if (e.target.className === "fas fa-trash-alt") {
//       list.removeChild(createItem__name);
//     }
//   });
