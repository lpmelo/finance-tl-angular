import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHandlerComponent } from './layout-handler.component';

import { Store } from '@ngrx/store';

import { provideMockStore } from '@ngrx/store/testing';

TestBed.configureTestingModule({
  providers: [
    provideMockStore({})
  ],
});

describe('LayoutHandlerComponent', () => {
  let component: LayoutHandlerComponent;
  let fixture: ComponentFixture<LayoutHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
