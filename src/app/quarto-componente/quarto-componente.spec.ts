import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoComponente } from './quarto-componente';

describe('QuartoComponente', () => {
  let component: QuartoComponente;
  let fixture: ComponentFixture<QuartoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
