import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  constructor() { }
}

import { Injectable } from '@angular/core';
import Editora from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora>;

  constructor() {
    // Inicializando o vetor de editoras com dados fictícios em formato JSON
    this.editoras = [
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' },
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);

    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}
