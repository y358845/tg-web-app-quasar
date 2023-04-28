<template>
  <q-toolbar class="bg-primary text-white">
    <q-toolbar-title class="absolute-center">Пропуск</q-toolbar-title>
  </q-toolbar>

  <q-toolbar class="q-mt-md">
    <q-toolbar-title class="absolute-center text-h8 q-pt-md"> Заполните данные гостя </q-toolbar-title>
  </q-toolbar>
  <!-- <typography class="absolute-center">Заполните данные гостя</typography> -->

  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
    <q-input dense outlined v-model="surname" label="ФИО" hint="Ведите ФИО гостя" lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Введите фамилию']">
      <template v-slot:prepend>
        <q-icon name="badge" color="orange" />
      </template>
    </q-input>


    <q-toolbar class="q-pa-none q-mt-md">
      <q-toolbar-title class="absolute-center text-h8"> Заполните даты пропуска </q-toolbar-title>
    </q-toolbar>


    <q-select @update:model-value="val => selectDate(val)" dense outlined v-model="model" :options="options"
      label="Когда" />


    <div class="row">

      <q-input dense outlined v-model="date" mask="date" :rules="['date']" hint="Дата с" class="col q-mr-md">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer" color="orange">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="date">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Ок" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input dense outlined v-model="date2" mask="date" :rules="['date']" hint="Дата по" class="col">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer" color="orange">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="date2">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Ок" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

    </div>
    <div>
      <q-btn label="Сохранить" type="submit" color="primary" />
    </div>
  </q-form>
</template>
<script>
const d = new Date();
const dateN = d.getFullYear() + "/0" + (d.getMonth() + 1) + "/" + d.getDate();
const dateK = d.getFullYear() + "/0" + (d.getMonth() + 1) + "/" + d.getDate();

import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {
      date: ref(dateN),
      date2: ref(dateK),
      surname: ref(''),
      options: [
        'Сегодня', 'Завтра'],
      model: ref('Сегодня'),
      selectDate(val) {
        if (val === 'Завтра') {
          this.date = d.getFullYear() + "/0" + (d.getMonth() + 1) + "/" + (d.getDate() + 1);
          this.date2 = d.getFullYear() + "/0" + (d.getMonth() + 1) + "/" + (d.getDate() + 1);

        }
        else {
          this.date = d.getFullYear() + "/0" + (d.getMonth() + 1) + "/" + d.getDate();
          this.date2 = d.getFullYear() + "/0" + (d.getMonth() + 1) + "/" + d.getDate();
        }

      }
    }
  },
});
</script>
