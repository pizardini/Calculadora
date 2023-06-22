import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tecla',
  templateUrl: './tecla.component.html',
  styleUrls: ['./tecla.component.css']
})
export class TeclaComponent implements OnInit{

  @Input()
  valor: string = "";


  constructor() {}

  ngOnInit(): void {
  }

  descricaoTecla(): string {
    return `[${this.valor}] | Este botão limpa o resultado`;
  }

  exibirMsgConsole(): void {
    console.log(this.descricaoTecla())
  }
}
