<script>
  import CustomDataTable from '@/components/CustomDataTable.vue'
  import { computed } from "vue"
  import { useStore } from "vuex"

  export default {
    components: {
      'custom-data-table': CustomDataTable
    },
    data () {
      return {
        itemsPerPage: 10,
        headers: [
          {
            align: 'center',
            key: 'id',
            sortable: false,
            title: 'ID',
          },
          { align: 'center', title: 'Descrição', key: 'descricao', sortable: false, },
          { align: 'center', title: 'Valor Unitario', key: 'valoUnitario', sortable: false, },
        ],
      }
    },
    setup() {
      const store = useStore()
      const products = computed(() => store.getters["product/getProducts"])
      store.dispatch("product/fetchProducts")

      return {
        products,
      };
    },
  }
</script>

<template>
  <v-container class="elevation-1 mt-4">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="customers">
        <v-col cols="12">
          <custom-data-table title="Produtos" :headers="headers" :items="products" :itemsPerPage="itemsPerPage" />
        </v-col>
      </v-row>
    </v-responsive>
</v-container>
</template>

<style>
</style>