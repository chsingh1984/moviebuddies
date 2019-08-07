import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPickerComponent } from './movies-picker.component';

describe('MoviesPickerComponent', () => {
  let component: MoviesPickerComponent;
  let fixture: ComponentFixture<MoviesPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
