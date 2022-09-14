import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';
const form = document.querySelector('.form');
const negociacao = new Negociacao(new Date(), 10, 100);
const controller = new NegociacaoController();
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
