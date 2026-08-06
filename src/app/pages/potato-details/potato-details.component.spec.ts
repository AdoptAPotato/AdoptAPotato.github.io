import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoDetailsComponent } from './potato-details.component';

describe('PotatoDetailsComponent', () => {
  let component: PotatoDetailsComponent;
  let fixture: ComponentFixture<PotatoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotatoDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotatoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
