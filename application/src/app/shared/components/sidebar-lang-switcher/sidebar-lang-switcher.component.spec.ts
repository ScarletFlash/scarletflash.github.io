import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLangSwitcherComponent } from './sidebar-lang-switcher.component';

describe('SidebarLangSwitcherComponent', () => {
  let component: SidebarLangSwitcherComponent;
  let fixture: ComponentFixture<SidebarLangSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarLangSwitcherComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLangSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
