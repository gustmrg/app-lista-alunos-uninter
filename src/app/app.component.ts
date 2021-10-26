import { Component } from '@angular/core';
import { Aluno } from 'src/models/aluno'; // importa o modelo criado de aluno e suas propriedades

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public alunos: Aluno[] = []; // cria um array do tipo Alunos conforme o modelo importado
  public title: String = 'Lista de Alunos'; // variável que guarda o título da página que será renderizado no html

  // iniciamos o construtor e acrescentamos todos os alunos com o modelo Aluno importado de aluno.ts 
  // passando os valores das propriedades diretamente na criação e seguindo a ordem da classe
  // conforme o método construtor da classe (RU, Nome, Curso, Data de Nascimento)
  constructor() {
    this.alunos.push(new Aluno(3294435, "Gustavo Miranda", "Análise e Desenvolvimento de Sistemas", "09/02/1990"));
    this.alunos.push(new Aluno(1225444, "Sandra Lima", "Bacharelado em Administração", "08/04/1996"));
    this.alunos.push(new Aluno(8547558, "Tiago Caldeira", "Tecnologia em Design de Games ", "15/12/1989"));
    this.alunos.push(new Aluno(8484885, "Larissa Cardoso", "Bacharelado em Jornalismo", "10/01/2001"));
    this.alunos.push(new Aluno(1335775, "Jaqueline Cordeiro", "Psicologia Clínica", "07/03/1994"));
  }
}