import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieCardComponent } from './die-card.component';

describe('DieCardComponent', () => {
  let component: DieCardComponent;
  let fixture: ComponentFixture<DieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DieCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
