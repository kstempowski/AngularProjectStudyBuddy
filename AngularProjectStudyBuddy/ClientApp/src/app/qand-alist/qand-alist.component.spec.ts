import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QandAListComponent } from './qand-alist.component';

describe('QandAListComponent', () => {
  let component: QandAListComponent;
  let fixture: ComponentFixture<QandAListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QandAListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QandAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
