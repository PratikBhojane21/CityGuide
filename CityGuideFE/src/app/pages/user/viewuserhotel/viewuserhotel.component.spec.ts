import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserhotelComponent } from './viewuserhotel.component';

describe('ViewuserhotelComponent', () => {
  let component: ViewuserhotelComponent;
  let fixture: ComponentFixture<ViewuserhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
