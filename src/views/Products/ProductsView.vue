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
            align: 'start',
            key: 'id',
            sortable: false,
            title: 'ID',
          },
          { title: 'Descrição', key: 'descricao' },
          { title: 'Valor Unitario', key: 'valoUnitario' },
          { title: '', key: 'actionss' },
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
  <v-container>
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