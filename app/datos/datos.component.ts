import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})

export class datosComponent implements OnInit {
  
  constructor(private localStorageService: LocalStorageService) { }
  

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}
