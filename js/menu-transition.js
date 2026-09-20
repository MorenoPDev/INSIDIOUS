const menuButtons = document.querySelectorAll(".menu-button");

menuButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const destination = button.getAttribute("href");

        document.body.classList.add("page-leaving");

        setTimeout(function () {
            window.location.href = destination;
        }, 600);

    });

});