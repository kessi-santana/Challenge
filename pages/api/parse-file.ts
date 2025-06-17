import type { NextApiRequest, NextApiResponse } from 'next';
import { parseFileToJson } from '../../src/services/fileParser';
import { processFileContent } from '../../src/services/fileProcessor';

// Função que trata as requisições da API
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // Só aceita requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Recebe o conteúdo do arquivo no corpo da requisição
  const fileContent = req.body as string;

  // Se o conteúdo do arquivo não existir um erro 400 é retornado 
  if (!fileContent) {
    return res.status(400).json({ message: 'File content is missing.' });
  }

  try {
    // Processa o conteúdo do arquivo e organiza os dados dos usuários
    const users = processFileContent(fileContent, parseFileToJson);

    // Retorna os dados processados com sucesso
    return res.status(200).json(users);
  } catch (error) {
    
    // Se der erro, mostra no console e responde com erro 500
    console.error('Error processing file:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
