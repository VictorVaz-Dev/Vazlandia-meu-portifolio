let motoazul = document.getElementById('motoazul');
let motolaranja = document.getElementById('motolaranja');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    motoazul.style.left = value * 1.5 + 'px';
    motolaranja.style.left = value * -1.5 + 'px';
});