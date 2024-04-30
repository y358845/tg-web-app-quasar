<template>
  <div>

    <q-card class="q-ma-md " bordered>

      <q-item class="bg-dark text-white " flat>

        <q-item-section avatar>
          <q-avatar>
            <img src="../../assets/chief1.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Отчеты</q-item-label>
        </q-item-section>

      </q-item>


      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-sm">


        <q-list>

          <q-expansion-item v-model="expanded" @show="checkOfFilling(expanded)" expand-icon-class='text-warning'
            expand-separator icon="menu_book" class="bg-dark text-white" clickable v-ripple>


            <q-card>

              <q-card-section class=" text-dark text-subtitle2" q-pb-md>
                <div class="text-subtitle2">{{ text }}</div>
              </q-card-section>
              <q-separator dark color="warning"></q-separator>

              <q-card-actions class="text-dark ">
                <q-btn color="dark" @click="getReport()">Сформировать</q-btn>
              </q-card-actions>

            </q-card>

            <template v-slot:header>

              <q-item-section>
                <div class="text-h8">Колл-центр количество записей</div>
              </q-item-section>

            </template>
          </q-expansion-item>



        </q-list>

      </q-form>

    </q-card>

    <iframe :src="pdfsrc" style="width: 100%;height: 1000px; border: none;">
      Oops! an error has occurred.
    </iframe>
  </div>
</template>
<script>





import { defineComponent, ref } from "vue";
import axios from "axios";
import { QSpinnerGears, Loading } from "quasar";
import { saveAs } from 'file-saver';
const tg = window?.Telegram?.WebApp;
const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id
export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {
      expanded: ref(false),
      pdfBlob: ref(null),
      text: 'Описание:  количество звонков и записаннных по звонку услуг за две недели на текущую дату.',

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
    async getReport() {
      Loading.show({
        spinner: QSpinnerGears,
        backgroundColor: "bg",
        message: "Подождите, идет загрузка документа...",
      });
      try {
        await axios
          .get(
            "https://hs_reports_it:dE7my3zi@rostgmu-info.ru/Hospital_work/hs/Reports/CallCenter",
            {
              responseType: "blob",
            }
          )
          .then((res) => {
            saveAs(new Blob([res.data], { type: "application/pdf" }), "newReport.pdf");
          });
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        Loading.hide();
      }
    },

    mainButtonClicked() {
      this.sendInquiry();
    },

    async sendInquiry() {
      const dataForm = {
        surname: this.surname,
        date: this.date,
        date2: this.date2,
        tgid: tgid.toString(),
        // query_id: tg.initDataUnsafe?.query_id,
        nameMethod: "pass",
      };
      Loading.show({
        spinner: QSpinnerGears,
        backgroundColor: "bg",
        message: "Создание пропуска...",
      });
      try {
        return await uni_rersponse(dataForm, dataForm.nameMethod)
          .then((res) => {
          })
          .then(() => { });
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        Loading.hide();
      }
    },
  },
  created() {
    // this.getReport();
    tg.expand();
    tg.MainButton.setParams({
      text: "Сформировать",
      color: "#D7A310"
    });
    tg.onEvent("mainButtonClicked", this.mainButtonClicked);
    tg.MainButton.hide();
    // this.test = tg.initDataUnsafe?.query_id.toString()
  },
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

.my-card {
  height: 70px;
}

.q-date {
  box-shadow: none;
}
</style>
