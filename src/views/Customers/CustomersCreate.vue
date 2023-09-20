<template>
    <v-container>
      <v-sheet class="mx-auto">
        <v-form fast-fail @submit.prevent>
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
              @click="dialog = false"
            >
              Fechar
            </v-btn>
            <v-btn
            type="submit"
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Criar
            </v-btn>
        </v-card-actions>
        </v-form>
      </v-sheet>
    </v-container>
</template>

<script>
  import { validateCPF } from '@/plugins/cpfValidator'
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

          return 'Insira um cpf valido'
        },
      ],
      birthDate: '',
    }),
  }
</script>