import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypologiesComponent } from './typologies.component';

describe('TypologiesComponent', () => {
  let component: TypologiesComponent;
  let fixture: ComponentFixture<TypologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
