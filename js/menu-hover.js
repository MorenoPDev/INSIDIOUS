const menuLinks = document.querySelectorAll(".menu-links a");

menuLinks.forEach(function (link) {

    link.addEventListener("mouseenter", function () {

        link.classList.remove("glitching");

        void link.offsetWidth;

        link.classList.add("glitching");

        setTimeout(function () {
            link.classList.remove("glitching");
        }, 700);

    });

});
