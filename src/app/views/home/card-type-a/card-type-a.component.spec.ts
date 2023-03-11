import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeAComponent } from './card-type-a.component';

describe('CardTypeAComponent', () => {
  let component: CardTypeAComponent;
  let fixture: ComponentFixture<CardTypeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
