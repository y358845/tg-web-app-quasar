<template>
  <div class=" bg-white">
    <modal-web-heder class="q-pl-xs q-pt-xs q-pr-xs" unelevated>График отпусков(факт.)</modal-web-heder>
    <div class=" q-gutter-sm row ">
      <q-input outlined v-model="searchString" label="Поиск" class="searching q-mt-md q-pl-xs " dense bg-color="white"
        color="warning">
        <template v-slot:append>
          <q-icon v-if="searchString !== ''" name="close" @click="searchString = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
        <template v-slot:after>
          <q-btn color="dark" fixed-top-right class="dowloadBtn q-mr-xs q-mb-md" unelevated icon="cloud_upload"
            @click="getReport()"></q-btn>
        </template>
      </q-input>
    </div>

    <q-table flat class="q-mt-sm my-sticky-header-table q-pl-xs q-pr-xs" :rows="tasksFiltered" :columns="columns" dense
      :rows-per-page-options="[setRppo]" :separator="separator" no-data-label="График отпусков пуст">

      <template v-slot:body="props">
        <!-- строка -->
        <q-tr :props="props" class="bg-grey-2  ">
          <!-- ячейки -->
          <q-td v-for="col in props.cols" :key="col.name" :props="props" v-show="props.row.vacations === 'Отпуск'"
            class="bg-red-3  ">
            <div>{{ col.value }}</div>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props" v-show="props.row.vacations === 'Работает'"
            class="bg-grey-2  ">
            {{ col.value }}

          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props" v-show="props.row.vacations === 'Скоро'"
            class="bg-amber-3 ">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ref } from "vue";
import { Screen } from 'quasar'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'ФИО',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'dateN', align: 'left', label: 'C ', field: 'dateN', sortable: true },
  { name: 'dateK', align: 'left', label: 'По', field: 'dateK', sortable: true },
]

const tg = window?.Telegram?.WebApp;
const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id;
export default {
  components: {
    "modal-web-heder": require("components/UI/ModalWebAppTgHeader.vue").default
  },
  setup() {
    return {
      hh: ref(''),
      searchString: ref(''),
      ppo: Screen.height,
      columns,
      rows: [],
      separator: ref('cell'),
      formData: {
        url: "vacationtab/vacationtab",
        nameState: "setVacations",
        nameMethod: "api/tg/post_request_1C",
      },
      selected: [1],

      pagination: ref({
        rowsPerPage: 0
      })
    }
  },
  async mounted() {
    tg.ready();
    this.hh = Screen.height
    await this.saveData(this.formData).then(res => {
      this.rows = this.sortRows(res)
    })

  },

  methods: {
    ...mapActions("base", ["saveData"]),

    sortRows(arr) {
      let newRows = []
      arr.forEach(element => {
        newRows.push({
          name: element.name,
          dateN: element.dateN,
          dateK: element.dateK
        })
      });
      return newRows
    },
    async getReport() {

      const dataForm = {
        queryId: tgid.toString(),
        nameMethod: `api/tg/report`,
        url: "vacation/vacation",
        title: 'VacationReport.pdf',
        type: 'arraybuffer'
      };
      this.saveData(dataForm).then(res => {
        tg.close();
      })

    }

  },
  computed: {
    ...mapState("base", ["vacations"]),

    tasksFiltered() {
      return this.vacations.filter(item =>
        item.name.toLowerCase().includes(this.searchString.toLowerCase()))
    },
    setRppo() {
      if (Screen.height < 600) {
        this.rppo = 12
      }
      else if (Screen.height > 600 && Screen.height < 900) {
        this.rppo = 15
      }
      return this.rppo
    }
  },

}
</script>

<style>
q-table__top,
thead tr:first-child th {
  background-color: #D7A310;
  color: white;
  height: 35px;
}

.searching {
  width: 100%;
}

.sell {
  border: 3px solid white;
}

.q-table thead,
.q-table tr,
.q-table th,
.q-table td {
  border-color: white;
}

.dowloadBtn {
  height: 40px;
  margin-top: 16px;
}

.close_btn {
  position: absolute;
  top: 30px;
  right: 33px;
  background: transparent;
  border: 0;
  cursor: pointer;


}

.q-table--dense .q-table th:first-child,
.q-table--dense .q-table td:first-child {
  padding-left: 9px;
}
</style>
