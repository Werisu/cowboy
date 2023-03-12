export interface Cardapio {
  hamburgueres: Hamburguere[]
}

export interface Hamburguere {
  nome: string
  ingredientes: string
  optionaisGratis: string[]
  informacoes: string
  carnes: Carne[]
}

export interface Carne {
  tipo: string
  preco: number
}
