const fromButton = document.querySelector(".from__btn");
const dissmissMessageButton = document.querySelector(".popup__dismiss");
const popup = document.querySelector(".popup");
const fromInput = document.querySelector(".from__input");
const fromContainer = document.querySelector(".from");

fromContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = fromInput.value;
    console.log(email);

    if (email.includes("@")) {
        popup.classList.remove("hidden");
        popup.classList.add("animation");
    }
});

dissmissMessageButton.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("hidden");
});
