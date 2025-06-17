
// Função que processa o conteúdo de um arquivo recebido como string
export function processFileContent(fileContent: string, parser: (lines: string[]) => any) {
  
  // Divide o conteúdo do arquivo em linhas, ignorando linhas vazias
  const lines = fileContent
    .split('\n')
    .filter(line => line.trim() !== '');

  // Retorna o parser para organizar os dados das linhas
  return parser(lines);
}