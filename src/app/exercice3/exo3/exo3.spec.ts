import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo3 } from './exo3';

describe('Exo3', () => {
  let component: Exo3;
  let fixture: ComponentFixture<Exo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo3],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
