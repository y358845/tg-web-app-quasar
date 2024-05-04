<template>
  <div>

    <q-item class="bg-dark text-white " flat>

      <q-item-section avatar>
        <q-avatar>
          <img src="../../assets/chief1.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>Новая заявка на техподдержку!</q-item-label>
      </q-item-section>

    </q-item>

    <q-form @reset="onReset" class="q-gutter-md q-pa-sm">


      <q-input v-model="deskription" color="warning" @update:model-value="(val) => checkOfFilling(val)" dense
        label-color=dark outlined label="Описание проблемы" hint="Опишите проблему" hint-color="red" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Опишите проблему']">
        <template v-slot:prepend>
          <q-icon name="description" color="warning" />
        </template>
      </q-input>




      <q-input v-model="phone" color="warning" @update:model-value="(val) => checkOfFilling(val)" dense outlined
        label="Телефон" label-color=dark hint="Проверьте контактный номер телефона/при отсутствии введите новый"
        lazy-rules :rules="[(val) => (val && val.length > 0) || 'Введите контактный телефонный номер']">
        <template v-slot:prepend>
          <q-icon name="call" color="warning" />
        </template>
      </q-input>


      <q-uploader @added="addFile" style="width: 96%" dense flat color="dark" multiple max-files="3" hide-upload-btn
        no-thumbnails>
        <template v-slot:header="scope">
          <div class="row items-center q-pa-sm">
            <q-btn icon="attach_file" round dense flat color="warning"> </q-btn>
            <div class="col">
              <div class="q-uploader__title">
                Добавить файлы(максимум три)
              </div>
            </div>
            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
              <q-uploader-add-trigger></q-uploader-add-trigger>
              <q-tooltip class="bg-dark text-body2" :offset="[10, 10]" transition-show="scale" transition-hide="scale">
                Добавить файлы
              </q-tooltip>
            </q-btn>
          </div>
        </template>
      </q-uploader>

    </q-form>

  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapState } from "vuex";
import { addFileInTask } from "../../tg/tg_methods";

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
  // computed: {
  //   ...mapState("tasks", ["userList"])
  // },
  methods: {
    ...mapActions("base", ["saveData"]),
    mainButtonClicked() {
      this.sendRequest()
    },
    async sendRequest() {
      let dataForm = {
        problem: this.deskription,
        tgid: tgid.toString(),
        tel: this.phone,
        url: "tasks/task",
        nameState: "setTemp",
        nameMethod: "api/tg/post_request_1C"
      };
      this.files.map((f, i) => {
        dataForm[`fileName${i}`] = f.fileName;
        dataForm[`file${i}`] = f.file;
      });
      this.saveData(dataForm).then((res => {
        tg.close()
      }))

    },
    addFile(file) {
      addFileInTask(file, this.files)
    },
  },
  created() {
    tg.expand();
    tg.MainButton.setParams({
      text: "Создать заявку",
      color: "#D7A310",
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
