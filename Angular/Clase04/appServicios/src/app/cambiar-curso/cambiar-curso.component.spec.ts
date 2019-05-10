import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarCursoComponent } from './cambiar-curso.component';

describe('CambiarCursoComponent', () => {
  let component: CambiarCursoComponent;
  let fixture: ComponentFixture<CambiarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
