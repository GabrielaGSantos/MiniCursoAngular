import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Engenharia da Computação', 'Engenharia de Automação'];
  }
}
