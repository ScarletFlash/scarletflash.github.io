import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryTileComponent } from './repository-tile.component';

describe('RepositoryTileComponent', () => {
  let component: RepositoryTileComponent;
  let fixture: ComponentFixture<RepositoryTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryTileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
