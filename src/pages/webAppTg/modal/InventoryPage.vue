<template>
  <div class=" bg-white">

    <modal-web-heder class="q-pl-xs q-pt-xs q-pr-xs" unelevated>Оснащение техникой</modal-web-heder>
    <div class=" q-gutter-sm row ">

      <q-select bg-color="white" class="q-pl-sm q-pr-sm q-pt-sm searching" color="warning" v-model="department"
        option-label="name" option-value="number" @update:model-value="val => getTable(val)" outlined use-input
        hide-selected bottom-slots fill-input dense input-debounce="0" :options="options" @filter="filterFn"
        label="Подразделение" label-color=dark :behavior="$q.platform.is.ios === true ? 'menu' : 'menu'">

        <!-- <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label>{{ scope.opt.name }}</q-item-label>
              <q-item-label caption class="text-warning">{{ scope.opt.code }}</q-item-label>
            </q-item-section>
          </q-item>
        </template> -->

        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">Подразделение не найдено</q-item-section>
          </q-item>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="department = ''" class="cursor-pointer"></q-icon>
        </template>
      </q-select>


    </div>

    <q-table flat class=" my-sticky-header-table q-pl-xs q-pr-xs" :rows="equipmentList" :columns="columns" dense
      :rows-per-page-options="[setRppo]" :separator="separator" no-data-label="Список пуст">
      <template v-slot:body="props">
        <q-tr :props="props" class="bg-grey-1  ">

          <q-item clickable v-ripple class="sell">
            <q-item-section>
              <q-item-label overline>{{ props.row.equipment }}</q-item-label>
              <div class="row">
                <q-item-section caption class="text-orange title-caption">{{ props.row.status }}</q-item-section>
                <!-- <q-item-section caption class="text-orange title-caption">{{ props.row.OS }}</q-item-section> -->
                <q-item-section side caption class="text-blue title-caption" v-if="props.row.ser_cod != ''">s/n:
                  {{ props.row.ser_cod }}</q-item-section>

              </div>

            </q-item-section>
            <q-item-section avatar v-if='props.row.OS.includes("Astra Linux 1.7")'>

              <img src="../../../assets/images/astra_linux_logo_color.svg" alt="" />

            </q-item-section>
            <q-item-section avatar v-if='props.row.OS.includes("Windows")'>

              <img class="os" src="../../../assets/images/windows.png" alt="" />

            </q-item-section>

          </q-item>

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
    equipment: 'equipment',
    required: true,
    label: 'Оборудование',
    align: 'left',
    field: row => row.equipment,
    format: val => `${val}`,
    sortable: true
  }

]

// const tg = window?.Telegram?.WebApp;
// const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id;
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
      options: ref([]),
      separator: ref('cell'),
      department: ref(''),
      selected: [1],
      formData: {
        url: "departments_inv",
        nameMethod: "api/tg/post_request_1C",
        nameState: "setDepartList"
      },
      pagination: ref({
        rowsPerPage: 0
      })
    }
  },
  async mounted() {
    // tg.ready();
    this.saveData(this.formData);
    this.hh = Screen.height
    let formData = {
      department: this.department,
      url: "equipment/equipment",
      nameState: "setEquipmentList",
      nameMethod: "api/tg/post_request_1C",
    };
    // await this.saveData(formData).then(res => {
    //   console.log(res);
    //   this.rows = this.sortRows(res)
    // })

  },

  methods: {
    ...mapActions("base", ["saveData"]),
    getTable(depart) {
      let formDataPostTask = {
        department: depart.name,
        url: "equipment/equipment",
        nameState: "setEquipmentList",
        nameMethod: "api/tg/post_request_1C"
      };

      this.saveData(formDataPostTask).then((res => {

      }))
    },
    sortRows(arr) {
      let newRows = []
      arr.forEach(element => {
        newRows.push({
          equipment: element.equipment,
        })
      });
      return newRows
    },
    filterFn(val, update) {
      if (val.length < 2) {
        return;
      }
      update(() => {

        const needle = val.toLowerCase();
        this.options = this.departList.filter(
          v => v.name.toLowerCase().indexOf(needle) > -1
        );

      });
    },
    // async getReport() {

    //   const dataForm = {
    //     // queryId: tgid.toString(),
    //     nameMethod: `api/tg/report`,
    //     url: "vacation/vacation",
    //     title: 'VacationReport.pdf',
    //     type: 'arraybuffer'
    //   };
    //   this.saveData(dataForm).then(res => {
    //     tg.close();
    //   })

    // }

  },
  computed: {
    ...mapState("base", ["departList", "equipmentList"]),

    setRppo() {
      if (Screen.height < 600) {
        this.rppo = 6
      }
      else if (Screen.height > 600 && Screen.height < 900) {
        this.rppo = 7
      }
      return this.rppo
    },
    snNumber(strNum) {
      console.log(strNum);
      // if (strNum != '') {
      //     return `s/n: ${strNum}`
      //   } else {
      return ''
      //   }
    }
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
  width: 100%;
}

.title-caption {
  font-size: 12px;
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

.q-table thead,
.q-table tr,
.q-table th,
.q-table td {
  border-color: white;
  border: 2px solid white;
  background-color: #F5F5F5;
}

.os {
  height: 20px;
}
</style>
