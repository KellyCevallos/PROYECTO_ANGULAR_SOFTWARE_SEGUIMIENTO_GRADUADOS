import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}
