import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaslovPipesComponent } from './naslov-pipes.component';

describe('NaslovPipesComponent', () => {
  let component: NaslovPipesComponent;
  let fixture: ComponentFixture<NaslovPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaslovPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaslovPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
