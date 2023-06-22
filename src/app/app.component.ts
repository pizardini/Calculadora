import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  clicou(valor: number) {
    console.log(`Clicou no ${valor}`);
  }

  valorOperacao: string = "0"

  adicionarValor(valor: number): void {
    this.valorOperacao += valor;
  }
}