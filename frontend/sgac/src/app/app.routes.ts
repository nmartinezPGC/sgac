import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


// imports del modulo de auth
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { UserComponent } from './pages/auth/user/user.component';


const APP_ROUTES: Routes = [
   // Ruta por defecto
   { path: 'index', component: DefaultComponent },
   { path: 'auth/login', component: LoginComponent },
   { path: 'auth/login/:id', component: LoginComponent },
   { path: 'auth/usuario-nuevo', component: RegisterComponent },
   { path: 'auth/editar-usuario', component: UserComponent },

   // Ruta Default
   { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
