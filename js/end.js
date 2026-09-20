const endButton = document.querySelector("#end-button");
const glitchSound = document.querySelector("#glitch-sound");

if (endButton && glitchSound) {

    endButton.addEventListener("mouseenter", function () {

        endButton.textContent = "OR IS IT?";

        endButton.classList.remove("glitching");

        void endButton.offsetWidth;

        endButton.classList.add("glitching");

        glitchSound.currentTime = 0;

        glitchSound.play().catch(function (error) {
            console.log("Glitch sound could not play:", error);
        });

    });

    endButton.addEventListener("mouseleave", function () {

        endButton.textContent = "THE END";

        endButton.classList.remove("glitching");

    });

}