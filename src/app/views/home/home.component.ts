import { Component, OnInit } from '@angular/core';
import { Hamburguere } from 'src/app/models/cardapio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hamburgueres: Hamburguere[] = [
      {
        "nome": "Simples",
        "ingredientes": "presunto, queijo, alface, tomate, milho",
        "carnes": [
          {
            "tipo": "frango",
            "preco": 10
          },
          {
            "tipo": "hamburguer",
            "preco": 9
          },
          {
            "tipo": "calabresa",
            "preco": 11
          }
        ]
      },
      {
        "nome": "Especial",
        "ingredientes": "ovo, presunto, queijo, alface, tomate, milho",
        "carnes": [
          {
            "tipo": "frango",
            "preco": 11.5
          },
          {
            "tipo": "hamburguer bovino",
            "preco": 10.5
          },
          {
            "tipo": "calabresa",
            "preco": 12.5
          }
        ]
      },
      {
        "nome": "Dog Simples",
        "ingredientes": "salsicha, presunto, queijo, alface, tomate, milho",
        "carnes": [
          {
            "tipo": "frango",
            "preco": 11.5
          },
          {
            "tipo": "hamburguer bovino",
            "preco": 10.5
          },
          {
            "tipo": "calabresa",
            "preco": 12.5
          }
        ]
      }];

  constructor() { }

  ngOnInit(): void {
  }

}
