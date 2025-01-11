const botao = document.getElementById('botao');
const fundo1 = document.querySelector('.fundo_inicial');
const cabecalho = document.querySelector('.cabecalho');
const logo_escrita = document.querySelector('.texto_logo');
const botao_sbms = document.querySelector('.centro .centro2 .botao_sbms');
const imagem_grande = document.querySelectorAll('.base2 .imagem_logo2');
const caixa1 = document.querySelector('.caixa1');
const corpo = document.body;

botao.addEventListener('change', () => {
    fundo1.classList.toggle('light-mode');
    cabecalho.classList.toggle('light-mode2');
    logo_escrita.classList.toggle('light-mode3');
    corpo.classList.toggle('light-mode4');
    botao_sbms.classList.toggle('light-mode5');
    imagem_grande.forEach(i => {
        i.classList.toggle('light-mode6');
    });
    caixa1.classList.toggle('light-mode7');
});