<script>
  import CustomDataTable from '@/components/CustomDataTable.vue'

  export default {
    components: {
      'custom-data-table': CustomDataTable
    },
    data () {
      return {
        itemsPerPage: 5,
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
        products: [
            {
                "id": 1,
                "descricao": "produto 1",
                "valoUnitario": 10
            },
            {
                "id": 2,
                "descricao": "produto 2",
                "valoUnitario": 8.88
            },
            {
                "descricao": "produto 3",
                "valoUnitario": 10,
                "id": 4
            }
        ],
      }
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