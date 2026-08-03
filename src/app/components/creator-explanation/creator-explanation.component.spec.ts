import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorExplanationComponent } from './creator-explanation.component';

describe('CreatorExplanationComponent', () => {
  let component: CreatorExplanationComponent;
  let fixture: ComponentFixture<CreatorExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorExplanationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
