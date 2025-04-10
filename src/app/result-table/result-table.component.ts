import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { pesosReferencia } from '../interfaces/pesosReferencias.interface';


@Component({
  selector: 'app-result-table',
  standalone: false,
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss',
})
export class ResultTableComponent {
    @Input({required: true}) resultImc: number | undefined;
    @Input({required: true}) altura: number | undefined;
    @Output() imcNormal = new EventEmitter <{normalMin : number, normalMax : number}>();

    pesosReferencia: pesosReferencia = {} as pesosReferencia
    
    imcUpdateColor(minImc: number, maxImc: number, type: 'bad' | 'good'): string | undefined {
        if(this.resultImc! < maxImc && this.resultImc! > minImc) {
          return type === 'bad' ? 'selected-bad' : 'selected-good';
        }   
        return undefined;
    };

    ngOnChanges(changes: SimpleChanges) { // porque usar o onchanges aqui ao inves de chamar junto com o calculo do imc?
      if(changes['altura']) {
        setTimeout(() => {
          this.calcularPesos()
        })
      }
    };

    calcularPesos() {
      const imcMagreza = 18.5;
      const imcNormalMin = 18.5;
      const imcNormalMax = 24.9;
      const imcSobrepesoMin = 24.9;
      const imcSobrepesoMax = 30;
      const imcObesidade = 30;
      
      this.pesosReferencia = {
          magreza: this.calculatorWeightForTable(imcMagreza),
          normalMin: this.calculatorWeightForTable(imcNormalMin),
          normalMax: this.calculatorWeightForTable(imcNormalMax),
          sobrepesoMin: this.calculatorWeightForTable(imcSobrepesoMin),
          sobrepesoMax: this.calculatorWeightForTable(imcSobrepesoMax),
          obesidade: this.calculatorWeightForTable(imcObesidade)
      };

      this.imcNormal.emit({
        normalMin: this.pesosReferencia.normalMin,
        normalMax: this.pesosReferencia.normalMax
      });

  };
  
   calculatorWeightForTable(imc: number): number {
      return imc * Math.pow(this.altura!, 2) / 10000;
    };

    
  }

    
  

  

  


