import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  
  public titulo = 'Alunos';
  public alunoSelecionado: string;


  public alunos = [
    {id:1, nome: 'Marta', sobrenome: 'Maria', telefone: 76876883},
    {id:2, nome: 'Paula', sobrenome: 'Lovsk', telefone: 76876883},
    {id:3, nome: 'Laura', sobrenome: 'Lenin', telefone: 76876883},
    {id:4, nome: 'Luiza', sobrenome: 'Lennir', telefone: 76876883},
    {id:5, nome: 'Edina', sobrenome: 'Hens', telefone: 76876883}
  ]

  alunoSelecedt(aluno: any){
    this.alunoSelecionado = aluno.nome;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
