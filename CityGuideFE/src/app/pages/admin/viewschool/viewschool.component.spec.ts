import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewschoolComponent } from './viewschool.component';

describe('ViewschoolComponent', () => {
  let component: ViewschoolComponent;
  let fixture: ComponentFixture<ViewschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
