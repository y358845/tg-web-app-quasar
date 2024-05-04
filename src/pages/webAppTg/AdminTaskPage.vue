<template>
  <div>



    <q-item class="bg-dark text-white " flat>

      <q-item-section avatar>
        <q-avatar>
          <img src="../../assets/chief1.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>Новая заявка на техподдержку</q-item-label>
      </q-item-section>

    </q-item>

    <q-form @reset="onReset" class="q-gutter-md q-pa-sm  ">

      <q-select bg-color="white" class="q-pt-md col " color="warning" v-model="employer" option-label="name"
        option-value="number" outlined use-input hide-selected bottom-slots fill-input dense input-debounce="0"
        :options="options" @filter="filterFn" label="Сотрудник" label-color=dark
        :behavior="$q.platform.is.ios === true ? 'menu' : 'menu'">
        <template v-slot:hint>
          <div v-if="!employer.division">Выберите сотрудника</div>
          <div class="text-warning">{{ employer.division }}</div>
        </template>
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label>{{ scope.opt.name }}</q-item-label>
              <q-item-label caption class="text-warning">{{ scope.opt.division }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>

        <template v-slot:prepend>
          <q-icon name="psychology" color="warning" />
        </template>
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">Сотрудник не найден</q-item-section>
          </q-item>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="employer = ''" class="cursor-pointer"></q-icon>
        </template>
      </q-select>

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-sm hidden" flat bordered>
        <q-input bg-color="white" dense outlined readonly v-model="employer.division" label="Подразделение"
          hint="Подразделение">
          <template v-slot:prepend>
            <q-icon name="diversity_3" color="warning" />
          </template>
        </q-input>
      </q-card>

      <q-input bg-color="white" color="warning" @update:model-value="(val) => checkOfFilling(val)" dense type="textarea"
        outlined v-model="deskription" label="Описание проблемы" hint="Опишите проблему" lazy-rules label-color=dark
        :rules="[(val) => (val && val.length > 0) || 'Опишите проблему']">
        <template v-slot:prepend>
          <q-icon name="description" color="warning" />
        </template>
      </q-input>

      <q-input bg-color="white" color="warning" @update:model-value="(val) => checkOfFilling(val)" dense outlined
        v-model="employer.tel" type="textarea" autogrow label="Телефон" label-color=dark
        hint="Проверьте контактный номер телефона/при отсутствии введите новый" lazy-rules :rules="[
          (val) =>
            (val && val.length > 0) || 'Введите контактный телефонный номер',
        ]">
        <template v-slot:prepend>
          <q-icon name="call" color="warning" />
        </template>
      </q-input>

      <q-uploader bordered style="width: 96%" dense flat color="dark" @added="addFile" multiple max-files="3"
        hide-upload-btn no-thumbnails>
        <template v-slot:header="scope">
          <div class="row items-center q-pa-sm">
            <q-btn icon="attach_file" round dense flat color="warning"></q-btn>
            <div class="col">
              <div class="q-uploader__title">Добавить файлы(максимум три)</div>
            </div>
            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
              <q-uploader-add-trigger></q-uploader-add-trigger>
              <q-tooltip class="bg-dark text-body2" :offset="[10, 10]" transition-show="scale"
                transition-hide="scale">Добавить файлы</q-tooltip>
            </q-btn>
          </div>
        </template>
      </q-uploader>

    </q-form>



  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapState } from "vuex";
import { addFileInTask } from "../../tg/tg_methods";
const tg = window?.Telegram?.WebApp;
const tgid = window?.Telegram?.WebApp.initDataUnsafe.user.id;
export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {
      deskription: ref(""),
      phone: ref(""),
      files: [],
      employer: ref(""),
      options: ref([]),


      formData: {
        url: "allworkers/allworkers",
        nameMethod: "api/tg/post_request_1C",
        nameState: "setUserList"
      },
      checkOfFilling(val) {
        if (val) {
          tg.MainButton.show();
        }
      }
    };
  },

  async mounted() {
    tg.ready();
    this.saveData(this.formData);
  },
  methods: {
    ...mapActions("base", ["saveData"]),

    mainButtonClicked() {
      this.sendRequest();
    },

    filterFn(val, update) {
      if (val.length < 2) {
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.options = this.userList.filter(
          v => v.name.toLowerCase().indexOf(needle) > -1
        );
      });
    },

    async sendRequest() {
      let formDataPostTask = {
        idsotr: this.employer.number,
        problem: this.deskription,
        tgid: tgid.toString(),
        tel: this.employer.tel,
        url: "tasks/task",
        nameState: "setTemp",
        nameMethod: "api/tg/post_request_1C"
      };
      this.files.map((f, i) => {
        formDataPostTask[`fileName${i}`] = f.fileName;
        formDataPostTask[`file${i}`] = f.file;
      });
      this.saveData(formDataPostTask).then((res => {
        tg.close()
      })

      )
    },

    addFile(file) {
      addFileInTask(file, this.files)
    },
  },
  computed: {
    ...mapState("base", ["userList"])
  },
  created() {
    tg.expand();
    tg.MainButton.setParams({
      text: "Создать заявку",
      color: "#D7A310",
    });
    tg.onEvent("mainButtonClicked", this.mainButtonClicked);
    tg.MainButton.hide();
    this.phone = window?.Telegram?.WebView.initParams.startapp;
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
</style>
