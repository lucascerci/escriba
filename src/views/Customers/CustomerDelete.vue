<template>
    <v-card v-if="!alertDelete" class="py-5 px-10">
        <div>
          <p class="mt-5 mb-5">Tem certeza que deseja deletar esse cliente?</p>
          <v-card-actions class="d-flex justify-between">
              <v-spacer></v-spacer>
              <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="$emit('close-delete-modal')"
              >
                  Fechar
              </v-btn>
              <v-btn
                  color="red"
                  variant="text"
                  :loading="loading"
                  @click="deleteItem"
              >
                  Deletar
              </v-btn>
          </v-card-actions>
        </div>
    </v-card>
    <v-card v-else>
          <v-alert
            :type="successDeleting ? 'success' : 'error'"
            variant="outlined"
          >
            {{ successDeleting ? 'Cliente deletado com sucesso' : 'Erro ao deletar cliente'}}
        </v-alert>
    </v-card>
</template>

<script>
  import { useStore } from "vuex";

  export default {
    props: ['selectedCustomerId'],
    data: () => ({
      alertDelete: false,
      loading: false,
      successDeleting: false,
    }),
    methods: {
      async deleteItem () {
        this.loading = true
        const response = await this.deleteCustomer(this.selectedCustomerId)
        if (response?.status === 200) {
          this.alertDelete = true
          this.successDeleting = true
          setTimeout(() => {
            this.$emit('close-delete-modal')
          }, 1000);
        } else {
          this.alertDelete = true
          this.successDeleting = false
          setTimeout(() => {
            this.alertDelete = false
          }, 1000);
        }
        this.loading = false
      },
    },
    setup() {
      const store = useStore()
      const deleteCustomer = async (customer) => {
        return await store.dispatch("customer/deleteCustomer", customer)
      }

      return {
        deleteCustomer
      };
    },
  }
</script>