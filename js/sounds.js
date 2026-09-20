const music = document.getElementById("background-music");
const soundToggle = document.getElementById("sound-toggle");
const glitchSound = document.getElementById("glitch-sound");

let musicEnabled = localStorage.getItem("musicEnabled") === "true";
let glitchInterval;


/* ========================================
   SOUND TOGGLE
======================================== */

function updateSoundButton() {

    if (soundToggle) {
        soundToggle.textContent = musicEnabled ? "🔊" : "🔇";
    }
}


if (soundToggle) {

    soundToggle.addEventListener("click", function(event) {

        event.preventDefault();

        if (musicEnabled) {

            /* TURN SOUND OFF */

            musicEnabled = false;

            localStorage.setItem("musicEnabled", "false");

            if (music) {
                music.pause();
            }

            if (glitchSound) {
                glitchSound.pause();
                glitchSound.currentTime = 0;
            }

        } else {

            /* TURN SOUND ON */

            musicEnabled = true;

            localStorage.setItem("musicEnabled", "true");

            if (music) {
                music.play().catch(function() {
                    console.log("Music autoplay was blocked.");
                });
            }
        }

        updateSoundButton();
    });
}


/* ========================================
   START MUSIC IF ENABLED
======================================== */

if (musicEnabled && music) {

    music.play().catch(function() {
        console.log("Music autoplay was blocked.");
    });
}

updateSoundButton();


/* ========================================
   GLITCH EFFECT
======================================== */

function triggerGlitch() {

    const elements = document.querySelectorAll(
        ".page-name, main h1, main h2, main > h3, #hero-title"
    );

    if (elements.length === 0) {
        return;
    }

    const randomElement =
        elements[Math.floor(Math.random() * elements.length)];


    /* Remove previous glitch */

    randomElement.classList.remove("glitch-effect");

    void randomElement.offsetWidth;


    /* ========================================
       ONLY GLITCH WITH SOUND ENABLED
    ======================================== */

    if (!musicEnabled) {
        return;
    }


    if (glitchSound) {

        glitchSound.currentTime = 0;

        const duration = 1;

        randomElement.style.setProperty(
            "--glitch-duration",
            duration + "s"
        );

        randomElement.classList.add("glitch-effect");


        /* Play glitch sound */

        glitchSound.play().catch(function() {
            console.log("Glitch sound was blocked.");
        });


        /* Remove glitch after 1 second */

        setTimeout(function() {

            randomElement.classList.remove("glitch-effect");

            randomElement.style.removeProperty(
                "--glitch-duration"
            );

        }, 1000);
    }
}


/* ========================================
   GLITCH EVERY 6 SECONDS
======================================== */

glitchInterval = setInterval(function() {

    triggerGlitch();

}, 6000);


/* ========================================
   STOP SOUND WHEN LEAVING PAGE
======================================== */

window.addEventListener("beforeunload", function() {

    if (glitchInterval) {
        clearInterval(glitchInterval);
    }

    if (glitchSound) {
        glitchSound.pause();
        glitchSound.currentTime = 0;
    }

    if (music) {
        music.pause();
        music.currentTime = 0;
    }
});
