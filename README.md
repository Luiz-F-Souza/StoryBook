# PASSO A PASSO

### root

- `npm init -y`
  - remover tudo e adicionar um

  ```json
   { 
    "private": true,
    "workspaces":["packages/*"]
   }
   ```

  A opção "workspaces" indica o caminho de todos os locais onde estão os repositórios usados pelo projeto.
- Após já ter instalado algumas dependências na página de tokens ou em outras, apagar suas respectivas `node_modules` e dar um npm i na pasta **root** em questão.
- A pasta **root** manterá uma `node_modules` 'compartilhada' entre seus repos. Incluindo os repositórios locais.

### root/packages

### root/packages/ts-config

- `npm init -y`
  - Renomear o "name" denrto do `package.json` para o formato: `@nome-da-instituicao/ts-config`
- O `package.json` ficará mais ou menos assim:

  ```json
  {
    "name": "@lfsouza/ts-config",
    "version": "1.0.0",
    "license": "MIT",
    "private: true
  }
  ```

- A licensa `MIT` é para informar que o projeto é opensource
- Como a pasta `ts-config` é apenas para configurações, **não** tem a necessidade de ter o `private: false`
- Criar um arquivo `base.json` para conter as configurações globais de todos os pacotes que o importarem. o conteúdo poderá ser como o modelo abaixo:

  ```json
  {
    "compilerOptions":{
      "composite": false,
      "declaration": true,
      "declarationMap": true,
      "esModuleInterop": true,
      "forceConsistentCastingInFileNames": true,
      "insileSources": false,
      "isolatedModules": true,
      "moduleResolution": "node",
      "noUnusedLocals": false,
      "noUnusedParameters": false,
      "preserveWatchOutput": true,
      "skipLibCheck": true,
      "strict": true
    },
    "exclude": ["node_modules"]
  }
   ```

- Criar também um arquivo com `react.json`, que conterá todos os dados do `base.json` e mais algumas configurações que farão o ts reconhecer o react.

  ```json
    {
      "extends": "./base.json",
      "compilerOptions": {
        "jsx": "react-jsx",
        "lib": ["dom", "ES2015"],
        "module": "ESNext",
        "target": "es6"
      }
    }
   ```

### root/packages/tokens

- `npm init -y`
  - Renomear o "name" denrto do `package.json` para o formato: `@nome-da-instituicao/tokens`
- `npm i typescript -D`
- `npx tsc --init`
- `npm i tsup -D`
  - Serve para buildar os arquivos ts em esm e js e criar as definições de tipagem que auxiliam quando outros pacotes importam os arquivos
- Criar 02 scripts no `package.json`
  - `"build": "tsup src/index.ts --format esm,cjs --dts"`
  - `"dev": "tsup src/index.ts --format esm,cjs --dts --watch"`
- Para que outros projetos saibam como importar o token específico precisamos dar o caminho através das propriedades:
  - `main` do `package.json`
  - `"module": "./dist/index.mjs"` (quando estiver usando o modules do js)
  - `"types": "./dist/index.d.ts"` (para dizer ao ts quais as tipagens do projeto)
  - Todos estão dentro da pasta `./dist` por conta de como buildamos com o tsup.
  - Dentro do arquivo `tsconfig.json` passar o seguinte: 

  ```json
    {
      "extends": "@lfsouza/ts-config/base.json",
      "include": ["src"]
    }
   ```

  - Observe que devemos ter incluido o pacote referenciado no extends no `package.json` e deve-se substituir o `@lfsouza` pelo nome do seu projeto com as configurações do typescript
  
### packages/tokens/src
  
- **colors.ts**
  - Vai armazenar todos os tokens de cores do design system
  - Os dados são armazenados em forma de um objeto simples. \

    ```js
      const colors = {
          white: '#FFF',

          black: '#000',

          gray100: '#E1E1E6',
          gray200: '#A9A9B2',
          gray400: '#7C7C8A',
          gray500: '#505059',
          gray600: '#323238',
          gray700: '#29292E',
          gray800: '#202024',
          gray900: '#121214',

          ignite300: '#00B37E',
          ignite500: '#00875F',
          ignite700: '#015F43',
          ignite900: '#00291D',
      }
    ```

- **index.ts**
  - `export * from './colors.ts'`
  - Isso serve para faciliar as importações futuras

### Em pacotes que necessitam do react

- `npm i -D react @types/react @types/react-dom`
  - O react é instalado como uma dependência de desenvolvimento, já que ele já estará instalado no projeto de quem estiver utilizado o projeto.
- No `package.json` utilizar o `--external react` para que o tsup saiba que o react está na aplicação hospedeira.
  -Ex:

  ```json
      "scripts": {
        "build": "tsup src/index.ts --format esm,cjs --dts --external react",
        "dev": "tsup src/index.ts --format esm,cjs --dts --external react --watch"
      },
   ```

- No `tsconfig.json` utilizar o caminho `"extends": "@lfsouza/ts-config/react.json",` e o `"include": ["src"]`

### root/packages/docs

- Pasta onde deixremos nosso storyBook.
  - Por padrão o storyBook pede para que o criemos a partir de algum componente que já contenha uma biblioteca como react, por exemplo, assim ele já traz uma série de configurações. Mas nesse exemplo estamos o utilizando a parte de todo restante, dentro da pasta docs. isso para que, se precisarmos mudar algo dentro da bliblioteca em si seja muito mais fácil
- `npx sb init --builder @storybook/builder-vite --type react --use-npm`
  - O `--builder-vite` é para fazer com que o responsável pela compilação do código seja o vite que utiliza o ESBuilder (que é muito mais rápido para compilar)
  - Se n tiver adicionado ao pacote de devDependencies, instalar os pacotes a seguir e depois executar a primeira instalação novamente.
- `npm i -D vite @vitejs/plugin-react`
- `npm i react react-dom`
- No arquivo `vite.config.js`
  
    ```js
        /// <reference types="vite/client" />

        import react from "@vitejs/plugin-react"
        import { defineConfig } from "vite"

        export default defineConfig({
          plugins: [react()]
        })
    ```
- Apagar todas as pastas `node_modules` que existirem e rodar o `npm i`
