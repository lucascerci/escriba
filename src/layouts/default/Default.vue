<template>
  <v-app>
    <default-bar />

    <default-view />

    <CustomSnackbar />
  </v-app>
</template>

<script setup>
  import CustomSnackbar from '@/components/CustomSnackbar.vue'
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'  
</script>
