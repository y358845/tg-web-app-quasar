<template>
  <div>
    <modal-web-heder>Отчеты:</modal-web-heder>

    <div @submit="onSubmit" @reset="onReset" class="q-pa-md">
      <q-input outlined v-model="searchString" label="Поиск" dense bg-color="white" color="warning">
        <template v-slot:append>
          <q-icon name="search" color="warning" />
        </template>
      </q-input>
      <q-list>

        <q-expansion-item v-for="item in tasksFiltered" :key="item.title" v-model="item.model"
          expand-icon-class="text-warning" expand-separator icon="menu_book" class="bg-dark text-white q-mt-sm"
          clickable v-ripple bordered style="border-radius: 7px">
          <q-card bordered>
            <q-card-section class="text-dark text-subtitle2" q-pb-md>
              <div class="text-subtitle2">{{ item.description }}</div>
            </q-card-section>
            <q-separator dark color="warning"></q-separator>

            <q-card-actions class="text-dark ">
              <q-btn color="dark" @click="getReport(item.text, item.method, item.url, item.title)">Сформировать</q-btn>
            </q-card-actions>
          </q-card>

          <template v-slot:header>
            <q-item-section>
              <div class="text-h8">{{ item.text }}</div>
            </q-item-section>
          </template>
        </q-expansion-item>
      </q-list>
    </div>
    <q-dialog v-model="alert" full-width full-height>

      <modal-table-vacation />
    </q-dialog>


  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { defineComponent, ref } from "vue";

const tg = window?.Telegram?.WebApp;
const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id;
export default {
  name: "Reports",

  data() {
    return {
      alert: ref(false),
      model: [
        {
          text: "Колл-центр количество записей",
          description:
            "Описание:  количество звонков и записаннных по звонку услуг за две недели на текущую дату.",
          model: false,
          method: `api/tg/reports`,
          url: '',
          title: '',
        },
        {
          text: "График отпусков (ДЦРиИТ)",
          description:
            "Описание:  график отпусков Департемента ЦРиИТ, отпуска действующие и планируемые до конца текущего года.",
          model: false,
          method: `api/tg/report`,
          url: "vacation/vacation",
          title: 'VacationReport.pdf'
        }
      ],
      searchString: ""
    };
  },
  mounted() {
    tg.ready();
  },
  methods: {
    ...mapActions("base", ["saveData"]),

    async getReport(text, method, url, title) {
      if (text === "График отпусков (ДЦРиИТ)") {
        this.alert = true
      } else {
        const dataForm = {
          queryId: tgid.toString(),
          nameMethod: method,
          url: url,
          title: title,
          type: 'arraybuffer'
        };
        this.saveData(dataForm).then(res => {
          tg.close();
        })
      }
    }
  },
  computed: {
    tasksFiltered() {
      return this.model.filter(item =>
        item.text.toLowerCase().includes(this.searchString.toLowerCase())
      );
    }
  },
  created() {
    tg.expand();
    tg.isClosingConfirmationEnabled = true;
    tg.onEvent('viewportChanged', () => tg.expand())
    tg.MainButton.hide();
  },
  components: {
    "modal-web-heder": require("components/UI/ModalWebAppTgHeader.vue").default,
    "modal-table-vacation": require("../webAppTg/modal/Table").default
  }
};
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

.q-dialog__backdrop {
  background: #3A5553;
}

body.platform-ios .q-dialog__inner--minimized>div,
body.platform-android:not(.native-mobile) .q-dialog__inner--minimized>div {
  max-height: 100%;
}
</style>
