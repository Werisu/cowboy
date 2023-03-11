import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeBComponent } from './card-type-b.component';

describe('CardTypeBComponent', () => {
  let component: CardTypeBComponent;
  let fixture: ComponentFixture<CardTypeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
