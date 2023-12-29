import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplaceComponent } from './viewplace.component';

describe('ViewplaceComponent', () => {
  let component: ViewplaceComponent;
  let fixture: ComponentFixture<ViewplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
