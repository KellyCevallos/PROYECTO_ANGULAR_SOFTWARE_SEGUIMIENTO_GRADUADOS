import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaComponent } from './pagina_principal/pagina.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './menu/menu.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { datosComponent } from './datos/datos.component'; // Importar el nuevo componente

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'pagina-principal', component: PaginaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'datos', component: datosComponent }, // Añadir la ruta para el nuevo componente
  { path: '**', redirectTo: '/login' } // Ruta por defecto para manejar rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
