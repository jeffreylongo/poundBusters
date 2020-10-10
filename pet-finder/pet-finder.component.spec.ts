import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFinderComponent } from './pet-finder.component';

describe('PetFinderComponent', () => {
  let component: PetFinderComponent;
  let fixture: ComponentFixture<PetFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
