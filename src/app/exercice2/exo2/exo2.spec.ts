import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2 } from './exo2';

describe('Exo2', () => {
  let component: Exo2;
  let fixture: ComponentFixture<Exo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo2],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
