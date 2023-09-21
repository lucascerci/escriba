<template>
    <v-container>
      <v-sheet class="mx-auto">
        <v-form ref="form" fast-fail @submit.prevent @submit="submitForm">
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
              @click="closeModal"
            >
              Fechar
            </v-btn>
            <v-btn
              type="submit"
              color="blue-darken-1"
              variant="text"
              :loading="loading"
            >
              {{customerToEditInside ? 'Editar' : 'Criar'}}
            </v-btn>
        </v-card-actions>
        </v-form>
      </v-sheet>
    </v-container>
</template>

<script>
  import { validateCPF } from '@/plugins/cpfValidator'

  export default {
    props: ['customerToEdit'],
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
      loading: false,
      customerToEditInside: null,
    }),
    methods: {
      async submitForm () {
        const { valid } = await this.$refs.form.validate()
        if (valid) {
          this.loading = true
          const customer = {
            nome: this.name,
            cpf: this.cpf,
            dataNascimento: this.birthDate
          }
          if (this.customerToEditInside) {
            customer.id = this.customerToEditInside.id
          }

          this.$emit('submit-form', customer)
        }
      },
      closeModal () {
        this.$emit('close-modal')
      }
    },
    watch: {
      customerToEdit (newCustomerToEdit) {
        if (newCustomerToEdit) {
          this.customerToEditInside = newCustomerToEdit
          this.name = newCustomerToEdit.nome
          this.cpf = newCustomerToEdit.cpf
          this.birthDate = newCustomerToEdit.dataNascimento
        }
      }
    },
  }
</script>