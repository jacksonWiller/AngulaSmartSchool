import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'professores', component: ProfessorComponent},
  {path:'alunos', component: AlunoComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
