import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAlunoComponent } from './portal-aluno.component';

describe('PortalAlunoComponent', () => {
  let component: PortalAlunoComponent;
  let fixture: ComponentFixture<PortalAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
