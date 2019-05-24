import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionClienteComponent } from './edicion-cliente.component';

describe('EdicionClienteComponent', () => {
  let component: EdicionClienteComponent;
  let fixture: ComponentFixture<EdicionClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
