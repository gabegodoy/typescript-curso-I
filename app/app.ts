import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';
import { NegociacaoView } from './views/negociacoes-view.js';

const form = document.querySelector('.form');

const negociacao = new Negociacao(new Date(), 10, 100);
const controller = new NegociacaoController();


if (form){  
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
  })

} else throw new Error("Não foi possível inicializar a aplicação. Verifique se o form é valido.");
