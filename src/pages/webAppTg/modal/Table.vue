<template>
  <div class="q-pa-md bg-white">


    <q-layout view="lHh Lpr lFf" container style="height: 750px" class="shadow-2 rounded-borders">
      <modal-web-heder class="q-pt-md">График отпусков</modal-web-heder>
      <div class=" q-gutter-sm row q-mt-sm">
        <q-input outlined v-model="searchString" label="Поиск" class="q-mt-md q-mb-sm searching" dense bg-color="white"
          color="warning">
          <template v-slot:append>
            <q-icon v-if="searchString !== ''" name="close" @click="searchString = ''" class="cursor-pointer" />
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn color="dark" icon="cloud_upload" label="Скачать" class="dowloadBtn" />
      </div>
      <q-page-container>
        <q-page padding>
          <q-table flat class="q-mt-md my-sticky-header-table" :rows="tasksFiltered" :columns="columns" dense
            virtual-scroll :rows-per-page-options="[0]" :separator="separator">

            <template v-slot:body="props">
              <!-- строка -->
              <q-tr :props="props" class="bg-grey-2">
                <!-- ячейки -->
                <q-td v-for="col in props.cols" :key="col.name" :props="props" v-show="props.row.vacations === 'Отпуск'"
                  class="bg-red-6 text-white">
                  <div>{{ col.value }}</div>
                </q-td>
                <q-td v-for="col in props.cols" :key="col.name" :props="props"
                  v-show="props.row.vacations === 'Работает'" class="bg-grey-2">
                  {{ col.value }}
                </q-td>
                <!-- <q-td v-for="col in props.cols" :key="col.name" :props="props"
            :class="{ 'text-white bg-red-6': props.row.vacations === 'Отпуск' }">
            {{ col.value }}
          </q-td> -->
              </q-tr>

            </template>

          </q-table>
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="warning"></q-btn>
          </q-page-scroller>
        </q-page>
      </q-page-container>
    </q-layout>


  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { defineComponent, ref } from "vue";
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



export default {
  components: {
    "modal-web-heder": require("components/UI/ModalWebAppTgHeader.vue").default
  },
  setup() {
    return {
      searchString: ref(''),
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
      // console.log(newRows);
      return newRows
    }

  },
  computed: {
    ...mapState("base", ["vacations"]),

    tasksFiltered() {

      return this.vacations.filter(item =>
        item.name.toLowerCase().includes(this.searchString.toLowerCase()))
    },
  },
}
</script>

<style>
q-table__top,
thead tr:first-child th {
  /* bg color is important for th; just specify one */
  background-color: #D7A310;
  color: white;
  height: 35px;
}

.searching {
  width: 50%;
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
</style>
