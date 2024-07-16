import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-pagina_principal',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css','./pagina.componet2.css'] // Solo una referencia al CSS principal
})
export class PaginaComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}
