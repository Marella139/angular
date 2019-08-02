import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPipesComponent } from './footer-pipes.component';

describe('FooterPipesComponent', () => {
  let component: FooterPipesComponent;
  let fixture: ComponentFixture<FooterPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
