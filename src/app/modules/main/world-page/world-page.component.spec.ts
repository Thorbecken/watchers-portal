import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorldPageComponent } from './world-page.component';

describe('WorldPageComponent', () => {
  let component: WorldPageComponent;
  let fixture: ComponentFixture<WorldPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
