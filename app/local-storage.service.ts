// src/app/local-storage.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Guardar datos en LocalStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener datos de LocalStorage
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Eliminar datos de LocalStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Limpiar todos los datos de LocalStorage
  clear(): void {
    localStorage.clear();
  }
}
