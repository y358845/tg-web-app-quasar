<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 500px" class="bg-white">
      <q-header class="bg-white">
        <modal-web-heder>Оснащение подразделений</modal-web-heder>
        <q-select bg-color="white" class="q-pl-sm q-pr-sm q-pt-md" color="warning" v-model="employer"
          option-label="name" option-value="number" @update:model-value="val => getReport(val)" outlined use-input
          hide-selected bottom-slots fill-input dense input-debounce="0" :options="options" @filter="filterFn"
          label="Подразделение" label-color=dark :behavior="$q.platform.is.ios === true ? 'menu' : 'menu'">

          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.name }}</q-item-label>
                <q-item-label caption class="text-warning">{{ scope.opt.code }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:prepend>
            <q-icon name="groups" color="warning" />
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">Подразделение не найдено</q-item-section>
            </q-item>
          </template>
          <template v-slot:append>
            <q-icon name="close" @click.stop="employer = ''" class="cursor-pointer"></q-icon>
          </template>
        </q-select>
      </q-header>

      <q-item-label class="equipmentlist q-pr-none q-pt-sm"></q-item-label>
      <q-list v-if="equipmentList != []" bordered separator class="bg-white q-ma-sm">
        <q-item v-for="item in equipmentList" :key="item.code" class="q-ma-sm" clickable v-ripple>
          <q-item-section>{{ item.equipment }}</q-item-section>
        </q-item>
      </q-list>

    </q-layout>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapState } from "vuex";
// const tg = window?.Telegram?.WebApp;
// const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id;
export default defineComponent({
  name: "MainLayout",
  components: {
    "modal-web-heder": require("components/UI/ModalWebAppTgHeader.vue").default
  },
  setup() {
    return {
      deskription: ref(""),
      phone: ref(""),
      files: [],
      employer: ref(""),
      options: ref([]),
      itemlist: [],


      formData: {
        url: "departments_inv",
        nameMethod: "api/tg/post_request_1C",
        nameState: "setDepartList"
      },
      checkOfFilling(val) {
        if (val) {
          tg.MainButton.show();
        }
      }
    };
  },

  async mounted() {
    // tg.ready();
    this.saveData(this.formData);
  },
  methods: {
    ...mapActions("base", ["saveData"]),
    showChannel(val) {
      console.log(val.code)
    },
    mainButtonClicked() {
      this.sendRequest();
    },
    getReport(el) {
      console.log(el);
      let formDataPostTask = {
        department: el.name,
        url: "equipment/equipment",
        nameState: "setEquipmentList",
        nameMethod: "api/tg/post_request_1C"
      };

      this.saveData(formDataPostTask).then((res => {

      })

      )
    },

    filterFn(val, update) {
      if (val.length < 2) {
        return;
      }
      update(() => {
        this.equipmentList = []
        const needle = val.toLowerCase();
        this.options = this.departList.filter(
          v => v.name.toLowerCase().indexOf(needle) > -1
        );

      });
    },


  },
  computed: {
    ...mapState("base", ["departList", "equipmentList"])
  },
  created() {
    // tg.expand();
    // tg.MainButton.setParams({
    //   text: "Создать заявку",
    //   color: "#D7A310",
    // });
    // tg.onEvent("mainButtonClicked", this.mainButtonClicked);
    // tg.MainButton.hide();
    // this.phone = window?.Telegram?.WebView.initParams.startapp;
  }
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

.q-date {
  box-shadow: none;
}

.q-uploader__file-header .q-uploader__title {
  color: rgba(0, 0, 0, 0.6);
}

.equipmentlist {
  margin-top: 120px;
}
</style>
