import { Routes } from '@angular/router';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { Perfil2fbComponent } from './perfil2fb/perfil2fb.component';

export const routes: Routes = [
    {path: 'formulario-Dinamico', component:FormDinamicoComponent},
    {path:'perfil-Usuario', component:PerfilUsuarioComponent},
    {path:'perfil2fb', component:Perfil2fbComponent}
];
