const slideBox = document.querySelector('.slider .slide-box');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.slider .next');
const inputUrl = document.querySelector('.slider .addPanel .url');
const inputTitle = document.querySelector('.slider .addPanel .title');
const addButton = document.querySelector('.slider .addPanel .addButton');

let slideCurrent = 0;
class Slide {
    constructor(text, src) {
        this.text = text;
        this.src = src;
        this.create();
    }
    create() {
        let slide = document.createElement('div');
        let content = document.createElement('div');
        let desc = document.createElement('h1');
        let img = document.createElement('img');
        slide.classList.add('slide');
        content.classList.add('content');
        desc.classList.add('desc');
        desc.innerText = this.text;
        img.src = this.src;
        content.append(desc, img);
        slide.appendChild(content);
        slideBox.appendChild(slide);
        slideCurrent += 100;
        slideBox.style.width = slideCurrent + '%';
    }
}

let currentLeft = 0;

prev.addEventListener('click', () => {
    if (currentLeft >= 0) {
        currentLeft = -`${slideBox.children.length - 1}00`;
    } else {
        currentLeft += 100;
    }
    slideBox.style.left = currentLeft + '%';
});
next.addEventListener('click', () => {
    if (currentLeft <= Number(`${-slideBox.children.length + 1}00`)) {
        currentLeft = 0;
    } else {
        currentLeft -= 100;
    }
    slideBox.style.left = currentLeft + '%';
});
addButton.addEventListener('click', () => {
    if (inputUrl.value && inputTitle.value) {
        new Slide(inputTitle.value, inputUrl.value);
    }
    prev.style.left = '20px';
    next.style.right = '20px';
});
document.body.addEventListener('keydown', (e) => {
    if (inputUrl.value && inputTitle.value && e.keyCode == 13) {
        new Slide(inputTitle.value, inputUrl.value);
    }
});
















