<script>
import { useStore } from "vuex";
import { validateCPF } from '@/plugins/utils'

export default {
    data() {
        return {
            document: '',
            loading: false
        }
    },
    methods: {
        searchByDocument() {
            if (validateCPF(this.document)) {
                this.getCustomers({cpf: this.document})
            } else {
                const userFeedback = {message: 'Você precisa digiar um cpf valido para buscar.', type: 'error'}
                this.showMessage(userFeedback)
            }
        }
    },
    setup() {
      const store = useStore()
      const getCustomers = (document) => {
        store.dispatch("customer/fetchCustomers", document)
      }
      const showMessage = async (userFeedback) => {
          const response = store.dispatch("notification/showSnackbar", userFeedback)
          return response
      }

      return {
        getCustomers,
        showMessage
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
                label="Buscar por Documento"
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