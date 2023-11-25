import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  constructor() { }
}

import { Injectable } from '@angular/core';
import Livro from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro>;

  constructor() {
    // Inicializando o vetor de livros com dados fictícios em formato JSON
    this.livros = [
      { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1'] },
      { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 2'] },
      { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 3'] },
    ];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    // Encontrar o código mais alto e incrementar um para o novo livro
    const novoCodigo = Math.max(...this.livros.map(livro => livro.codigo)) + 1;
    novoLivro.codigo = novoCodigo;

    // Adicionar o novo livro ao vetor
    this.livros.push(novoLivro);
  }

  excluir(codigoLivro: number): void {
    // Encontrar o índice do livro com o código fornecido
    const index = this.livros.findIndex(livro => livro.codigo === codigoLivro);

    // Remover o livro se encontrado
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
