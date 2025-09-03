import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonoComponente } from './nono-componente';

describe('NonoComponente', () => {
  let component: NonoComponente;
  let fixture: ComponentFixture<NonoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
