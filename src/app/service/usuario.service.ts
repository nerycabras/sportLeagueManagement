import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
@Injectable()
export class UsuarioService {
  constructor() {}
   getPlanets(): Promise<Usuario[]>{
    return Promise.resolve(USUARIO_LOCAL);
  }

}
const USUARIO_LOCAL: Usuario[] = [
];