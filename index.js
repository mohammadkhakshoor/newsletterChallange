const fromButton = document.querySelector(".from__btn");
const dissmissMessageButton = document.querySelector(".popup__dismiss");
const popup = document.querySelector(".popup");
const formInput = document.querySelector(".from__input");
const formContainer = document.querySelector(".from");

fromButton.addEventListener("click", function (e) {
    e.preventDefault();
    const email = formInput.value;

    if (email.includes("@")) {
        popup.classList.remove("hidden");
        popup.classList.add("animation");
    }
    if (!email || !email.includes("@")) {
        alert("Please enter a valid E-mail address");
    }
});

dissmissMessageButton.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("hidden");
});
