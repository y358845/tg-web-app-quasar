<template>
  <div>

    <!-- <q-card class="q-ma-md " bordered> -->

    <q-item class="bg-dark text-white " flat>

      <q-item-section avatar>
        <q-avatar>
          <img src="../../assets/chief1.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>Отчеты:</q-item-label>
      </q-item-section>

    </q-item>


    <q-form @submit="onSubmit" @reset="onReset" class="q-pa-md">
      <q-input outlined v-model="searchString" label="Поиск" dense bg-color="white" color="warning">
        <template v-slot:append>
          <q-icon name="search" color="warning" />
        </template>
      </q-input>
      <q-list>

        <q-expansion-item v-for="item in tasksFiltered" :key="item.title" v-model="item.model"
          expand-icon-class='text-warning' expand-separator icon="menu_book" class="bg-dark text-white q-mt-sm "
          clickable v-ripple bordered style="border-radius: 7px">

          <q-card bordered>

            <q-card-section class=" text-dark text-subtitle2" q-pb-md>
              <div class="text-subtitle2">{{ item.description }}</div>
            </q-card-section>
            <q-separator dark color="warning"></q-separator>

            <q-card-actions class="text-dark ">
              <q-btn color="dark" @click="getReport()">Сформировать</q-btn>
            </q-card-actions>

          </q-card>

          <template v-slot:header>

            <q-item-section>
              <div class="text-h8">{{ item.title }}</div>
            </q-item-section>

          </template>

        </q-expansion-item>

      </q-list>

    </q-form>
  </div>
</template>
<script>





import { mapActions, mapState } from "vuex";
import { defineComponent, ref } from "vue";
const tg = window?.Telegram?.WebApp;
const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id
export default {
  name: "MainLayout",

  data() {
    return {
      model: ref([
        {
          title: "Колл-центр количество записей",
          description: 'Описание:  количество звонков и записаннных по звонку услуг за две недели на текущую дату.',
          model: false,
        },
        {
          title: "График отпусков (ДЦРиИТ)",
          description: 'Описание:  график отпусков Департемента ЦРиИТ, отпуска действующие и прланируемые до конца текущего года.',
          model: false,
        },
        {
          title: "Задачи сегодня (ДЦРиИТ)",
          description: 'Описание:  график отпусков Департемента ЦРиИТ, отпуска действующие и прланируемые до конца текущего года.',
          model: false,
        },
        {
          title: "Задачи за неделю (ДЦРиИТ)",
          description: 'Описание:  график отпусков Департемента ЦРиИТ, отпуска действующие и прланируемые до конца текущего года.',
          model: false,
        },

      ]),
      modelSorted: [],
      searchString: '',
      pdfBlob: ref(null),

    };
  },
  mounted() {
    tg.ready();
  },
  methods: {
    ...mapActions("base", ["saveData"]),

    async getReport() {
      const dataForm = {
        queryId: tgid.toString(),
        nameMethod: `api/tg/reports`
      }
      this.saveData(dataForm).then((res => {
        tg.close()
      }))
    },


  },
  computed: {

    tasksFiltered() {
      return this.model.filter(item => item.title.toLowerCase().includes(this.searchString.toLowerCase()))
    }
  },
  created() {
    tg.expand();
    tg.MainButton.hide();
  },
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
</style>
