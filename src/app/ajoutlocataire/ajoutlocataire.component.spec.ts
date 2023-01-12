import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutlocataireComponent } from './ajoutlocataire.component';

describe('AjoutlocataireComponent', () => {
  let component: AjoutlocataireComponent;
  let fixture: ComponentFixture<AjoutlocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutlocataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutlocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
