import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClassComponent } from './info-class.component';

describe('InfoClassComponent', () => {
  let component: InfoClassComponent;
  let fixture: ComponentFixture<InfoClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
