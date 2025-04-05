import { NgModule } from "@angular/core";
import {MatButtonModule} from  '@angular/material/button' ;
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        MatButtonModule,
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule
    ],
})
export class AngularMaterialModule { }