import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserschoolComponent } from './viewuserschool.component';

describe('ViewuserschoolComponent', () => {
  let component: ViewuserschoolComponent;
  let fixture: ComponentFixture<ViewuserschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
