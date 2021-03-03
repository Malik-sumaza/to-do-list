const input = document.querySelector(".block__form-input");
const btn = document.querySelector(".block__form-btn");
const blockList = document.querySelector(".block__list");

function edit(newElem) {
  newElem.disabled = !newElem.disabled;
}

function createElemet(text) {
  const newElem = document.createElement("input");

  newElem.classList.add("block__list-elem");
  newElem.value = text;
  newElem.disabled = true;

  const editBtn = document.createElement("button");
  const saveBtn = document.createElement("button");

  editBtn.classList.add("edit-btn");
  editBtn.textContent = "EDIT";
  blockList.appendChild(editBtn);

  saveBtn.classList.add("save-btn");
  saveBtn.textContent = "SAVE";
  blockList.appendChild(saveBtn);

  editBtn.addEventListener("click", () => {
    edit(newElem);
  });

  saveBtn.addEventListener("click", () => {
    edit(newElem);
  });

  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("block__list-delete");
  deleteBtn.textContent = "DELETE";
  blockList.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    blockList.removeChild(newElem);
    blockList.removeChild(deleteBtn);
    blockList.removeChild(editBtn);
    blockList.removeChild(saveBtn);
  });

  blockList.appendChild(newElem);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value != "") {
    createElemet(input.value);
    input.value = "";
  } else {
    alert("Enter text!");
  }
});
