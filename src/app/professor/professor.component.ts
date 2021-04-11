import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  titulo = 'Professor';
  public professorSelecionado: string;

  public professores = [
    {id: 1, nome: 'Luiz', sobrenome: 'Kent', telefone: 334432333},
    {id: 2, nome: 'Ricardo', sobrenome: 'Fupster', telefone: 432432432},
    {id: 3, nome: 'Mauricio', sobrenome: 'Kernol', telefone: 38768},
    {id: 4, nome: 'Luzia', sobrenome: 'Zuart', telefone: 339879},
    {id: 5, nome: 'Edina', sobrenome: 'Lenh', telefone: 76876883}
  ]

  professorSelect(aluno: any){
    this.professorSelecionado = aluno.nome;
  }

  voltar(){
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
