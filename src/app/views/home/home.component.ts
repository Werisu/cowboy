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
        "optionaisGratis": [],
        "informacoes": "",
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
        "optionaisGratis": [],
        "informacoes": "",
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
        "optionaisGratis": [],
        "informacoes": "",
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
        "nome": "Dog Especial",
        "ingredientes": "Ovo, salsicha, presunto, queijo, alface, tomate , milho, batata palha",
        "optionaisGratis": ["CHEDDAR", "CATUPIRY"],
        "informacoes": "",
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
        "nome": "Bacon Simples",
        "ingredientes": "Bacon, presunto, queijo, alface, tomate, milho",
        "optionaisGratis": [],
        "informacoes": "",
        "carnes": [
          {
            "tipo": "frango",
            "preco": 14
          },
          {
            "tipo": "hamburguer bovino",
            "preco": 13
          },
          {
            "tipo": "calabresa",
            "preco": 15
          }
        ]
      },
      {
        "nome": "Tudo",
        "ingredientes": "Ovo, bacon, salsicha, presunto, queijo, alface, tomate, milho, Batata palha",
        "optionaisGratis": ["CATUPIRY", "CHEDDAR", "PURÊ", "CEBOLA","ABACAXI", "BANANA"],
        "informacoes": "❗️❗️PODE ESCOLHER 2 ADICIONAL GRÁTIS❗️❗️",
        "carnes": [
          {
            "tipo": "frango",
            "preco": 15.5
          },
          {
            "tipo": "hamburguer bovino",
            "preco": 14.5
          },
          {
            "tipo": "calabresa",
            "preco": 16.5
          }
        ]
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
