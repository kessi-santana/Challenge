
// Representa um produto com id e valor
export interface Product {
  product_id: number;
  value: string;
}

// Representa um pedido com id, valor total, data e lista de produtos
export interface Order {
  order_id: number;
  total: string;
  date: string;
  products: Product[];
}

// Representa um usuário com id, nome e seus pedidos 
export interface User {
  user_id: number;
  name: string;
  orders: Order[];
}