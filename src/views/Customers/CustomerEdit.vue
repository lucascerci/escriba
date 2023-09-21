<template>
    <customer-form @submit-form="edit" @close-edit-modal="closeEditModal" :customerToEdit="foundedCustomerByID" />
</template>

<script>
  import CustomerForm from './CustomerForm.vue'
  import { useStore } from "vuex"

  export default {
    props: ['customerID'],
    components: {
      'customer-form': CustomerForm
    },
    data() {
        return {
            loading: true,
        }
    },
    methods: {
      async edit (customer) {
        const response = await this.editCustomer(customer)
          this.loading = false
          if (response?.status === 201) {
            this.alertCreate = true
            setTimeout(() => {
              this.closeCreateModal()
            }, 1000);
          }
      },
      closeEditModal () {
        this.alertCreate = false
        this.$emit('close-edit-modal')
      }
    },
     async setup(props) {
      const store = useStore()
      const response = await store.dispatch("customer/getCustomer", props.customerID)
      let foundedCustomerByID = null
      if (response.status === 200) {
        foundedCustomerByID = response.data
      }
      console.log('foundedCustomerByID', foundedCustomerByID)
      const editCustomer = async (customer) => {
          const response = store.dispatch("customer/editCustomer", customer)
          return response
      }
      return {
        editCustomer,
        foundedCustomerByID,
      };
    },
  }
</script>