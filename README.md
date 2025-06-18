# Challenge

## Introdução

Challenge é uma API que recebe um arquivo de texto com registros estruturados e converte esses dados em formato JSON, organizando as informações por usuário, pedidos e produtos.


### Arquitetura da Solução
A arquitetura foi desenvolvida de forma modular e organizada para garantir fácil entendimento, manutenção e escalabilidade.
O fluxo a seguir demonstra como as camadas da API se comunicam desde o recebimento da requisição até o envio da resposta estruturada ao cliente.
![Diagram](/docs/images/diagram.png)

### 🔍 Observação sobre o projeto:

* Cada arquivo tem uma função clara e separada.

* O código é modular, fácil de testar e possui comentários explicativos.

* A API segue boas práticas REST.

* A estrutura facilita manutenção e crescimento.


### 💻 Tecnologias Utilizadas

Next.js (API Routes)
TypeScript
Jest (para testes)
Node.js

#### Como rodar o projeto

Siga os passos abaixo para executar este projeto localmente após cloná-lo do Github:

## 1. Clone o repositório

git clone https://github.com/kessi-santana/Challenge.git

Entro no repositório do projeto (Challenge)

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
Para testar, envie uma requisição POST para http://localhost:3000/api/parse-file com o conteúdo do arquivo no corpo (body/Multipart) da requisição.
Adicione um novo query parameters tipo file.
Coloque um nome de sua preferecia e passe o caminho do arquivo no Valor da Query como no exemplo no Insomnia:

![PostInsomnia](/docs/images/PostInsomnia.png)

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

## Se quiser rodar testes automatizados:

```
npm test
```

ou
```
yarn test
```
#### Teste coverage:

```
npm  test -- --coverage
```

ou 
```
yarn test -- --coverage
```

### ✅ Considerações finais

Espero que este guia ajude você a entender a estrutura do projeto e como utilizá-lo.
Agradeço por dedicar seu tempo para conhecer este projeto. Contribuições e feedbacks são sempre bem-vindos!
