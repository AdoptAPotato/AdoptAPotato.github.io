import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorSubmitComponent } from './creator-submit.component';

describe('CreatorSubmitComponent', () => {
  let component: CreatorSubmitComponent;
  let fixture: ComponentFixture<CreatorSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
