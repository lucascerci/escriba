<template>
  <v-app-bar elevation="1" app flat color="white">
    <v-toolbar-title>
    </v-toolbar-title>
    <div>
      <v-tabs
        v-model="tab"
        bg-color="white"
    >
        <v-tab value="customers" to="/customers">Clientes</v-tab>
        <v-tab value="products" to="/products">Produtos</v-tab>
        <v-tab value="requests" to="/requests">Pedidos</v-tab>
    </v-tabs>
    </div>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
  export default {
    props: ['headers', 'items', 'itemsPerPage', 'title'],
    data () {
        return {
            tab: null,
        }
    },
  }
</script>
