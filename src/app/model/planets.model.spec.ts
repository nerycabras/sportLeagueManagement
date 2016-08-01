import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/testing';
import {Planets} from './planets.model';

describe('Planets', () => {
  it('should create an instance', () => {
    expect(new Planets()).toBeTruthy();
  });
});
