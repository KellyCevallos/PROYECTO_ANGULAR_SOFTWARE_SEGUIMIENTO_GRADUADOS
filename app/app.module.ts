import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el AppRoutingModule que configura las rutas
import { AppComponent } from './app.component'; // Importa el AppComponent

// Importa todos los componentes utilizados en las rutas
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaComponent } from './pagina_principal/pagina.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './menu/menu.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { datosComponent } from './datos/datos.component';

@NgModule({
  declarations: [
    // No incluyas AppComponent aquí
    LoginComponent,
    RegistroComponent,
    PaginaComponent,
    PerfilComponent,
    GaleriaComponent,
    MenuComponent,
    PromocionesComponent,
    datosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // Otros módulos que puedas necesitar, como FormsModule, HttpClientModule, etc.
  ],
  providers: []
})
export class AppModule {
  // Agrega el constructor
  constructor() {}

  // Llama a bootstrapModule para iniciar la aplicación manualmente
  ngDoBootstrap() {
    // Vacío porque AppComponent se inicia externamente
  }
}
