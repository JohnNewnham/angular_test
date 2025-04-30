import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptCardsComponent } from './prompt-cards.component';

describe('PromptCardsComponent', () => {
  let component: PromptCardsComponent;
  let fixture: ComponentFixture<PromptCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
