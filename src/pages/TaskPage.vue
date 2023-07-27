<template>
  <div>
    <q-bar class="bg-primary text-white q-pa-md">
      <q-btn dense flat round icon="confirmation_number" size="8.5px" color="white" />
      <div class="col text-center text-weight-bold">Новая заявка на техподдержку</div>
    </q-bar>

    <typography class="row items-center justify-center q-mt-md">Опишите проблему</typography>

    <q-form @reset="onReset" class="q-gutter-md q-pa-sm">

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-sm" flat bordered>


        <q-input @update:model-value="(val) => checkOfFilling(val)" dense outlined v-model="deskription"
          label="Описание проблемы" hint="Опишите проблему" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Опишите проблему']">
          <template v-slot:prepend>
            <q-icon name="description" color="orange" />
          </template>
        </q-input>
      </q-card>

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-md" flat bordered>


        <q-input @update:model-value="(val) => checkOfFilling(val)" dense outlined v-model="phone" label="Телефон"
          hint="Проверьте контактный номер телефона/при отсутствии введите новый" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Введите контактный телефонный номер']">
          <template v-slot:prepend>
            <q-icon name="call" color="orange" />
          </template>
        </q-input>
      </q-card>


      <q-uploader style="width: 96%" dense flat color="primary" @added="addFile" multiple max-files="3" hide-upload-btn
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

      <!-- <q-btn color="white" text-color="black" label="Standard" @click="startParam()" />
      <q-input dense outlined v-model="test"></q-input> -->
    </q-form>
  </div>
</template>
<script>




import { defineComponent, ref } from "vue";
import { uni_rersponse2 } from "src/functions/1с_response";
import axios from "axios";
import {
  QSpinnerGears,
  Loading
} from "quasar";
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
  methods: {

    mainButtonClicked() {
      this.sendInquiry()
    },
    startParam() {
      console.log('событие')
    }
    ,
    async sendMessageBot(msg) {
      // this.surname = tg.initDataUnsafe?.query_id.toString()

      const dataForm = {
        queryId: tg.initDataUnsafe?.query_id.toString(),
        message: JSON.stringify(msg)
      }
      await axios.post('https://1c.rostgmu.ru:8000/web-data', dataForm

      ).then(res =>
        this.test = JSON.stringify(res.data)

        // console.log(JSON.stringify(res.data))
      )
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
          this.test = error.message
        });
    },
    async sendInquiry() {
      let dataForm = {
        problem: this.deskription,
        tgid: tgid.toString(),
        tel: this.phone,
        nameMethod: 'tasks/task'
      };
      this.files.map((f, i) => {
        dataForm[`fileName${i}`] = f.fileName;
        dataForm[`file${i}`] = f.file;
      });
      Loading.show({
        spinner: QSpinnerGears,
        backgroundColor: "bg",
        message: "Создание заявки...",
      })
      try {
        return await uni_rersponse2(dataForm, dataForm.nameMethod).then((res) => {
          this.sendMessageBot(res.data)
        }).then(() => { tg.close() })
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        Loading.hide();

      }
    },
    addFile(file) {
      const arrFiles = this.files;
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function () {
        let file64 = reader.result;
        fetch(file64).then((res) => {
          res.arrayBuffer().then((buf) => {
            arrFiles.push({ fileName: file[0].name, file: file64 });
          });
        });
      };
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
    this.test = tg.initDataUnsafe?.query_id.toString()

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
