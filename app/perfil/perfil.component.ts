import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}