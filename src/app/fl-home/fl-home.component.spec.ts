import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlHomeComponent } from './fl-home.component';

describe('FlHomeComponent', () => {
  let component: FlHomeComponent;
  let fixture: ComponentFixture<FlHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
