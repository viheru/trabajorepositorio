import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PersonajeComponent } from './componentes/personaje/personaje.component';
import { ErrorComponent } from './componentes/error/error.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo: "inicio",
        pathMatch: 'full',
      },
      {
        path:"inicio",
        component: InicioComponent
      },
      {
        path:"personajes",
        component: PersonajesComponent
      },
      {
        path:"login",
        component: LoginComponent
      },
      {
        path:"registro",
        component: RegistroComponent
      },
      {
        path:"personajes/:id",
        component: PersonajeComponent
      },
      {
        path:"**",
        component: ErrorComponent
      }
];
