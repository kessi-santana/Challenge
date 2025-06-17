# Challenge

## Como rodar o projeto

Siga os passos abaixo para executar este projeto localmente após cloná-lo do Github:

## 1. Clone o repositório

git clone https://github.com/kessi-santana/Challenge.git

Entro no repositório do projeto (Challenge)

Em um terminal na pasta do projeto o pode utilizar o cd para entra no /Challenge;

cd Challenge

## 2. Instale as dependências
Dentro do /Challenge em seu terminal o utilize o seguinte comando: 
```
npm install
```
ou, se usar yarn:
```
yarn install
```


## 3. Execute o projeto em modo desenvolvimento
```
npm run dev
```
ou
```
yarn dev
```
## 4. Enviando requisições para a API
Sua API está disponível em /api/parse-file.
Para testar, envie uma requisição POST para http://localhost:3000/api/parse-file com o conteúdo do arquivo no corpo (body/Multipart) da requisição.
Adicione um novo query parameters tipo file.
Coloque um nome de sua preferecia e passe o caminho do arquivo no Valor da Query


## 5. Build para produção (opcional)
Para gerar a versão de produção do projeto, rode:
```
npm run build
```
ou 
```
yarn build
```


E depois para iniciar o servidor de produção:

```
npm start
```

ou 
```
yarn start
```



Requisitos
Node.js >= 16
npm >= 8 (ou yarn)

Se quiser rodar testes automatizados (caso tenha configurado testes):

```
npm test
```

ou
```
yarn test
```


