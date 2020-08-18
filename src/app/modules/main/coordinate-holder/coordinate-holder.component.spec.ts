import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileHolderComponent } from './coordinate-holder.component';

describe('TileHolderComponent', () => {
  let component: TileHolderComponent;
  let fixture: ComponentFixture<TileHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
