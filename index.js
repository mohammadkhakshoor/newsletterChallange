const fromButton = document.querySelector(".from__btn");
const dissmissMessageButton = document.querySelector(".popup__dismiss");
const popup = document.querySelector(".popup");
const formInput = document.querySelector(".from__input");
const formContainer = document.querySelector(".from");
console.log(formInput.value);
// regEx for email validation
const regEx =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

fromButton.addEventListener("click", function (e) {
  e.preventDefault();
  const email = formInput.value;
  const invalidPopup = document.getElementsByClassName("from__invalid-popup");

  invalidPopup.length > 0 && invalidPopup?.[0].remove();

  if (regEx.test(email)) {
    popup.classList.remove("hidden");
    popup.classList.add("animation");
  } else {
    const html = `
    <label class="from__invalid-popup animate" for="email">Invalid E-mail</label>
    `;
    formContainer.insertAdjacentHTML("afterbegin", html);
  }
});

dissmissMessageButton.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("hidden");
});
