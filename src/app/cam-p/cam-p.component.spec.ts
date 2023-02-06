import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamPComponent } from './cam-p.component';

describe('CamPComponent', () => {
  let component: CamPComponent;
  let fixture: ComponentFixture<CamPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
