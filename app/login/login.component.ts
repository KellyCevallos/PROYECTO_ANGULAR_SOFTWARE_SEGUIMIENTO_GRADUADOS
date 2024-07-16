import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login', // Selector para usar el componente en plantillas
  templateUrl: './login.component.html', // Plantilla HTML del componente
  styleUrls: ['./login.component.css'] // Estilos CSS del componente
})
export class LoginComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}
