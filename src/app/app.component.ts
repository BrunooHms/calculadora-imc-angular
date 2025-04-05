import { Component} from '@angular/core';
import { IquestionInputs } from './interfaces/questionInputs.interface';
import { pesosReferencia } from './interfaces/pesosReferencias.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  questionInputs: IquestionInputs[] = [] 
  inputsSelected: IquestionInputs = { } as IquestionInputs
  showResult: boolean = false;
  resultImc: number | undefined = 0
  name: string | undefined = ''
  altura: number | undefined;
  normalMin!: number
  normalMax!: number

  convertToMeters(value: number | undefined)  {
      return value! / 100;
  };

  showImc(questionInputs: IquestionInputs) {
    
    const  CALCULATE_IMC =  questionInputs.weight! / (this.convertToMeters(questionInputs.height!) ** 2);

    this.resultImc = CALCULATE_IMC;
    this.name = questionInputs.name;

    this.altura = questionInputs.height!

    return this.showResult = true;

  }

  receivingImcNumber(statsImc: {normalMin: number, normalMax: number}) {
      this.normalMin = statsImc.normalMin
      this.normalMax = statsImc.normalMax
  }

}
