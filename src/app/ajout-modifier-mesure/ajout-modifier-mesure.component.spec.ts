import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifierMesureComponent } from './ajout-modifier-mesure.component';

describe('AjoutModifierMesureComponent', () => {
  let component: AjoutModifierMesureComponent;
  let fixture: ComponentFixture<AjoutModifierMesureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutModifierMesureComponent]
    });
    fixture = TestBed.createComponent(AjoutModifierMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
