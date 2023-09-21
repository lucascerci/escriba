<template>
  <customer-form @submit-form="create" @close-modal="closeCreateModal" />
</template>

<script>
  import CustomerForm from './CustomerForm.vue'
  import { useStore } from "vuex";

  export default {
    components: {
      'customer-form': CustomerForm
    },
    methods: {
      async create (customer) {
        const response = await this.createCustomer(customer)
          this.loading = false
          if (response?.status === 201) {
            const userFeedback = {message: 'Cliente cadastrado com sucesso.', type: 'success'}
            this.showMessage(userFeedback)
            this.closeCreateModal()
          }
      },
      closeCreateModal () {
        this.$emit('close-create-modal')
      }
    },
    setup() {
      const store = useStore()
      const createCustomer = async (customer) => {
          const response = store.dispatch("customer/createCustomer", customer)
          return response
      }
      const showMessage = async (userFeedback) => {
          const response = store.dispatch("notification/showSnackbar", userFeedback)
          return response
      }
      return {
        createCustomer,
        showMessage
      };
    },
  }
</script>