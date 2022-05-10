import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrsNavbarComponent } from './drs-navbar.component';

describe('DrsNavbarComponent', () => {
  let component: DrsNavbarComponent;
  let fixture: ComponentFixture<DrsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
