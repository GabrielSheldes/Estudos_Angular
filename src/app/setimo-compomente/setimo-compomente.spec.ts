import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetimoCompomente } from './setimo-compomente';

describe('SetimoCompomente', () => {
  let component: SetimoCompomente;
  let fixture: ComponentFixture<SetimoCompomente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetimoCompomente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetimoCompomente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
