import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MKTHomeComponent } from './mkt-home.component';

describe('MKTHomeComponent', () => {
  let component: MKTHomeComponent;
  let fixture: ComponentFixture<MKTHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MKTHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MKTHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
