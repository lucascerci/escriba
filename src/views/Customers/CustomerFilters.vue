<script>
import { useStore } from "vuex";

export default {
    data() {
        return {
            document: '',
            loading: false
        }
    },
    methods: {
        searchByDocument() {
            this.getCustomers({cpf: this.document})
        }
    },
    setup() {
      const store = useStore()
      const getCustomers = (document) => {
        store.dispatch("customer/fetchCustomers", document)
      }

      return {
        getCustomers
      };
    },
}
</script>

<template>
    <v-row>
        <v-col cols="4" class="ml-2">
            <v-text-field
                :loading="loading"
                density="compact"
                variant="solo"
                v-model="document"
                label="Documento"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                @keydown.enter="searchByDocument"
                @click:append-inner="searchByDocument"
            ></v-text-field>
        </v-col>         
    </v-row>
  </template>
  
<style scoped>
</style>