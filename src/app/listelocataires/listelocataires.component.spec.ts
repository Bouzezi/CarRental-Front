import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelocatairesComponent } from './listelocataires.component';

describe('ListelocatairesComponent', () => {
  let component: ListelocatairesComponent;
  let fixture: ComponentFixture<ListelocatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelocatairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListelocatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
