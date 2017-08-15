import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopesComponent } from './envelopes.component';

describe('EnvelopesComponent', () => {
  let component: EnvelopesComponent;
  let fixture: ComponentFixture<EnvelopesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
