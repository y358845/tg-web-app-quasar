<template>
  <div>
    <q-bar class="bg-primary text-white q-pa-md">
      <q-btn dense flat round icon="confirmation_number" size="8.5px" color="white" />
      <div class="col text-center text-weight-bold">Новая заявка на техподдержку</div>
    </q-bar>

    <typography class="row items-center justify-center q-mt-md">Опишите проблему</typography>

    <q-form @reset="onReset" class="q-gutter-md q-pa-sm">
      <q-card class="my-card q-pa-sm q-pr-sm q-pb-sm" flat bordered>
        <q-select v-model="employer" option-label="name" option-value="number" outlined class="col" use-input
          hide-selected bottom-slots fill-input dense input-debounce="0" :options="options" @filter="filterFn"
          label="Сотрудник" :behavior="$q.platform.is.ios === true ? 'menu' : 'menu'">
          <template v-slot:hint>
            <div class="text-primary">{{ employer.division }}</div>
          </template>
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.name }}</q-item-label>
                <q-item-label caption class="text-primary">{{ scope.opt.division }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:prepend>
            <q-icon name="psychology" color="orange" />
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
      </q-card>

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-sm hidden" flat bordered>
        <q-input dense outlined readonly v-model="employer.division" label="Подразделение" hint="Подразделение">
          <!-- <template v-slot:label>
            {{ login.division }}
          </template>-->
          <template v-slot:prepend>
            <q-icon name="diversity_3" color="orange" />
          </template>
        </q-input>
      </q-card>

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-sm" flat bordered>
        <q-input @update:model-value="(val) => checkOfFilling(val)" dense type="textarea" outlined v-model="deskription"
          label="Описание проблемы" hint="Опишите проблему" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Опишите проблему']">
          <template v-slot:prepend>
            <q-icon name="description" color="orange" />
          </template>
        </q-input>
      </q-card>

      <q-card class="my-card q-pa-sm q-pr-sm q-pb-md" flat bordered>
        <q-input @update:model-value="(val) => checkOfFilling(val)" dense outlined v-model="employer.tel"
          type="textarea" autogrow label="Телефон"
          hint="Проверьте контактный номер телефона/при отсутствии введите новый" lazy-rules :rules="[
      (val) =>
        (val && val.length > 0) || 'Введите контактный телефонный номер',
    ]">
          <template v-slot:prepend>
            <q-icon name="call" color="orange" />
          </template>
        </q-input>
      </q-card>

      <q-uploader style="width: 96%" dense flat color="primary" @added="addFile" multiple max-files="3" hide-upload-btn
        no-thumbnails>
        <template v-slot:header="scope">
          <div class="row items-center q-pa-sm">
            <q-btn icon="attach_file" round dense flat></q-btn>
            <div class="col">
              <div class="q-uploader__title">Добавить файлы(максимум три)</div>
            </div>
            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
              <q-uploader-add-trigger></q-uploader-add-trigger>
              <q-tooltip class="bg-primary text-body2" :offset="[10, 10]" transition-show="scale"
                transition-hide="scale">Добавить файлы</q-tooltip>
            </q-btn>
          </div>
        </template>
      </q-uploader>

      <!-- <q-btn color="white" text-color="black" label="Standard" @click="sendRequest()" />
      <q-input v-model="test"></q-input> -->
    </q-form>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapState } from "vuex";
import { addFileInTask } from "src/functions/1с_response";
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
      formDataUserList: {
        nameMethod: "allworkers/allworkers",
        nameState: "setUserList"
      },

      checkOfFilling(val) {
        if (val) {
          tg.MainButton.show();
        }
      }
    };
  },

  mounted() {
    tg.ready();
    this.postQuery(this.formDataUserList);
  },
  methods: {
    ...mapActions("tasks", ["postQuery"]),

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
        nameMethod: "tasks/task"
      };
      this.files.map((f, i) => {
        formDataPostTask[`fileName${i}`] = f.fileName;
        formDataPostTask[`file${i}`] = f.file;
      });
      console.log(formDataPostTask);
      this.postQuery(formDataPostTask);
    },

    addFile(file) {
      addFileInTask(file, this.files)
    },
  },
  computed: {
    ...mapState("tasks", ["userList"])
  },
  created() {

    tg.expand();
    tg.MainButton.setParams({
      text: "Создать заявку",
      color: "#1976D2",
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
