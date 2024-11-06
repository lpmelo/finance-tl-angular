import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAgroupmentComponent } from './transaction-agroupment.component';

describe('TransactionAgroupmentComponent', () => {
  let component: TransactionAgroupmentComponent;
  let fixture: ComponentFixture<TransactionAgroupmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionAgroupmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAgroupmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
