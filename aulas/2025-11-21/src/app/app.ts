import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy{
  protected readonly title = signal('Projeto do melhor professor do mundo!');
  public mensagem = 'Parabéns por ser o melhor professor do mundo 🎉';
  time: Date = new Date();
  intervalId: any;
  nome: string = ''
  idade: number = 0;
 
  alunos: Array<{nome: string, idade: number}> = [ ];

  constructor() {
    this.nome = "Tomaz";
    this.idade = 51;
  }
  
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.alunos = [
      {nome: 'Tomaz', idade: 20},
      {nome: 'Gustavo', idade: 17},
      {nome: 'Jhon', idade: 22},
      {nome: 'Flavia', idade: 16},
      {nome: 'Renan', idade: 53},
      {nome: 'Antonio', idade: 15},
      {nome: 'Isaac', idade: 19},
    ];
  }

  ngOnDestroy(): void {
     clearInterval(this.intervalId);
  }

  public calcularIdade(idade: number): boolean {
    return idade >= 18;
  }

  public excluirAluno(index: number): void {
    console.log('Excluindo aluno no índice:', index);
    const aluno = this.alunos[index];

    const response = confirm(`Deseja realmente excluir o aluno ${aluno.nome}?`);
    
    if (response) {
      this.alunos.splice(index, 1);
    }
  }
}