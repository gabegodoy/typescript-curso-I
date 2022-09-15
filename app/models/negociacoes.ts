import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  //Negociacao[] === Array<Negociacao>


  public adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] {

  // lista(): ReadonlyArray<Negociacao> === lista(): readonly Negociacao[]
    
    return this.negociacoes;
  }
}


