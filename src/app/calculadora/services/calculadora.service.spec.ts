import { CalculadoraModule } from './../calculadora.module';
import { TestBed, inject } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CalculadoraModule
      ]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })

  );

  it('deve garantir que 4 / 2 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    })

  );

  it('deve garantir que 2 * 4 = 8',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(2, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(8);
    })

  );


});
