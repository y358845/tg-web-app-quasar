<template>
  <div class="">
    <q-bar class="bg-primary" style="height: 60px">

      <div class="text-white">Департамент ЦР и ИТ: {{ userLogin.email }}</div>

      <q-space />

      <q-btn class="q-pl-none text-white" to="/auth" flat icon-right="login"
        @click="logOut"><q-tooltip>Выйти</q-tooltip></q-btn>
    </q-bar>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md absolute-center" style="width: 400px">
      <div v-if="!loggedIn" class="q-gutter-md">
        <q-input outlined v-model="login" label="Имя пользователя" hint="Введите имя пользователя" dense />

        <q-input outlined type="password" v-model="password" label="Пароль" hint="Введите пароль" dense />
        <div>
          <q-btn label="Войти" type="submit" color="primary" />
        </div>
      </div>

      <div v-if="loggedIn" class="q-pa-md" style="max-width: 350px">

        <q-list bordered separator>

          <q-toolbar class="bg-primary text-white shadow-2">
            <q-toolbar-title>Обновить блоки сайта:</q-toolbar-title>
          </q-toolbar>

          <q-item v-for="item of sections" :key="item.label" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="done" />
            </q-item-section>
            <q-item-section>
              <q-btn color="primary" @click="updateSection(item.method)">{{
                item.label }}</q-btn>
            </q-item-section>
          </q-item>

        </q-list>

      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapState } from "vuex";


export default {
  data() {
    return {
      login: ref(null),
      password: ref(null),
      sections: [
        { label: "Структура", method: '/structura' },
        { label: "Портфолио", method: '/portfolio' },
        { label: "Наша команда", method: '/team' },
        { label: "Новости", method: '/news' },
        { label: "Контакты", method: '/contacts' },
      ],

    };
  },
  computed: {
    ...mapState("base", ["userLogin", "loggedIn"]),
  },
  methods: {
    ...mapActions("base", ["loginUser", "saveData"]),
    /** метод вызывающий метод вторизации из vuex(loginUser), входящие параметры - значения инпутов логин и пароль из формы. Возвращает jwt токен*/
    async onSubmit() {
      this.loginUser({ email: this.login, password: this.password });
    },

    /** метод вызывает метод из vuex(saveData) который обновлеет  сецию чье имя аргумент(url), на сервер идет запрос к методу делающему запрос в базу 1С и его результат записывающему в теблицу Postgres*/
    updateSection(url) {
      this.saveData({ nameMethod: `api/website${url}` })
    },

  },
};

</script>
<style>
.q-item__section--avatar {
  min-width: 10px;
}
</style>
