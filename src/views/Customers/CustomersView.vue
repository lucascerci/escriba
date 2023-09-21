<script>
  import CustomDataTable from '@/components/CustomDataTable.vue'
  import CustomerCreateForm from './CustomerCreate.vue'
  import CustomerDeleteVue from './CustomerDelete.vue'
  import { computed } from "vue";
  import { useStore } from "vuex";

  export default {
    components: {
      'custom-data-table': CustomDataTable,
      'create-customer-form': CustomerCreateForm,
      'delete-customer': CustomerDeleteVue
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
          { title: 'Nome', key: 'nome' },
          { title: 'Documento', key: 'cpf' },
          { title: 'Data de Nascimento', key: 'dataNascimento' },
          { title: '', key: 'actionss' },
        ],
        createDialog: false,
        deleteDialog: false,
        selectedItem: null,
      }
    },
    methods: {
      openCreateModal () {
        this.createDialog = true
      },
      openDeleteModal (item) {
        this.selectedItem = item
        this.deleteDialog = true
      },
      closeCreateModal () {
        this.createDialog = false
      },
      closeDeleteModal () {
        this.deleteDialog = false
        this.selectedItem = null
      },
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
          <custom-data-table 
            title="Clientes" 
            :headers="headers" 
            :items="customers" 
            :itemsPerPage="itemsPerPage" 
            @create-item="openCreateModal" 
            @edit-item="openCreateModal" 
            @delete-item="openDeleteModal"
          />
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
          <create-customer-form @close-create-modal="closeCreateModal" />
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="deleteDialog"
        width="auto"
      >
        <delete-customer :selectedCustomerId="selectedItem" @close-delete-modal="closeDeleteModal" />
      </v-dialog>
  </v-container>
</template>

<style>
</style>