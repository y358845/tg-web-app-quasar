<template>
  <div>

    <q-bar class="bg-primary text-white q-pa-md">
      <q-btn dense flat round icon="confirmation_number" size="8.5px" color="white" />
      <div class="col text-center text-weight-bold">Новая заявка на техподдержку</div>
    </q-bar>

    <typography class="row items-center justify-center q-mt-md">Опишите проблему</typography>

    <q-form @reset="onReset" class="q-gutter-md q-pa-sm">

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-sm" flat bordered>


        <q-input v-model="deskription" @update:model-value="(val) => checkOfFilling(val)" dense outlined
          label="Описание проблемы" hint="Опишите проблему" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Опишите проблему']">
          <template v-slot:prepend>
            <q-icon name="description" color="orange" />
          </template>
        </q-input>
      </q-card>

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-md" flat bordered>

        <q-input v-model="phone" @update:model-value="(val) => checkOfFilling(val)" dense outlined label="Телефон"
          hint="Проверьте контактный номер телефона/при отсутствии введите новый" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Введите контактный телефонный номер']">
          <template v-slot:prepend>
            <q-icon name="call" color="orange" />
          </template>
        </q-input>
      </q-card>

      <q-uploader @added="addFile" style="width: 96%" dense flat color="primary" multiple max-files="3" hide-upload-btn
        no-thumbnails>
        <template v-slot:header="scope">
          <div class="row items-center q-pa-sm">
            <q-btn icon="attach_file" round dense flat> </q-btn>
            <div class="col">
              <div class="q-uploader__title">
                Добавить файлы(максимум три)
              </div>
            </div>
            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
              <q-uploader-add-trigger></q-uploader-add-trigger>
              <q-tooltip class="bg-primary text-body2" :offset="[10, 10]" transition-show="scale" transition-hide="scale">
                Добавить файлы
              </q-tooltip>
            </q-btn>
          </div>
        </template>
      </q-uploader>
      <!-- <q-btn color="white" text-color="black" label="Standard" @click="sendRequest()" />
      <q-input v-model="test"></q-input> -->
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapState } from "vuex";
import { addFileInTask } from "src/functions/1с_response";

const tg = window?.Telegram?.WebApp;
const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id
export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {
      deskription: ref(""),
      phone: ref(""),
      files: [],
      test: ref(""),
      checkOfFilling(val) {
        if (val) {
          tg.MainButton.show();
        }
      },
    };
  },
  mounted() {
    tg.ready();
  },
  computed: {
    ...mapState("tasks", ["userList"])
  },
  methods: {
    ...mapActions("tasks", ["postQuery"]),
    mainButtonClicked() {
      this.sendRequest()
    },
    sendRequest() {
      let dataForm = {
        problem: this.deskription,
        tgid: tgid.toString(),
        tel: this.phone,
        nameMethod: 'tasks/task',
      };
      this.files.map((f, i) => {
        dataForm[`fileName${i}`] = f.fileName;
        dataForm[`file${i}`] = f.file;
      });
      console.log(dataForm);
      this.postQuery(dataForm);
    },
    addFile(file) {
      addFileInTask(file, this.files)
    },
  },
  created() {
    tg.expand();
    tg.MainButton.setParams({
      text: "Создать заявку",
      color: "#1976D2"
    });
    tg.onEvent("mainButtonClicked", this.mainButtonClicked);
    tg.MainButton.hide();
    this.phone = window?.Telegram?.WebView.initParams.startapp
  }

});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: white;
  color: black;
}

.q-date {
  box-shadow: none;
}

.q-uploader__file-header .q-uploader__title {
  color: rgba(0, 0, 0, 0.6);
}
</style>
