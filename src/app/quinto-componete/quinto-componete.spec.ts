import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoComponete } from './quinto-componete';

describe('QuintoComponete', () => {
  let component: QuintoComponete;
  let fixture: ComponentFixture<QuintoComponete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuintoComponete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuintoComponete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
