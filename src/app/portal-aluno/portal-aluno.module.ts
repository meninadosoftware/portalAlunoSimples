//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes
import {PortalAlunoComponent } from './portal-aluno.component';

@NgModule({
  declarations: [PortalAlunoComponent],
  imports: [
    CommonModule

  ],
  exports:[PortalAlunoComponent]

})
export class PortalAlunoModule { }
