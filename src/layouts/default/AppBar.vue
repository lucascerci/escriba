<template>
  <v-app-bar elevation="1" app flat color="white">
    <v-toolbar-title>
      Escriba Teste
    </v-toolbar-title>
    <div class="mr-5">
      <v-tabs
        v-model="tab"
        bg-color="white"
    >
        <v-tab value="customers" to="/customers">Clientes</v-tab>
        <v-tab value="products" to="/products">Produtos</v-tab>
        <v-tab value="requests" to="/customerRequests">Pedidos</v-tab>
    </v-tabs>
    </div>
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
