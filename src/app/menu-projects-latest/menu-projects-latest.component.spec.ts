import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProjectsLatestComponent } from './menu-projects-latest.component';

describe('MenuProjectsLatestComponent', () => {
  let component: MenuProjectsLatestComponent;
  let fixture: ComponentFixture<MenuProjectsLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProjectsLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProjectsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
