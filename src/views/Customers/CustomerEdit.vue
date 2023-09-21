<template>
    <customer-form @submit-form="edit" @close-modal="closeEditModal" :customerToEdit="foundedCustomerByID" />
</template>

<script>
  import CustomerForm from './CustomerForm.vue'
  import { useStore } from "vuex"
  import { ref, onMounted } from 'vue'

  export default {
    props: ['customerID'],
    components: {
      'customer-form': CustomerForm
    },
    data() {
        return {
        }
    },
    methods: {
      async edit (customer) {
        const response = await this.editCustomer(customer)
          if (response?.status === 200) {
            const userFeedback = {message: 'Cliente foi editado com sucesso.', type: 'success'}
            this.showMessage(userFeedback)
            this.closeEditModal()
          }
      },
      closeEditModal () {
        this.$emit('close-edit-modal')
      }
    },
     async setup(props) {
      const store = useStore()
      let foundedCustomerByID = ref(null)
      
      const editCustomer = async (customer) => {
          const response = store.dispatch("customer/editCustomer", customer)
          return response
      }

      const showMessage = async (userFeedback) => {
          const response = store.dispatch("notification/showSnackbar", userFeedback)
          return response
      }
      
      onMounted(async () => {
        const response = await store.dispatch('customer/getCustomer', props.customerID);
        foundedCustomerByID.value = response.data;
      })

      return {
        editCustomer,
        foundedCustomerByID,
        showMessage
      };
    },
  }
</script>