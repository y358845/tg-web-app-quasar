<template>
  <q-layout view="lHh Lpr lFf">
    <typography class="row items-center justify-center q-mt-md">Заполните данные гостя-vk</typography>
    <q-page-container>
      <keep-alive></keep-alive>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {

    }
  }
})
</script>
