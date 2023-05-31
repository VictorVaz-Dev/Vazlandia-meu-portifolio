let motoazul = document.getElementById('moto-azul');
let motolaranja = document.getElementById('moto-laranja');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    motoazul.style.left = value * 1.5 + 'px';
    motolaranja.style.left = value * -1.5 + 'px';
});