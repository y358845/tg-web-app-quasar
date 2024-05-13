<template>
  <div class="q-pa-md">
    <modal-web-heder>График отпусков</modal-web-heder>
    <q-table flat bordered class="q-mt-md my-sticky-header-table" :rows="tasksFiltered" :columns="columns"
      row-key="name" dense virtual-scroll :rows-per-page-options="[0]" :separator="separator">
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="searchString" placeholder="Поиск">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
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

<style></style>
