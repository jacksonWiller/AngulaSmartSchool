import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  titulo = 'Alunos';

  public alunos = [
    { nome: 'Marta'},
    { nome: 'Paula'},
    { nome: 'Laura'},
    { nome: 'Luiza'},
    { nome: 'Lucas'},
    { nome: 'Pedro'},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
