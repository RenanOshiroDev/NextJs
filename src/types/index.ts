export interface Produto {
    id: string
    nome: string
    descricao: string
    preco: number
    estoque: number
    imagens: string[]
  }
  
  export interface Usuario {
    id: string
    email: string
    nome: string
  }
  
  export interface Pedido {
    id: string
    status: string
    total: number
    items: PedidoItem[]
  }
  
  export interface PedidoItem {
    id: string
    quantidade: number
    preco: number
    produto: Produto
  } 