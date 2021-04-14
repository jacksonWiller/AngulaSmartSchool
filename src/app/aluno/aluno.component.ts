import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/aluno';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    {id:1, nome: 'Marta', sobrenome: 'Maria', telefone: 76876883},
    {id:2, nome: 'Paula', sobrenome: 'Lovsk', telefone: 76876883},
    {id:3, nome: 'Laura', sobrenome: 'Lenin', telefone: 76876883},
    {id:4, nome: 'Luiza', sobrenome: 'Lennir', telefone: 76876883},
    {id:5, nome: 'Edina', sobrenome: 'Hens', telefone: 76876883}
  ]

  
  

   
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);

  }


  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = {} as Aluno;
  }
  
 

}
