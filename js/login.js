const primeiraParte = document.getElementById('sessao01');
const segundaParte = document.getElementById('segunda-parte');

function login() {
    primeiraParte.style.display = 'none';
    segundaParte.style.display = 'block';
}

function cadastar() {
    primeiraParte.style.display = 'block';
    segundaParte.style.display = 'none';
}