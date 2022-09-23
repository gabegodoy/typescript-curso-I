import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";


export class NegociacaoController {
  private _inputData : HTMLInputElement;
  private _inputQuantidade : HTMLInputElement;
  private _inputValor : HTMLInputElement;
  private negociacoes = new Negociacoes;
  private negociacoesView = new NegociacaoView('#negociacoesView');
  private mensagemView = new MensagemView("#mensagemView");
  
  constructor() {
    this._inputData = document.querySelector('#data') as HTMLInputElement;
    this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this._inputValor = document.querySelector('#valor') as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void{
    const negociacao = Negociacao.criaDe(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );
    if (!this.ehDiaUtil(negociacao.data)){ this.mensagemView.update('Apenas negociações em dias úteis são aceitas!'); return}
   
    this.negociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limparFormulario();    
    
  }

  private limparFormulario(): void{
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';

    this._inputData.focus();
  }

  private atualizaView(): void{
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!');
  }

  private ehDiaUtil(data: Date){
    return data.getDay() !== DiasDaSemana.DOMINGO && data.getDay() !== DiasDaSemana.SABADO;
  }
}