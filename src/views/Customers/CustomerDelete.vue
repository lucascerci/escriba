<template>
    <v-card class="py-5 px-10">
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
          const userFeedback = {message: 'Cliente deletado com sucesso.', type: 'success'}
          this.showMessage(userFeedback)
          this.$emit('close-delete-modal')
        }
        this.loading = false
      },
    },
    setup() {
      const store = useStore()
      const deleteCustomer = async (customer) => {
        return await store.dispatch("customer/deleteCustomer", customer)
      }

      const showMessage = async (userFeedback) => {
          const response = store.dispatch("notification/showSnackbar", userFeedback)
          return response
      }

      return {
        deleteCustomer,
        showMessage
      };
    },
  }
</script>