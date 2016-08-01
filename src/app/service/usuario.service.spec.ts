import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UsuarioService } from './usuario.service';

describe('Usuario Service', () => {
  beforeEachProviders(() => [UsuarioService]);

  it('should ...',
      inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
