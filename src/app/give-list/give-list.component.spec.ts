import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveListComponent } from './give-list.component';

describe('GiveListComponent', () => {
  let component: GiveListComponent;
  let fixture: ComponentFixture<GiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
