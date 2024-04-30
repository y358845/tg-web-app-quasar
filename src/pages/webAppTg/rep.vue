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

        <!-- <q-btn color="primary" label="Скачать: Отчет колл-центр(количество записей)" @click="getReport()" /> -->



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
    <div>Adobe Embedded API</div>
    <button @click="openPDF">Click to view file</button>
    <div id="adobe-dc-view"></div>

    <iframe :src="pdfsrc" style="width: 100%; height: 300px; border: none">
    </iframe>
  </div>
</template>
<script>


import { defineComponent, ref } from "vue";
import axios from "axios";
import { QSpinnerGears, Loading } from "quasar";

export default defineComponent({
  name: "MainLayout",
  name: "SimpleInvoiceTabFiles",
  mixins: [],
  components: {},
  setup() {
    // return {
    //   pdfsrc: null,
    //   expanded: ref(false),
    //   text: 'Отчет демонсттирует количество звонков и записаннных по звонку услуг за две недели по текущую дату.',

    //   checkOfFilling(val) {
    //     if (val) {
    //       tg.MainButton.show();
    //     }
    //   },
    // };
  },
  mounted() {
    document.addEventListener("adobe_dc_view_sdk.ready", () => {
      this.adobeApiPDFReady = true;
      console.log("Adobe created with adobe_dc_view_sdk.ready");
    });

    // Dynamically load Adobe SDK Viewer for this page
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://documentservices.adobe.com/view-sdk/viewer.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  },
  data() {
    return {
      adobeApiPDFReady: false,
      adobeDCView: null,
    };
  },
  methods: {
    openPDF() {
      console.log("Trying to open PDF");
      // Opening preview with default settings from https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/#live-demo
      this.adobeDCView.previewFile(
        {
          content: {
            location: {
              url:
                "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
            },
          },
          metaData: { fileName: "Bodea Brochure.pdf" },
        },
        {}
      );
    },

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
            console.log(URL.createObjectURL(
              new Blob([res.data], { type: "application/pdf" })
            ));
            window.open(
              URL.createObjectURL(
                new Blob([res.data], { type: "application/pdf" })
              )
            );
            // saveAs(pdfBlob, "newPdf.pdf");
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
  watch: {
    adobeApiPDFReady(val) {
      if (val) {
        // val == true ; Adobe is loaded on page
        let view = new window.AdobeDC.View({
          clientId: "f016760c38f842eb8d0ce5ee456949b0",
          divId: "adobe-dc-view",
        });
        this.adobeDCView = Object.freeze(view);
      }
      console.log("Adobe is mounted with Client ID");
    },
  },
  created() {
    // tg.expand();
    // tg.MainButton.setParams({
    //   text: "Отправить пропуск в стол справок",
    //   color: "#1976D2"
    // });
    // tg.onEvent("mainButtonClicked", this.mainButtonClicked);
    // tg.MainButton.hide();
    // this.test = tg.initDataUnsafe?.query_id.toString()}
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

#adobe-dc-view {
  width: 500px;
  height: 500px;
}
</style>
