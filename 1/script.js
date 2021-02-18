let parent = document.querySelector('.container')
let parent2 = parent.querySelector('.circle')
let parent3 = parent2.addEventListener('mouseover', color);

function color() {
    parent2.classList.toggle('brown');
    document.body.classList.toggle('blue');
}

document.body.addEventListener('mouseover', color2)

function color2() {
    document.body.classList.toggle('white');
}