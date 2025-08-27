import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OitavoCompomente } from './oitavo-compomente';

describe('OitavoCompomente', () => {
  let component: OitavoCompomente;
  let fixture: ComponentFixture<OitavoCompomente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OitavoCompomente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OitavoCompomente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
