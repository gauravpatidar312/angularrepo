import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyanComponent } from './comedyan.component';

describe('ComedyanComponent', () => {
  let component: ComedyanComponent;
  let fixture: ComponentFixture<ComedyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
