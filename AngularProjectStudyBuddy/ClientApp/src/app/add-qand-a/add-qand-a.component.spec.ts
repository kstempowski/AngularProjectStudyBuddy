import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQandAComponent } from './add-qand-a.component';

describe('AddQandAComponent', () => {
  let component: AddQandAComponent;
  let fixture: ComponentFixture<AddQandAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQandAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQandAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
