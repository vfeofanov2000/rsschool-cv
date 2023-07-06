let burrgerBtn = document.querySelector('.burger-btn');
let nav = document.querySelector('.nav');
burrgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

let btns = nav.querySelectorAll('.nav-item');
for (let btn of btns) {
    btn.addEventListener("click", () => {
        nav.classList.remove('open');
    })
}