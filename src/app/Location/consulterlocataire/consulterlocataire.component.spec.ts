import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterlocataireComponent } from './consulterlocataire.component';

describe('ConsulterlocataireComponent', () => {
  let component: ConsulterlocataireComponent;
  let fixture: ComponentFixture<ConsulterlocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterlocataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterlocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
