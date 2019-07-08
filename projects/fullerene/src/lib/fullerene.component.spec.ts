import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullereneComponent } from './fullerene.component';

describe('FullereneComponent', () => {
  let component: FullereneComponent;
  let fixture: ComponentFixture<FullereneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullereneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullereneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
