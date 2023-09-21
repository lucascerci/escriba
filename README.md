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
    └── store
    │   └── index.js
    │   └── modules
    │        └── customer
    │        └── products
    │
    └── views
        └── Customers
          └── CustomersView.vue
          └── CustomersCreate.vue
          └── CustomersEdit.vue
          └── CustomersForm.vue
        └── Products
```
Estrutura do projeto:
- Dentro de componentes coloquei os componentes que são utilizados globalmente.
- Em plugins centralizei as bibliotecas para tornar mais facil a manutenção e a adição de novas sem ocupar muito espaço dentro do main.js.
- A estrutura de Store com vuex foi feita de uma forma escalavel onde se pode adicionar novos modulos de uma maneira facil.
- Views utilizei o exemplo de Customers, que utiliza a API 'Pessoas'. Fiz uma estrutura onde tanto para o Edit quanto para
o Create é utilizado o mesmo form, sendo assim menos linha de codigo e utilizando a ideia da componetização ao maximo.

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
