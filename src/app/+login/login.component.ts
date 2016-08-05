import { Component, OnInit } from '@angular/core';
import {  UsuarioService } from '../service';
import { Router } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [UsuarioService],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  usuario="local user";
  constructor(
      private _router: Router,
      private _usuarioService:UsuarioService
  ) {}

  ngOnInit() {}
  

}
