import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqexamComponent } from './mcqexam.component';

describe('McqexamComponent', () => {
  let component: McqexamComponent;
  let fixture: ComponentFixture<McqexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McqexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McqexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
