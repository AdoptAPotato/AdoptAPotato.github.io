import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookCreatorComponent } from './look-creator.component';

describe('LookCreatorComponent', () => {
  let component: LookCreatorComponent;
  let fixture: ComponentFixture<LookCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
