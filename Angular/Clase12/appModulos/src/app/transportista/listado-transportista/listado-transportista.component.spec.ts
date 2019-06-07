import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTransportistaComponent } from './listado-transportista.component';

describe('ListadoTransportistaComponent', () => {
  let component: ListadoTransportistaComponent;
  let fixture: ComponentFixture<ListadoTransportistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTransportistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTransportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
