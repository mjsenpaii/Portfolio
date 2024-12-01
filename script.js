const button = document.getElementById('randomButton');
const texts = ["Click Me!", "HAHA, dito pogi!", "It's a prank!", "Hehe!", "Try Again!"];
let clickCount = 0;

button.addEventListener('click', () => {

    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    clickCount++;
    button.textContent = texts[clickCount % texts.length];

    if (clickCount === 3) {
        window.location.href = 'main.html';
        clickCount = 0;
    }
});
