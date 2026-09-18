import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Light } from './light';

describe('Light', () => {
  let component: Light;
  let fixture: ComponentFixture<Light>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Light],
    }).compileComponents();

    fixture = TestBed.createComponent(Light);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
