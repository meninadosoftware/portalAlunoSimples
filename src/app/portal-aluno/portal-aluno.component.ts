import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-aluno',
  templateUrl: './portal-aluno.component.html',
  styleUrls: ['./portal-aluno.component.scss']
})
export class PortalAlunoComponent implements OnInit {
// variáveis flag 
  visualizar = false;

  constructor() { }

  ngOnInit(): void {
  }

  // ações dos botões 
  habilitarAulas(){
    this.visualizar = true;
}
  fecha(){
  this.visualizar = false;
 }
}
