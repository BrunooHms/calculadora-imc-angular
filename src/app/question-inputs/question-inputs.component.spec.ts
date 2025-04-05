import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInputsComponent } from './question-inputs.component';

describe('QuestionInputsComponent', () => {
  let component: QuestionInputsComponent;
  let fixture: ComponentFixture<QuestionInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
