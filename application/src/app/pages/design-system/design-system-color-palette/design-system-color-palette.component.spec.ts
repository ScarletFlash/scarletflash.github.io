import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemColorPaletteComponent } from './design-system-color-palette.component';

describe('DesignSystemColorPaletteComponent', () => {
  let component: DesignSystemColorPaletteComponent;
  let fixture: ComponentFixture<DesignSystemColorPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSystemColorPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSystemColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
