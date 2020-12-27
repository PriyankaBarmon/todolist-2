const card = document.querySelector(".card");
const inputText = document.querySelector(".input_item");
const inputBtn = document.querySelector(".input_btn");
const items = document.querySelector(".items");
const editBtn = document.querySelector(".edit");
const doneBtn = document.querySelector(".done");
const crossBtn = document.querySelector(".cross");

add = () => {
  if (inputText.value != "") {
    html = ` <div class="todo">
  <input class="item" value="${inputText.value}" disabled></input>
  <div class="btns">
    <ion-icon class="edit" name="create-outline"></ion-icon>
    &nbsp;&nbsp;
    <ion-icon
      class="done"
      name="checkmark-done-circle-outline"
    ></ion-icon>
    &nbsp;&nbsp;
    <ion-icon class="cross" name="close-circle-outline"></ion-icon>
  </div>
</div>`;
    items.insertAdjacentHTML("beforeend", html);
  }
};

clear = () => {
  inputText.value = "";
};

card.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (e.target.closest(".input_item")) {
      add();
      clear();
    }
    if (e.target.closest(".item")) {
      e.target.setAttribute("disabled", "true");
    }
  }
});

card.addEventListener("click", (e) => {
  const edit = e.target.closest(".edit");
  const done = e.target.closest(".done");
  const cross = e.target.closest(".cross");
  if (e.target.closest(".input_btn")) {
    add();
    clear();
  }

  // if (!edit) {
  //   console.log(e.target.parentElement.parentElement.children[0]);

  //   console.log("not edit");
  //   e.target.parentElement.parentElement.children[0].setAttribute(
  //     "disabled",
  //     "true"
  //   );
  // }

  if (edit) {
    // console.log(edit.parentElement.parentElement.children[0]);
    edit.parentElement.parentElement.children[0].removeAttribute("disabled");
    edit.parentElement.parentElement.children[0].focus();
  }

  if (done) {
    done.parentElement.parentElement.children[0].style.textDecoration =
      "line-through";
    done.parentElement.children[0].style.display = "none";
    done.style.display = "none";
  }

  if (cross) {
    items.removeChild(cross.parentElement.parentElement);
  }
});
