# Escriba Test

Tecnologias usadas: Vuetify, Vue Router, Vuex e Axios.

```
escriba-front-test
│
├── src
    ├── components
    │   ├── CustomDataTable.vue
    ├── plugins
    │   └── index.js
    │   └── utils.js
    └── store
    │   └── index.js
    │   └── modules
    │   │    └── customer
    │   │    └── products
    │   └── api.js
    └── views
    │   └── Customers
    │     └── CustomersView.vue
    │     └── CustomersCreate.vue
    │     └── CustomersEdit.vue
    │     └── CustomersForm.vue
    │     └── Products
```
Estrutura do projeto:
- Dentro de componentes estão os componentes dinamicos para serem reutilizados em diferentes views.
- Em plugins estão centralizadas as bibliotecas para tornar a manutenção das mesmas e a adição de novas simples.
- Em plugins temos também o arquivo utils.js onde contem algumas funções que podem ser reutilizadas ao longo do projeto, exemplo: validateCPF.
- Store com vuex foi feita de uma forma escalavel onde se pode adicionar novos modulos de uma maneira facil.
- Contiuando em Store foi criado o arquivo api.js que centraliza a url em um só lugar vindo .env, para que se precisar alterar depois seja apenas ali e não dentro de  todos os modulos, facilitando assim a manutenção do projeto.
- Views utilizei o exemplo de Customers, que utiliza a API 'Pessoas'. Fiz uma estrutura onde tanto para o Edit quanto para o Create é utilizado o mesmo form, sendo assim menos linha de codigo e utilizando a ideia da componetização ao maximo.

## Installing 
```
# yarn
yarn

# npm
npm install
```

## Running the development 

```
# yarn
yarn dev

# npm
npm run dev
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
