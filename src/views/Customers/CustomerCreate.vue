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
            this.alertCreate = true
            setTimeout(() => {
              this.closeCreateModal()
            }, 1000);
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