import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlcamPComponent } from './flcam-p.component';

describe('FlcamPComponent', () => {
  let component: FlcamPComponent;
  let fixture: ComponentFixture<FlcamPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlcamPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlcamPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
