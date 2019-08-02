import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPipesComponent } from './services-pipes.component';

describe('ServicesPipesComponent', () => {
  let component: ServicesPipesComponent;
  let fixture: ComponentFixture<ServicesPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
