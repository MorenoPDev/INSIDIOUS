const moth = document.querySelector(".moth");
const overlay = document.querySelector("#further-overlay");
const door = document.querySelector(".red-door");
const returnButton = document.querySelector("#return-button");
const message = document.querySelector(".further-message");

/* MOTH CLICK */
moth.addEventListener("click", function () {
    document.body.classList.add("glitch");

    setTimeout(function () {
        document.body.classList.remove("glitch");
        overlay.classList.add("active");
    }, 500);
});

/* RED DOOR CLICK */
door.addEventListener("click", function () {
    if (door.classList.contains("opening")) return;

    door.classList.add("opening");


    setTimeout(function () {
        message.innerHTML = `
            <p>WELCOME TO THE FURTHER.</p>
            <span>YOU WERE NEVER ALONE.</span>
        `;

        message.classList.add("final-message");
    }, 1000);
});

/* RETURN BUTTON */
returnButton.addEventListener("click", function () {
    overlay.classList.remove("active");

    setTimeout(function () {
        door.classList.remove("opening");

        message.innerHTML = `
        `;

        message.classList.remove("final-message");
    }, 500);
});

/* MOTH TRAIL */
function createMothTrail() {
    const rect = moth.getBoundingClientRect();

    const trail = document.createElement("span");
    trail.classList.add("moth-trail");

    trail.style.left =
        rect.left +
        rect.width / 2 +
        (Math.random() * 25 - 12) +
        "px";

    trail.style.top =
        rect.top +
        rect.height / 2 +
        (Math.random() * 25 - 12) +
        "px";

    const size = Math.random() * 5 + 2;

    trail.style.width = size + "px";
    trail.style.height = size + "px";

    document.body.appendChild(trail);

    setTimeout(function () {
        trail.remove();
    }, 2000);
}

setInterval(createMothTrail, 80);