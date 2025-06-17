import { User } from '../types/parsedData';
// Define o formato esperado de cada linha antes de ser transformada
interface RawData {
  userId: number;
  name: string;
  orderId: number;
  productId: number;
  value: string;
  date: string;
}

// Função que transforma uma linha de texto em um objeto RawData
export const parseLine = (line: string): RawData | null => {
  const userId = Number(line.slice(0, 10).trim());

// Se a linha não tiver um userId válido, ela é ignorada
  if (!userId) return null;

// Pegando valores em posições definidas para eles
  return {
    userId,
    name: line.slice(10, 55).trim(),
    orderId: Number(line.slice(55, 65).trim()),
    productId: Number(line.slice(65, 75).trim()),
    value: line.slice(75, 87).trim(),
    date: formatDate(line.slice(87, 95).trim()),
  };
};

// Função que formata uma data no formato YYYY-MM-DD
const formatDate = (rawDate: string): string => {
  if (rawDate.length !== 8) return '--';
  return `${rawDate.slice(0, 4)}-${rawDate.slice(4, 6)}-${rawDate.slice(6, 8)}`;
};

// Função principal que converte todas as linhas em um JSON organizado por usuários e pedidos
export const parseFileToJson = (lines: string[]): User[] => {
  const usersMap = new Map<number, User>();

  lines.forEach(line => {
    const parsed = parseLine(line);
    if (!parsed) return; // Ignora linhas inválidas

    const { userId, name, orderId, productId, value, date } = parsed;

    // Se o usuário ainda não foi adicionado no mapa, cria um novo
    if (!usersMap.has(userId)) {
      usersMap.set(userId, { user_id: userId, name, orders: [] });
    }

    const user = usersMap.get(userId)!;

    // Procura se o pedido já existe para o usuário
    let order = user.orders.find(o => o.order_id === orderId);
    if (!order) {
    // Se o pedido não existir, cria um novo
      order = { order_id: orderId, total: value, date, products: [] };
      user.orders.push(order);
    }

    // Adiciona o produto ao pedido
    order.products.push({ product_id: productId, value });
  });

    // Retorna todos os usuários organizados como array
  return Array.from(usersMap.values());
};
