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

          <q-card class="my-card  q-mb-md">

            <q-item class="bg-dark text-white" clickable v-ripple>
              <q-item-section>Колл-центр количество записей</q-item-section>
              <q-btn flat color="warning" icon="download" @click="getReport()" />
              <q-card-actions class="bg-dark text-white q-mb-sm">
                <q-space />
                <q-btn color="warning" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  @click="expanded = !expanded" />
              </q-card-actions>
            </q-item>

            <q-slide-transition>
              <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subtitle2">
                  {{ text }}
                </q-card-section>
              </div>
            </q-slide-transition>

          </q-card>




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
const pdfSource = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf'
export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {
      expanded: ref(false),
      pdfBlob: ref(null),
      text: 'Отчет демонсттирует количество звонков и записаннных по звонку услуг за две недели по текущую дату.',

      checkOfFilling(val) {
        if (val) {
          tg.MainButton.show();
        }
      },
    };
  },
  mounted() {
    // tg.ready();
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
            // window.open(
            //   window.URL.createObjectURL(
            //     new Blob([res.data], { type: "application/pdf" })
            //   )
            // );
            // this.pdfBlob = new Blob([res.data], { type: "application/pdf" })
            saveAs(new Blob([res.data], { type: "application/pdf" }), "newReport.pdf");
            // console.log("Success", res);
            // const blob = new Blob([res.data], { type: `application/pdf` });
            // const objectUrl = URL.createObjectURL(blob);
            // this.pdfsrc = objectUrl;

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
            // this.test = JSON.stringify(res.data)
            // this.sendMessageBot(JSON.stringify(res.data))
            // console.log(res);
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
    // tg.expand();
    // tg.MainButton.setParams({
    //   text: "Отправить пропуск в стол справок",
    //   color: "#1976D2"
    // });
    // tg.onEvent("mainButtonClicked", this.mainButtonClicked);
    // tg.MainButton.hide();
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
