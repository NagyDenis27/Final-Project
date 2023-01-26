window.onload = function () {
  const modal = document.querySelector(".Modal");
  const openModal = document.querySelector("#modalBtn");
  const closeModal = document.querySelector(".closeBtn");
  const parentDiv = document.querySelector(".center");
  const submit = document.querySelector("#submit");
  const newDiv = document.createElement("p");

  openModal.addEventListener("click", () => {
    modal.showModal();
    return;
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });

  const validateForm = () => {
    const nameValue = document.forms["contactForm"]["valid1"].value;
    const emailValue = document.forms["contactForm"]["valid2"].value;

    if (nameValue === "" && emailValue === "") {
      newDiv.innerText = "Please fill the inputs! ";
      newDiv.setAttribute(
        "style",
        "color: red;  border: 2px solid red; border-radius: 20px; box-shadow: 0px 0px 15px rgb(0, 0, 0); margin:10px; padding:none;"
      );
      var input1 = document
        .getElementById("name")
        .setAttribute("style", "border: solid 2px red; border-radius:10px;");
      var input2 = document
        .getElementById("email")
        .setAttribute("style", "border: solid 2px red; border-radius:10px; ");
      var input3 = document
        .getElementById("message")
        .setAttribute("style", "border: solid 2px red; border-radius:10px;");
      parentDiv.appendChild(newDiv);
    } else if (nameValue.length < [3]) {
      newDiv.innerText = "Name to Short!";
      newDiv.setAttribute(
        "style",
        "color: red;  border: 2px solid red; border-radius: 20px; box-shadow: 0px 0px 15px rgb(0, 0, 0); margin:10px; padding:none;"
      );
      var input1 = document
        .getElementById("name")
        .setAttribute(
          "style",
          " box-shadow: 0px 0px 10px red; border-radius: 10px; border: 2px solid red"
        );
    } else if (
      !emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      newDiv.innerText = "Email not correct ";
      newDiv.setAttribute(
        "style",
        "color: red;  border: 2px solid red; border-radius: 20px; box-shadow: 0px 0px 15px rgb(0, 0, 0); margin:10px; padding:none;"
      );
      var input2 = document
        .getElementById("email")
        .setAttribute(
          "style",
          " box-shadow: 0px 0px 10px red; border-radius: 10px; border: 2px solid red"
        );
      parentDiv.appendChild(newDiv);
    } else {
      newDiv.innerText = "Thank you!";
      newDiv.setAttribute(
        "style",
        "color: green;  border: 2px solid green; border-radius: 20px; box-shadow: 0px 0px 15px rgb(0, 0, 0); margin:10px; padding:none;"
      );
      var input1 = document
        .getElementById("name")
        .setAttribute("style", "border: solid 2px green; border-radius:10px;");
      var input2 = document
        .getElementById("email")
        .setAttribute("style", "border: solid 2px green; border-radius:10px; ");
      var input3 = document
        .getElementById("message")
        .setAttribute("style", "border: solid 2px green; border-radius:10px;");
      parentDiv.appendChild(newDiv);
    }
  };

  submit.addEventListener("click", validateForm);

  //Comment Section
};

window.addEventListener("load", function () {
  const addButtonElement = document.querySelector("#addButton");
  const commentContainer = document.querySelector(".CommentSection");
  const addCommentElement = document.querySelector("#addComment");

  const create = () => {
    var commentElement = createCommentElement(addCommentElement.value);
    commentContainer.appendChild(commentElement);
  };
  if (create) {
    addButtonElement.addEventListener("click", create);
  }
});

const deleteCommentElement = (event) => {
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
};

const createCommentElement = (textareaValue) => {
  const div = document.createElement("div");
  div.classList.add("comment");
  div.innerHTML =
    "<p></p>" +
    textareaValue +
    " <button class='delBtn' onclick=deleteCommentElement(event)>&times;</button>";
  return div;
};
