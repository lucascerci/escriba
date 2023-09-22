# Escriba Test

Tecnologias usadas: Vue3, Vuetify, Vue Router, Vuex e Axios.

```
escriba-front-test
│
├── src
│   ├── components
│   │   ├── CustomDataTable.vue
│   ├── plugins
│   │   └── index.js
│   │   └── utils.js
│   └── store
│   │   └── index.js
│   │   └── modules
│   │   │    └── customer
│   │   │    └── products
│   │   └── api.js
│   └── views
│       └── Customers
│         └── CustomersView.vue
│         └── CustomersCreate.vue
│         └── CustomersEdit.vue
│         └── CustomersForm.vue
│         └── Products
└── tests
    └── spec
        └── customDataTable.spec.js
```
Estrutura do projeto:
- Dentro de componentes estão os componentes dinamicos para serem reutilizados em diferentes views.
- Em plugins estão centralizadas as bibliotecas para tornar a manutenção das mesmas e a adição de novas simples.
- Em plugins temos também o arquivo utils.js onde contem algumas funções que podem ser reutilizadas ao longo do projeto, exemplo: validateCPF.
- Store com vuex foi feita de uma forma escalavel onde se pode adicionar novos modulos de uma maneira facil.
- Contiuando em Store foi criado o arquivo api.js que centraliza a url em um só lugar vindo .env, para que se precisar alterar depois seja apenas ali e não dentro de  todos os modulos, facilitando assim a manutenção do projeto.
- Views utilizei o exemplo de Customers, que utiliza a API 'Pessoas'. Fiz uma estrutura onde tanto para o Edit quanto para o Create é utilizado o mesmo form, sendo assim menos linha de codigo e utilizando a ideia da componetização ao maximo.
- Dentro de tests na pasta raiz do projeto foi criado um simples teste como exemplo, utilizando a biblioteca vitest.

## Instalação
```
# yarn
yarn

# npm
npm install
```

## Rodando em desenvolvimento

```
# yarn
yarn dev

# npm
npm run dev
```

### Compila e minimiza para produção

```
# yarn
yarn build

# npm
npm run build
```

### Para executar testes

```
# yarn
yarn test

# npm
npm run test
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
