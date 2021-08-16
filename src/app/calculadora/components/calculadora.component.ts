import { Component, OnInit } from '@angular/core';
//import { threadId } from 'worker_threads';
import { CalculadoraService } from '../services';
//import { parse } from 'path';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraservice: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void {
    if (this.operacao == null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
    }

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraservice.calcular(
        parseFloat(this.numero2), parseFloat(this.numero2), this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;

    }
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraservice.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);

  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.numero2 !== null) {
      return this.numero2;
    }

    return this.numero1

  }

}
