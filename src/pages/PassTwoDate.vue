<template>
  <div>
    <q-bar class="bg-primary text-white q-pa-md">
      <q-btn dense flat round icon="confirmation_number" size="8.5px" color="white" />
      <div class="col text-center text-weight-bold">Новый пропуск</div>

    </q-bar>

    <typography class="row items-center justify-center q-mt-md">Заполните данные гостя</typography>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-sm">
      <q-card class="my-card q-pa-sm q-pr-sm q-pb-sm" flat bordered>


        <q-input @update:model-value="(val) => checkOfFilling(val)" dense outlined v-model="surname" label="ФИО"
          hint="Введите ФИО гостя" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Введите фамилию']">
          <template v-slot:prepend>
            <q-icon name="badge" color="orange" />
          </template>
        </q-input>
      </q-card>
      <typography class="row items-center justify-center q-mt-md">Заполните даты пропуска</typography>
      <q-card class="my-card q-pl-sm q-pr-sm q-pb-md" flat bordered>

        <div class="row items-center justify-center toggle1">
          <q-toggle v-model="value1" @update:model-value="(value, evt) => checkTogl1(value, evt)" color="primary"
            keep-color icon="alarm" label="Сегодня" />

          <q-toggle v-model="value2" @update:model-value="(value, evt) => checkTogl2(value, evt)" color="green" keep-color
            icon="alarm" label="Завтра" />
        </div>

        <div class="row q-mt-md">
          <q-input dense outlined v-model="date" mask="date" hint="Дата начала действия" class="col q-mr-md">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="orange">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Ок" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input dense outlined v-model="date2" mask="date" hint="Дата окончания действия" class="col">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="orange">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date2">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Ок" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card>
      <!-- <q-input dense outlined v-model="test"></q-input> -->
      <!-- <q-btn color="white" text-color="black" label="Standard" @click="tgMessageBot()" /> -->
    </q-form>
  </div>
</template>
<script>

var today = new Date();
var tomorrow = new Date();
const dateN = date.formatDate(today, "YYYY/MM/DD");
const dateK = date.formatDate(today, "YYYY/MM/DD");

import { defineComponent, ref } from "vue";
import { date } from "quasar";
import { uni_rersponse } from "src/functions/1с_response";
import axios from "axios";
import {
  QSpinnerGears,
  Loading
} from "quasar";
const tg = window?.Telegram?.WebApp;
const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id
// const start_param = window?.Telegram?.WebApp.initDataUnsafe.start_param
export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {
      date: ref(dateN),
      date2: ref(dateK),
      surname: ref(""),
      value1: ref(true),
      value2: ref(false),
      test: ref(""),



      checkOfFilling(val) {
        if (val) {
          tg.MainButton.show();
        }
      },
      // onSendData() {
      //   const dataForm = {
      //     surname: this.surname,
      //     date: this.date,
      //     date2: this.date2
      //   };
      //   tg.sendData(JSON.stringify(dataForm));
      // },
      checkTogl1(val, evt) {
        // console.log(evt);
        if (val) {
          this.value2 = false;
          this.date = date.formatDate(today, "YYYY/MM/DD");
          this.date2 = date.formatDate(today, "YYYY/MM/DD");
        }
      },
      checkTogl2(val) {
        if (val) {
          this.value1 = false;
          this.date = date.formatDate(
            tomorrow.setDate(today.getDate() + 1),
            "YYYY/MM/DD"
          );
          this.date2 = date.formatDate(
            tomorrow.setDate(today.getDate() + 1),
            "YYYY/MM/DD"
          );
        }
      }
    };
  },
  mounted() {
    tg.ready();
  },
  methods: {
    // tgMessageBot() {
    //   this.surname = window?.Telegram?.WebApp.initDataUnsafe.start_param
    // },
    mainButtonClicked() {
      this.sendInquiry()
    },
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
      const dataForm = {
        surname: this.surname,
        date: this.date,
        date2: this.date2,
        tgid: tgid.toString(),
        // query_id: tg.initDataUnsafe?.query_id,
        nameMethod: 'pass'
      };
      Loading.show({
        spinner: QSpinnerGears,
        backgroundColor: "bg",
        message: "Создание пропуска...",
      })
      try {
        return await uni_rersponse(dataForm, dataForm.nameMethod).then((res) => {
          // this.test = JSON.stringify(res.data)
          // this.sendMessageBot(JSON.stringify(res.data))
          // console.log(res);
        }).then(() => { })
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        Loading.hide();
      }
    }
  },
  created() {
    tg.expand();
    tg.MainButton.setParams({
      text: "Отправить пропуск в стол справок",
      color: "#1976D2"
    });
    tg.onEvent("mainButtonClicked", this.mainButtonClicked);
    tg.MainButton.hide();
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
</style>
