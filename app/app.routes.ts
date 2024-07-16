import { Routes } from '@angular/router';

// Importa todos los componentes que usarás en las rutas
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaComponent } from './pagina_principal/pagina.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './menu/menu.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { datosComponent } from './datos/datos.component';

// Define las rutas de tu aplicación en forma de array de objetos Routes
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto redirige a /login
  { path: 'login', component: LoginComponent }, // Ruta para el LoginComponent
  { path: 'registro', component: RegistroComponent }, // Ruta para el RegistroComponent
  { path: 'pagina-principal', component: PaginaComponent }, // Ruta para el PaginaPrincipalComponent
  { path: 'perfil', component: PerfilComponent }, // Ruta para el PerfilComponent
  { path: 'galeria', component: GaleriaComponent }, // Ruta para el GaleriaComponent
  { path: 'menu', component: MenuComponent }, // Ruta para el MenuComponent
  { path: 'promociones', component: PromocionesComponent }, // Ruta para el PromocionesComponent
  { path: 'datos', component: datosComponent }, // Ruta para el DatosComponent
  { path: '**', redirectTo: '/login' } // Redirige cualquier ruta no definida a /login
];
