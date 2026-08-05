import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityCreatorComponent } from './personality-creator.component';

describe('PersonalityCreatorComponent', () => {
  let component: PersonalityCreatorComponent;
  let fixture: ComponentFixture<PersonalityCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalityCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalityCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
