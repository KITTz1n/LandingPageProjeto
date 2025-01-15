const botao = document.getElementById('botao');
const fundo1 = document.querySelector('.fundo_inicial');
const cabecalho = document.querySelector('.cabecalho');
const logo_escrita = document.querySelector('.texto_logo');
const botao_sbms = document.querySelector('.centro .centro2 .botao_sbms');
const imagem_grande = document.querySelectorAll('.base2 .imagem_logo2');
const caixa1 = document.querySelector('.caixa1');
const slogan = document.querySelector('.base3 .slogan');
const texto1 = document.getElementById('texto1');
const corpo = document.body;

botao.addEventListener('change', () => {
    if (botao.checked)
    {
        fundo1.id = 'light-mode1';
        cabecalho.id = 'light-mode2';
        logo_escrita.id = 'light-mode3';
        corpo.id = 'light-mode4';
        botao_sbms.id = 'light-mode5';
        imagem_grande.forEach(i => {
            i.id = 'light-mode6';
        });
        caixa1.id = 'light-mode7';
        slogan.id = 'light-mode8';
        texto1.id = 'light-mode9';
    }
    else
    {
        fundo1.id = '';
        cabecalho.id = '';
        logo_escrita.id = '';
        corpo.id = '';
        botao_sbms.id = '';
        imagem_grande.forEach(i => {
            i.id = '';
        });
        caixa1.id = '';
        slogan.id = '';
        texto1.id = 'texto1';
    }
});