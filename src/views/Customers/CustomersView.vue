<script>
  import CustomDataTable from '@/components/CustomDataTable.vue'
  import CustomerCreate from './CustomerCreate.vue'
  import CustomerEdit from './CustomerEdit.vue'
  import CustomerDeleteVue from './CustomerDelete.vue'
  import CustomerFilters from './CustomerFilters.vue'
  import { computed } from "vue";
  import { useStore } from "vuex";

  export default {
    components: {
      'custom-data-table': CustomDataTable,
      'create-customer': CustomerCreate,
      'delete-customer': CustomerDeleteVue,
      'edit-customer': CustomerEdit,
      'customer-filters': CustomerFilters,
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
          { align: 'center', title: 'Nome', key: 'nome', sortable: false, },
          { align: 'center', title: 'Documento', key: 'cpf', sortable: false, },
          { align: 'center', title: 'Data de Nascimento', key: 'dataNascimento', sortable: false, },
          { title: '', key: 'actionss', sortable: false, },
        ],
        createDialog: false,
        deleteDialog: false,
        editDialog: false,
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
      openEditModal (item) {
        this.selectedItem = item
        this.editDialog = true
      },
      closeEditModal () {
        this.editDialog = false
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
  <v-container class="elevation-1 mt-4">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="customers">
        <v-col cols="12">
          <v-toolbar
            flat
            class="rounded-lg"
          >
            <v-toolbar-title>Clientes</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-btn
                color="primary"
                dark
                @click="openCreateModal"
              >
                Novo
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12">
          <customer-filters />
        </v-col>
        <v-col cols="12">
          <custom-data-table 
            title="Clientes" 
            :headers="headers" 
            :items="customers" 
            :itemsPerPage="itemsPerPage" 
            :hasCreate="true"
            @create-item="openCreateModal" 
            @edit-item="openEditModal" 
            @delete-item="openDeleteModal"
          />
        </v-col>
      </v-row>
    </v-responsive>
    <!-- create -->
      <v-dialog
        v-model="createDialog"
        width="auto"
      >
        <v-card class="px-5 pt-5">
          <v-card-title class="text-center">
            Cadastrar Cliente
          </v-card-title>
          <create-customer @close-create-modal="closeCreateModal" />
        </v-card>
      </v-dialog>
      <!-- edit -->
      <v-dialog
        v-model="editDialog"
        width="auto"
      >
        <v-card class="px-5 pt-5">
          <v-card-title class="text-center">
            Editar Cliente
          </v-card-title>
          <Suspense>
            <edit-customer :customerID="selectedItem" @close-edit-modal="closeEditModal" />
          </Suspense>
        </v-card>
      </v-dialog>
      <!-- delete -->
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