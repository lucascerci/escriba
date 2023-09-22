<script>
import { computed, watch, ref, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { SnackbarAddOptions } from '@/plugins/snackbarType'

export default {
  setup() {
    const store = useStore()
    const message = ref('')
    const snackbar = ref(false)
    const snackbarOptions = ref({
        color: null,
        icon: null,
        mode: null,
        position: "top",
        text: null,
        timeout: 7500,
        title: null,
        visible: false
    })

    const snackbarMessage = computed(() => store.getters["notification/getSnackbarMessage"])
    const showSnackbar = computed(() => store.getters["notification/getShowSnackbar"])
    const snackbarType = computed(() => store.getters["notification/getSnackbarType"])

    watch(showSnackbar, (newShowSnackbar) => {
      snackbar.value = newShowSnackbar
      if (newShowSnackbar) {
        setTimeout(() => {
          setFalseBeforeLeave()
        }, 7000);
      }
    });

    watch(snackbarMessage, (newSnackbarMessage) => {
      message.value = newSnackbarMessage
    });

    watch(snackbarType, (newSnackbarType) => {
      snackbarOptions.value = SnackbarAddOptions(newSnackbarType)
    });

    const setFalseBeforeLeave = () => {
      store.commit('notification/setShowSnackbar', false)
    } 

    return { message, snackbar, snackbarOptions, setFalseBeforeLeave };
  },
};
</script>


<template>
    <v-snackbar
      v-model="snackbar" 
      auto-height 
      :color="snackbarOptions?.color" 
      :multi-line="snackbarOptions?.mode === 'multi-line'" 
      :timeout="snackbarOptions?.timeout" 
      :top="snackbarOptions?.position === 'top'"
    >
      <v-layout class="align-center pr-4 pl-6">
        <v-icon class="pr-3" dark large>{{ snackbarOptions?.icon }}</v-icon>
        <v-layout dflex column>
          <div>{{ message }}</div>
        </v-layout>
      </v-layout>

      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="setFalseBeforeLeave"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
</template>