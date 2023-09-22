<script>
  import CustomDataTable from '@/components/CustomDataTable.vue'
  import ItemsView from '@/views/Requests/ItemsView.vue'
  import { computed } from "vue"
  import { useStore } from "vuex"

  export default {
    components: {
      'custom-data-table': CustomDataTable,
      'items-view': ItemsView
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
        itemsDialog: false,
        selectedItens: null,
      }
    },
    methods: {
      openItemsModal (itens) {
        this.selectedItens = itens
        this.itemsDialog = true
      },
      closeItemsModal () {
        this.selectedRequest = null
        this.itemsDialog = false
      }
    },
    setup() {
      const store = useStore()
      const requests = computed(() => store.getters["requests/getRequests"])
      store.dispatch("requests/fetchRequests")

      return {
        requests,
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
            <v-toolbar-title>Pedidos</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
          </v-toolbar>
        </v-col>
        <v-col cols="12">
          <custom-data-table :headers="headers" :items="requests" :itemsPerPage="itemsPerPage" @see-items="openItemsModal" />
        </v-col>
      </v-row>
    </v-responsive>
    <v-dialog
        v-model="itemsDialog"
        width="auto"
      >
        <items-view :items="selectedItens" @close-items-modal="closeItemsModal" />
      </v-dialog>
</v-container>
</template>

<style>
</style>