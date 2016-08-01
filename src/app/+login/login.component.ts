import { Component, OnInit } from '@angular/core';
import {  UsuarioService } from '../service';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  usuario="local user";
  constructor(
      private _router: Router,
      private _usuarioService:UsuarioService
  ) {}

  ngOnInit() {}
  

}
