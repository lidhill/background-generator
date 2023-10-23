var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

function random_hex_color_code() {
    var random1 = (Math.random() * 0xfffff * 1000000).toString(16);
    color1.value = '#' + random1.slice(0, 6);
    var random2 = (Math.random() * 0xfffff * 1000000).toString(16);
    color2.value = '#' + random2.slice(0, 6);
    setGradient();
};

button.addEventListener("click", random_hex_color_code);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
