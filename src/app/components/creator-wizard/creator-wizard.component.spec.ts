import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorWizardComponent } from './creator-wizard.component';

describe('CreatorWizardComponent', () => {
  let component: CreatorWizardComponent;
  let fixture: ComponentFixture<CreatorWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
