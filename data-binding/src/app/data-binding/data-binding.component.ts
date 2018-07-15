import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://cba.ifmt.edu.br';
  cursoEng: boolean = true;
  urlImg: string = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string;
  valorSalvo: string;
  nome: string = 'abc';

  pessoa: any = {
    nome: 'Gabriela',
    idade: 21
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true
  }  

  botaoClicado(){
    alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit() {
  }

}
