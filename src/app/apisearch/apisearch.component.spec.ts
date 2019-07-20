import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisearchComponent } from './apisearch.component';

describe('ApisearchComponent', () => {
  let component: ApisearchComponent;
  let fixture: ComponentFixture<ApisearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
