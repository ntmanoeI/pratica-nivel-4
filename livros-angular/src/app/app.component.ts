import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'livros-angular';
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    // ... outros componentes, se houver
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import Editora from './editora';
import Livro from './livro';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigoLivro: number): void => {
    this.servLivros.excluir(codigoLivro);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora) || 'Editora não encontrada';
  }
}
