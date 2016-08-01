import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/testing';
import {Usuario} from './usuario.model';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario()).toBeTruthy();
  });
});
