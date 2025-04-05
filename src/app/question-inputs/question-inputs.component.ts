import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IquestionInputs } from '../interfaces/questionInputs.interface';



@Component({
  selector: 'app-question-inputs',
  standalone: false,
  templateUrl: './question-inputs.component.html',
  styleUrl: './question-inputs.component.scss'
})
export class QuestionInputsComponent {

    questionInputs: IquestionInputs =  {
        name: undefined,
        height: undefined,
        weight: undefined
    };

    @Input({required: true}) altura: number | undefined;
    @Output('showImc') showImcEmitt = new EventEmitter <IquestionInputs>();

    isFormValid(): boolean {
      const VALID_INPUTS = this.questionInputs.name !== undefined &&
                           this.questionInputs.name.length >= 3 &&
                           this.questionInputs.height !== undefined &&
                           this.questionInputs.height > 0 &&
                           this.questionInputs.weight !== undefined &&
                           this.questionInputs.weight > 0;
    
      return VALID_INPUTS;
    };

    showImc() {
      this.showImcEmitt.emit(this.questionInputs)
    };
  }



