import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  //Negociacao[] === Array<Negociacao>


  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao)
  }

  lista(): readonly Negociacao[] {

  // lista(): ReadonlyArray<Negociacao> === lista(): readonly Negociacao[]
    
    return this.negociacoes;
  }
}


