let lua = document.getElementById('lua');
let estrelas = document.getElementById('estrelas');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    lua.style.top = value * 1.05 + 'px';
    estrelas.style.left = value * 0.25 + 'px';
});