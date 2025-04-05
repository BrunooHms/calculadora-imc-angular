import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-result',
  standalone: false,
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
    @Input({required: true}) name: string | undefined;
    @Input({required: true}) resultImc: number | undefined;
    @Input({required: true}) imcNormalMin: number | undefined;
    @Input({required: true}) imcNormalMax: number | undefined;

    
    updateColorImc(): string {
        if(this.resultImc! > 18.5 && this.resultImc! < 24.9) {
          return 'selected-good'
        } else {
          return 'selected-bad'
        }
    };

}
