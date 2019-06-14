import { TestBed, async, inject } from '@angular/core/testing';

import { SalirRutaGuard } from './salir-ruta.guard';

describe('SalirRutaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalirRutaGuard]
    });
  });

  it('should ...', inject([SalirRutaGuard], (guard: SalirRutaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
