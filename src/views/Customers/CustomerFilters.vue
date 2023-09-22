<script>
import { useStore } from "vuex";
import { validateCPF } from '@/plugins/utils'

export default {
    data() {
        return {
            filters: {
                id: null,
                cpf: null,
                nome: null,
            },
            loading: false,
        }
    },
    methods: {
        cleanFilters () {
            this.filters.cpf = null
            this.filters.id = null
            this.filters.nome = null
            this.getCustomers()
        },
        emptyStringToNull(str) {
            return str === '' ? null : str;
        },
        search () {
            if (this.filters.cpf?.length > 0) {
                const isValidCpf = validateCPF(this.filters.cpf)
                if (!isValidCpf) {
                    const userFeedback = {message: 'Você precisa digiar um cpf valido para buscar.', type: 'error'}
                    this.showMessage(userFeedback)
                    return;
                }
            } else {
                this.filters.cpf = null
            }
            this.filters.id = this.emptyStringToNull(this.filters.id)
            this.filters.nome = this.emptyStringToNull(this.filters.nome)
            this.getCustomers(this.filters)
        }
    },
    setup() {
      const store = useStore()
      const getCustomers = (cpf) => {
        store.dispatch("customer/fetchCustomers", cpf)
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
        <v-col cols="12" :lg="3" :md="3" :sm="12" :xs="12">
            <v-text-field
                class="ml-1 mr-1"
                :loading="loading"
                density="compact"
                variant="solo"
                v-model="filters.id"
                label="ID"
                single-line
                hide-details
                append-inner-icon="mdi-identifier"
            ></v-text-field>
        </v-col> 
        <v-col cols="12" :lg="4" :md="4" :sm="12" :xs="12">
            <v-text-field
                :loading="loading"
                class="ml-1 mr-1"
                density="compact"
                variant="solo"
                v-model="filters.nome"
                label="Buscar por nome"
                append-inner-icon="mdi-account"
                single-line
                hide-details
            ></v-text-field>
        </v-col>    
        <v-col cols="12" :lg="5" :md="5" :sm="12" :xs="12">
            <v-text-field
                :loading="loading"
                class="ml-1 mr-1"
                density="compact"
                variant="solo"
                v-model="filters.cpf"
                label="Buscar por cpf"
                append-inner-icon="mdi-card-account-details"
                single-line
                hide-details
            ></v-text-field>
        </v-col>     
        <v-col cols="12" class="d-flex justify-end">
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