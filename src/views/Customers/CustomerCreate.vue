<template>
    <v-container>
      <v-sheet class="mx-auto">
        <v-form ref="form" fast-fail @submit.prevent @submit="create">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                variant="outlined"
                label="Nome"
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="cpf"
                variant="outlined"
                label="CPF"
                :rules="cpfRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="birthDate"
                variant="outlined"
                type="date"
                label="Data de Nascimento"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="closeCreateModal"
            >
              Fechar
            </v-btn>
            <v-btn
              type="submit"
              color="blue-darken-1"
              variant="text"
              :loading="loading"
            >
              Criar
            </v-btn>
        </v-card-actions>
        <div v-if="alertCreate">
          <v-alert
            type="success"
            variant="outlined"
          >
              Cliente criado com sucesso.
          </v-alert>
        </div>
        </v-form>
      </v-sheet>
    </v-container>
</template>

<script>
  import { validateCPF } from '@/plugins/cpfValidator'
  import { useStore } from "vuex";

  export default {
    data: () => ({
      name: '',
      nameRules: [
        value => {
          if (value?.length >= 1) return true

          return 'O nome é obrigatorio.'
        },
      ],
      cpf: '',
      cpfRules: [
        value => {
          if (value?.length >= 1 && validateCPF(value)) return true

          return 'Insira um CPF valido'
        },
      ],
      birthDate: '',
      alertCreate: false,
      loading: false,
    }),
    methods: {
      async create () {
        const { valid } = await this.$refs.form.validate()
        if (valid) {
          this.loading = true
          const customer = {
            nome: this.name,
            cpf: this.cpf,
            dataNascimento: this.birthDate
          }

          const response = await this.createCustomer(customer)
          this.loading = false
          if (response?.status === 201) {
            this.alertCreate = true
            setTimeout(() => {
              this.closeCreateModal()
            }, 1000);
          }
        }
      },
      closeCreateModal () {
        this.alertCreate = false
        this.$emit('close-create-modal')
      }
    },
    setup() {
      const store = useStore()
      const createCustomer = async (customer) => {
          const response = store.dispatch("customer/createCustomer", customer)
          return response
      }
      return {
        createCustomer,
      };
    },
  }
</script>