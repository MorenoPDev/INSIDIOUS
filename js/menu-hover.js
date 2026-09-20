const menuLinks = document.querySelectorAll(".menu-links a");
const glitchSound = document.querySelector("#glitch-sound");

menuLinks.forEach(function (link) {

    link.addEventListener("mouseenter", function () {

        link.classList.remove("glitching");

        void link.offsetWidth;

        link.classList.add("glitching");

        if (glitchSound) {
            glitchSound.currentTime = 0;
            glitchSound.play().catch(function () {});
        }

        setTimeout(function () {
            link.classList.remove("glitching");
        }, 700);

    });

});