import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './componets/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './componets/create-empleado/create-empleado.component';

/* Aqui se definen las URL del proyecto */
const routes: Routes = [
  /* Especificamos la ruta por defecto del proyecto */
  { path: '', redirectTo: 'list-empleados', pathMatch: 'full' },
  { path: 'list-empleados', component: ListEmpleadosComponent },
  { path: 'create-empleado', component: CreateEmpleadoComponent },
  /* Si la URL no es valida, redirecciona a la URL por defecto. Siempre tiene que estar en la ultima posicion */
  { path: '**', redirectTo: 'list-empleados', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
