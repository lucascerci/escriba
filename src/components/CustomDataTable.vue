<script>
  export default {
    props: ['headers', 'items', 'itemsPerPage', 'title'],
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
        this.$emit('delete-item', item.value)
      },
      editItem (item) {
        this.$emit('edit-item', item.value)
      }
  },
  }
</script>

<template>
  <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1 full-width"
    >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="createItem"
            >
              Novo
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.actionss="{ item }">
      <div class="d-flex flex-row">
            <v-btn
              class="px-1 ml-1"
              color="primary"
              min-width="0"
              x-small
              @click="editItem(item)"
              fab
              elevation="6"
            >
              <v-icon small>{{ 'mdi-pencil' }}</v-icon>
            </v-btn>
            <v-btn
              class="px-1 ml-1"
              color="red"
              min-width="0"
              x-small
              @click="deleteItem(item)"
              fab
              elevation="6"
            >
              <v-icon small>{{ 'mdi-delete' }}</v-icon>
            </v-btn>
      </div>
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
