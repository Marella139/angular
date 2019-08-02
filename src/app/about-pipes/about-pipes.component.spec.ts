import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPipesComponent } from './about-pipes.component';

describe('AboutPipesComponent', () => {
  let component: AboutPipesComponent;
  let fixture: ComponentFixture<AboutPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
