import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSliderComponent } from './fab-slider.component';

describe('FabSliderComponent', () => {
  let component: FabSliderComponent;
  let fixture: ComponentFixture<FabSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FabSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
