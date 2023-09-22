<script>
  import actionButtons from '@/components/ActionButton.vue'
  import { formatCPF, formatDate, formatBRL } from '@/plugins/utils'

  export default {
    components: {
      'action-buttons': actionButtons,
    },
    props: ['headers', 'items', 'itemsPerPage', 'hasCreate', 'requestLoading'],
    data () {
        return {
          page: 1,
          loading: false,
        }
    },
    computed: {
      pageCount () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
    },
    watch: {
      requestLoading (newValue) {
        this.loading = newValue
      }
    },
    methods: {
      createItem() {
        this.$emit('create-item')
      },
      deleteItem (item) {
        this.$emit('delete-item', item)
      },
      editItem (item) {
        this.$emit('edit-item', item)
      },
      formatCpf (cpf) {
        return formatCPF(cpf)
      },
      formatDate (date) {
        return formatDate(date)
      },
      formatBRL (value) {
        return formatBRL(value)
      }
  },
  }
</script>

<template>
  <v-data-table
      :page="page"
      :headers="headers"
      :items="items"
      :item-key="id"
      :items-per-page="itemsPerPage"
      :loading="loading"
      class="elevation-1"
    >
    <template v-slot:item.actionss="{ item }">
      <action-buttons :item="item" @edit-item="editItem" @delete-item="deleteItem" />
    </template>
    <template v-slot:item.dataNascimento="{ item }">
      {{ formatDate(item.columns.dataNascimento) }}
    </template>
    <template v-slot:item.dataEmissao="{ item }">
      {{ formatDate(item.columns.dataEmissao) }}
    </template>
    <template v-slot:item.cpf="{ item }">
      {{ formatCpf(item.columns.cpf) }}
    </template>
    <template v-slot:item.valoUnitario="{ item }">
      {{ formatBRL(item.columns.valoUnitario) }}
    </template>
    <template v-slot:item.valorTotal="{ item }">
      {{ formatBRL(item.columns.valorTotal) }}
    </template>
    <template v-slot:item.cliente="{ item }">
      {{ item.columns.cliente.nome }}
    </template>
    <template v-slot:item.itens="{ item }">
      <v-btn
            class="px-1 ml-1"
            color="orange"
            min-width="0"
            x-small
            @click="$emit('see-items', item.columns.itens)"
            fab
            elevation="6"
        >
        {{ item.columns.itens.length }} Itens
      </v-btn>
    </template>
    <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
          ></v-pagination>
        </div>
      </template>
  </v-data-table>
</template>

<style>
</style>
