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
        cleanFilters () {
            this.document = ''
            this.getCustomers()
        },
        search () {
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
        <v-col cols="12" :lg="4" :md="4" :sm="12" :xs="12">
            <v-text-field
                class="ml-3 mr-3"
                :loading="loading"
                density="compact"
                variant="solo"
                v-model="document"
                label="Buscar por Documento"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
            ></v-text-field>
        </v-col>   
        <v-col :lg="4" :md="4" :sm="0" :xs="0">
        </v-col>      
        <v-col cols="12" :lg="4" :md="4" :sm="12" :xs="12" class="d-flex justify-end">
            <v-tooltip text="Limpar Filtros">
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        dark
                        v-bind="props"
                        @click="cleanFilters"
                    >
                        <v-icon>mdi-filter-off</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
            <v-tooltip text="Buscar">
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        dark
                        v-bind="props"
                        @click="search"
                        class="ml-3 mr-3"
                    >
                        Buscar
                    </v-btn>
                </template>
            </v-tooltip>
        </v-col>   
    </v-row>
  </template>
  
<style scoped>
</style>