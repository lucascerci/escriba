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
          { align: 'center', title: 'Cliente', key: 'cliente', sortable: false },
          { align: 'center', title: 'Data de Emissão', key: 'dataEmissao', sortable: false },
          { align: 'center', title: 'Valor Total', sortable: false, key: 'valorTotal' },
          { align: 'center', title: 'Itens', sortable: false, key: 'itens' },
        ],
        requests: [
          {
            "id": 1,
            "cliente": {
              "id": 1,
              "nome": "cliente 1"
            },
            "dataEmissao": "2019-01-01",
            "valorTotal": 76.64,
            "itens": [
              {
                "id": 1,
                "produto": {
                  "id": 1,
                  "descricao": "produto 1"
                },
                "valor": 10,
                "quantidade": 5,
                "subtotal": 50
              },
              {
                "id": 2,
                "produto": {
                  "id": 2,
                  "descricao": "produto 2"
                },
                "valor": 8.88,
                "quantidade": 3,
                "subtotal": 26.64
              }
            ]
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
          <custom-data-table title="Pedidos" :headers="headers" :items="requests" :itemsPerPage="itemsPerPage" />
        </v-col>
      </v-row>
    </v-responsive>
</v-container>
</template>

<style>
</style>