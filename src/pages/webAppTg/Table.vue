<template>
  <div class="q-pa-md">
    <modal-web-heder>График отпусков</modal-web-heder>
    <q-input outlined v-model="searchString" label="Поиск" class="q-mt-md q-mb-sm searching" dense bg-color="white"
      color="warning">
      <template v-slot:append>
        <q-icon v-if="searchString !== ''" name="close" @click="searchString = ''" class="cursor-pointer" />
        <q-icon name="search" />
      </template>
    </q-input>
    <!-- <q-input borderless dense v-model="searchString" placeholder="Поиск">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
</q-input> -->
    <q-table flat bordered class="q-mt-md my-sticky-header-table" :rows="tasksFiltered" :columns="columns" dense
      virtual-scroll :rows-per-page-options="[0]" :separator="separator">
      <!-- <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="searchString" placeholder="Поиск">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template> -->
    </q-table>
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

//let rows = [
// {
//   name: 'Руденко В.А.',
//   calories: 159,
//   fat: 6.0,
// },
// {
//   name: 'Ice cream sandwich',
//   calories: 237,
//   fat: 9.0,
// },
// {
//   name: 'Eclair',
//   calories: 262,
//   fat: 16.0,
// }

//]

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
  width: 60%;
}
</style>
