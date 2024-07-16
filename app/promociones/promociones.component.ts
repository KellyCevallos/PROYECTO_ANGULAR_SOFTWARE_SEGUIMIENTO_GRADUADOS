import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}
