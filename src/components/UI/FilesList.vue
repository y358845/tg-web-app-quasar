<template>
  <div class="q-pt-md q-gutter-md">
    <modal-heder to="/" avatar="file_download" color="primary" :noButton="true">
      {{ TitleFileList }}
    </modal-heder>
    <q-list separator>
      <q-item border v-if="task.FileName1 == ''" clickable>
        <q-item-section avatar>
          <q-icon name="star_rate" color="primary" />
        </q-item-section>
        <q-item-section side>Нет файлов</q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script>
export default {
  components: {
    "modal-heder": require("components/UI/ModalHeader.vue").default,
  },
  props: ["task"],
  mounted() {

  },

};
</script>
