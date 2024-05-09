<template>
  <div>

    <q-btn v-if="!noButton" :to="to" flat icon="keyboard_backspace" color="primary" class=""
      @click="$emit('toggleRightDrawer')"> Назад
    </q-btn>

    <div id="q-app">

      <q-separator v-if="!noButton" class="q-mb-md" />

      <q-banner rounded class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon :name="avatar" :color="color" />
        </template>
        <slot></slot>
      </q-banner>
    </div>

  </div>
</template>

<script>
export default {
  props: ['to', 'avatar', 'toggleRightDrawer', 'noButton', 'color'],

};
</script>
