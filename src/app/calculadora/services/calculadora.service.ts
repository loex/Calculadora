/**
 * Serviço responsavel por executar a operação matematica de acordo com o operador
 * @author Loex <juniorramone@gmail.com>
 * @since 13/08/2021
 * @version 1.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculadoraService {

  /*
    Define as constantes utilizadas para identificar as operações de calculo
  */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * metodo que calcula uma operação matematica dado dois numeros
   * suporta as operações soma, subtração, divisão e multiplicação
   * @param num1 number
   * @param num2 number
   * @param operacao string operação a ser executada
   * @return number resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //-> resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
