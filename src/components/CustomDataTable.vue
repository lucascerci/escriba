<script>
  import actionButtons from '@/components/ActionButton.vue'
  export default {
    components: {
      'action-buttons': actionButtons,
    },
    props: ['headers', 'items', 'itemsPerPage', 'title', 'hasCreate'],
    data () {
        return {
          page: 1,
        }
    },
    computed: {
      pageCount () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
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
      formatDate(inputDate) {
        const parsedDate = new Date(inputDate);
        if (isNaN(parsedDate)) {
          return "";
        }
        const day = parsedDate.getDate();
        const month = parsedDate.getMonth() + 1;
        const year = parsedDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
      },
      formatCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11) {
          return 'Invalid CPF';
        }
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
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
      class="elevation-1"
    >
    <template v-slot:top>
      <v-toolbar
        flat
        class="rounded-lg"
      >
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-btn
              v-if="hasCreate"
              color="primary"
              dark
              @click="createItem"
            >
              Novo
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.actionss="{ item }">
      <action-buttons :item="item" @edit-item="editItem" @delete-item="deleteItem" />
    </template>
    <template v-slot:item.dataNascimento="{ item }">
      {{ formatDate(item.columns.dataNascimento) }}
    </template>
    <template v-slot:item.cpf="{ item }">
      {{ formatCPF(item.columns.cpf) }}
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
