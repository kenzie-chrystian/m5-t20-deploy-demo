# SP4-DEMO4 - Build e Deploy

# Mudança teste

## Build

Por que temos que buildar nosso projeto TS para deploy ?

- Compatibilidade com Módulos e Pacotes: Alguns pacotes e bibliotecas podem exigir código JavaScript padrão. Compilar para JavaScript garante que você tenha compatibilidade total com o ecossistema de pacotes do Node.js.
- Otimização de Desempenho: A compilação pode aplicar otimizações que melhoram o desempenho do código em tempo de execução.
- Facilidade de Debugging: Às vezes, o código JavaScript gerado é mais fácil de depurar do que o código TypeScript original.
- Prevenção de Erros em Tempo de Execução: A compilação do TypeScript verifica erros de tipo em tempo de compilação, evitando assim erros em tempo de execução.

### Entendendo o build na prática

- [x] - Habilitar a opção _"outDir"_ no arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ...
    "outDir": "./dist"
  }
}
```

# Entendendo o processo de build localmente

- [x] - Buildar localmente o projeto (somente para exemplificação do processo de build. NÃO É NECESSARIO BUILDAR LOCALMENTE PARA O DEPLOY):

```
npx tsc
```

- [x] Adicionar 2 scripts ao `package.json`:

```json
{
  // ...
  "scripts": {
    // ...
    "build": "tsc",
    "start": "node dist/server.js",
    "migrate:deploy": "npx prisma migrate deploy"
  }
}
```

- [x] Deletar diretório `dist` criado anteriormente para demonstrar os novos scripts:

```bash
npm run build
npm run start
```

# Deploy Render

- [x] - Logar no [Render](https://dashboard.render.com/)
- [x] - Criar o serviço de banco de dados, escolhendo a versão free.
- [x] - Criar web service para deploy da API.
  - [x] - Buildar e deployar a partir de um repositório GIT.
  - [x] - Linkar a sua conta do git com o Render.
- [x] - Selecionar Node como Runtine do webservice
- [x] - Adicionar comandos de build e start:

```bash
# build command
npm install; npm run build; npm run migrate:deploy;

# start command
npm run start
```

OU

```bash
# build command
yarn; yarn build; yarn migrate:deploy

# start command
yarn start
```

- [x] - Criar variáveis de ambiente:
  - [x] - JWT_SECRET_KEY -> Gerar pelo render
  - [x] - EXPIRES_IN -> 1h
  - [x] - DATABASE_URL -> Pegar Internal Database URL do serviço de db criado anteriormente (necessário ser na mesma regiao), adicionando `?schema=public` ao final.

# CORS

CORS significa "Cross-Origin Resource Sharing" (Compartilhamento de Recursos de Origem Cruzada), é um mecanismo de segurança utilizado pelos navegadores da web para permitir que scripts em uma página web acessem recursos de outro domínio.

O CORS define um conjunto de cabeçalhos HTTP que permitem a um servidor informar ao navegador se ele permite que uma solicitação de origem cruzada (ou seja, de um domínio diferente) tenha acesso aos recursos solicitados. Isso ajuda a proteger a integridade dos dados e da sessão do usuário.

## Instalação

```
npm install cors
```

```
npm install -D @types/cors
```

## Utilização

Importar e usar no `app.ts`:

```ts
import cors from "cors";

// ...
app.use(cors());
```
