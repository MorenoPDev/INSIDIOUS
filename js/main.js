var text = "INSIDIOUS";
var i = 0;

function typeText() {

    var title = document.getElementById("hero-title");

    if (title && i < text.length) {

        var letter = text.charAt(i);

        var span = document.createElement("span");

        span.innerHTML = letter;

        // Make SI white
        if (i == 2 || i == 3) {
            span.style.color = "white";
        } else {
            span.style.color = "#e50914";
        }

        title.appendChild(span);

        i++;

        setTimeout(typeText, 150);
    }
}

window.addEventListener("load", function() {
    typeText();
});

