import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifvoitureComponent } from './modifvoiture.component';

describe('ModifvoitureComponent', () => {
  let component: ModifvoitureComponent;
  let fixture: ComponentFixture<ModifvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifvoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
