import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoCardComponent } from './potato-card.component';

describe('PotatoCardComponent', () => {
  let component: PotatoCardComponent;
  let fixture: ComponentFixture<PotatoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotatoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotatoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
