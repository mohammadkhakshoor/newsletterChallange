const fromButton = document.querySelector(".from__btn");
const dissmissMessageButton = document.querySelector(".popup__dismiss");
const popup = document.querySelector(".popup");
const formInput = document.querySelector(".from__input");
const formContainer = document.querySelector(".from");

fromButton.addEventListener("click", function (e) {
    e.preventDefault();

    const email = formInput.value;
    const invalidPopup = document.getElementsByClassName("from__invalid-popup");
    if (!email || !email.includes("@")) {
        // if the invalid popup does not exist in the dom , add it once and no more
        if (!invalidPopup.length) {
            const html = `
        <label class="from__invalid-popup animate" for="email">Invalid E-mail</label>
        `;
            formContainer.insertAdjacentHTML("afterbegin", html);
        }
    }
    if (email && email.includes("@")) {
        popup.classList.remove("hidden");
        popup.classList.add("animation");
        // delete the invalid E-mail popup when the address is correct
        invalidPopup[0].remove();
    }
});

dissmissMessageButton.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("hidden");
});
