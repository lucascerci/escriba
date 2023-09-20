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
          { title: 'Nome', key: 'nome' },
          { title: 'Documento', key: 'cpf' },
          { title: 'Data de Nascimento', key: 'dataNascimento' },
          { title: '', key: 'actionss' },
        ],
        customers: [
          {
            "id": 1,
            "nome": "cliente 1",
            "cpf": "000.000.000-00",
            "dataNascimento": "1999-12-31",
          },
          {
            "id": 2,
            "nome": "cliente 2",
            "cpf": "000.000.001-00",
            "dataNascimento": "1999-12-31",
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
          <custom-data-table title="Clientes" :headers="headers" :items="customers" :itemsPerPage="itemsPerPage" />
        </v-col>
      </v-row>
    </v-responsive>
</v-container>
</template>

<style>
</style>