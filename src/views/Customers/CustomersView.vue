<script>
  import CustomDataTable from '@/components/CustomDataTable.vue'
  import CustomersCreateForm from './CustomersCreate.vue'
  import { computed } from "vue";
  import { useStore } from "vuex";

  export default {
    components: {
      'custom-data-table': CustomDataTable,
      'create-customers-form': CustomersCreateForm
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
          { title: 'Nome', key: 'nome' },
          { title: 'Documento', key: 'cpf' },
          { title: 'Data de Nascimento', key: 'dataNascimento' },
          { title: '', key: 'actionss' },
        ],
        createDialog: false,
      }
    },
    methods: {
      openCreateModal () {
        this.createDialog = true
      },
      closeCreateModal () {
        this.createDialog = false
      }
    },
    setup() {
      const store = useStore()
      const customers = computed(() => store.getters["customer/getCustomers"])
      store.dispatch("customer/fetchCustomers")

      return {
        customers,
      };
    },
  }
</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <v-row class="customers">
        <v-col cols="12">
          <custom-data-table title="Clientes" :headers="headers" :items="customers" :itemsPerPage="itemsPerPage" @open-create-modal="openCreateModal" />
        </v-col>
      </v-row>
    </v-responsive>
      <v-dialog
        v-model="createDialog"
        width="auto"
      >
        <v-card>
          <v-card-title class="text-center">
            Cadastrar Cliente
          </v-card-title>
          <create-customers-form @close-create-modal="closeCreateModal" />
        </v-card>
      </v-dialog>
  </v-container>
</template>

<style>
</style>