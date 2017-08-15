import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBarComponent } from './display-bar.component';

describe('DisplayBarComponent', () => {
  let component: DisplayBarComponent;
  let fixture: ComponentFixture<DisplayBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
