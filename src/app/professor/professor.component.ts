import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  titulo = 'Professor';

  public professores = [
    {nome: 'Luiz'},
    {nome: 'Ricardo'},
    {nome: 'Mauricio'},
    {nome: 'Luzia'},
    {nome: 'Edina'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
