import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutvoitureComponent } from './ajoutvoiture.component';

describe('AjoutvoitureComponent', () => {
  let component: AjoutvoitureComponent;
  let fixture: ComponentFixture<AjoutvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutvoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
