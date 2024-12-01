const layers = document.querySelectorAll(".layer");
const container = document.querySelector(".container");
const nav = document.querySelector(".navigation");
const tabs = nav.querySelectorAll("ul li a");
const hamburger = document.querySelector(".hamburger");

// The column transition animation.
function collapse() {
    layers.forEach((layer) => {
        if (layer.classList.contains("active")) {
            layer.classList.remove("active");
        }
    });
}

function home() {
    collapse();
    layers[0].classList.add("active");
}

function about() {
    collapse();
    layers[1].classList.add("active");
}

function services() {
    collapse();
    layers[2].classList.add("active");
}

function portfolio() {
    collapse();
    layers[3].classList.add("active");
}


function contact() {
    collapse();
    layers[4].classList.add("active");
}

// The hamburger animation:
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

// HOME
let content = document.querySelector(".content");

content.querySelectorAll("p")[1].innerHTML = content
    .querySelectorAll("p")[1]
    .textContent.replace(/\S/g, `<span>$&</span>`);

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
    });
});
