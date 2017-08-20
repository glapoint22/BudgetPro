import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeGridComponent } from './envelope-grid.component';

describe('EnvelopeGridComponent', () => {
  let component: EnvelopeGridComponent;
  let fixture: ComponentFixture<EnvelopeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
