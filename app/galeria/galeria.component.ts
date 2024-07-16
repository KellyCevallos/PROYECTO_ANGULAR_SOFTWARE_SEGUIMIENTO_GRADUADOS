import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}

