<script>
  export default {
    props: ['item'],
  }
</script>

<template>
    <div class="d-flex flex-row">
        <v-btn
            class="px-1 ml-1"
            color="primary"
            min-width="0"
            x-small
            @click="$emit('editItem', item.columns.id)"
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
            @click="$emit('deleteItem', item.columns.id)"
            fab
            elevation="6"
        >
            <v-icon small>{{ 'mdi-delete' }}</v-icon>
        </v-btn>
    </div>
</template>

<style>
</style>