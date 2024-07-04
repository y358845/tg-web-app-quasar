<template>
  <div class="connection_form" :class="formConnection ? 'connection_form_active' : ''">
    <div class="connection_form_in">
      <img @click="$emit('close')" class="close" src="../assets/images/close.svg" alt="close" />
      <h2 class="title">Связаться с нами</h2>
      <p class="description">
        Постараемся связаться с вами как можно скорее
        <br />
        <br />
      </p>

      <form @submit.prevent="submitForm">

        <div class="q-pa-md form-small">

          <q-input type="text" class="q-mb-md" ref="nameRef" bg-color="white" filled v-model="name" label="Ваше имя"
            lazy-rules :rules="nameRules">
            <template v-slot:prepend>
              <q-icon>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2ZM3 6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6C15 9.31371 12.3137 12 9 12C5.68629 12 3 9.31371 3 6ZM5 16C3.34315 16 2 17.3431 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.2386 2.23858 14 5 14H13C15.7614 14 18 16.2386 18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 17.3431 14.6569 16 13 16H5Z"
                    fill="#999999" />
                </svg>
              </q-icon>
            </template>
          </q-input>

          <q-input type="text" class="q-mb-md" ref="telRef" bg-color="white" filled v-model="tel" label="Ваш телефон"
            azy-rules :rules="telRules">
            <template v-slot:prepend>
              <q-icon>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.83319 2C2.52788 4.1111 2.22697 9.81259 6.70727 14.2929C11.1876 18.7732 16.8891 18.4723 19.0002 18.167V13.8471L14.5643 13.1078L13.8946 14.4472C13.7252 14.786 13.3789 15 13.0002 15V14C13.0002 15 12.9997 15 12.9992 15L12.9981 15L12.9959 15L12.9908 15L12.9785 14.9998C12.9693 14.9997 12.9581 14.9994 12.945 14.999C12.9188 14.9981 12.8849 14.9966 12.8438 14.9939C12.7617 14.9884 12.6507 14.9781 12.515 14.9587C12.2437 14.9199 11.8721 14.8447 11.4339 14.6987C10.5542 14.4054 9.41522 13.8293 8.29306 12.7071C7.1709 11.5849 6.59472 10.4459 6.30148 9.56623C6.15544 9.12811 6.08022 8.75646 6.04147 8.48517C6.02208 8.34944 6.01176 8.23846 6.00629 8.15636C6.00355 8.1153 6.00202 8.0814 6.00117 8.05519C6.00075 8.04208 6.0005 8.03089 6.00035 8.02167L6.0002 8.00933L6.00017 8.00429L6.00017 8.00205L6.00017 8.001C6.00016 8.0005 6.00016 8 7.00016 8H6.00016C6.00016 7.66565 6.16727 7.35342 6.44546 7.16795L8.77034 5.61803L7.32313 2H2.83319ZM8.07381 8.48609L9.87974 7.28213C10.6667 6.75751 10.9785 5.75338 10.6273 4.87525L9.18009 1.25722C8.87636 0.497902 8.14094 0 7.32313 0H2.78094C1.87243 0 1.01725 0.631162 0.868108 1.6169C0.528798 3.8595 0.0669503 10.481 5.29306 15.7071C10.5192 20.9332 17.1407 20.4714 19.3833 20.1321C20.369 19.9829 21.0002 19.1277 21.0002 18.2192V13.8471C21.0002 12.8694 20.2933 12.0351 19.329 11.8743L14.8931 11.135C14.027 10.9907 13.1681 11.4281 12.7754 12.2134L12.4289 12.9064C12.32 12.8796 12.1985 12.8453 12.0664 12.8013C11.4461 12.5946 10.5851 12.1707 9.70727 11.2929C8.82943 10.4151 8.40561 9.55407 8.19885 8.93377C8.14298 8.76616 8.10275 8.61545 8.07381 8.48609Z"
                    fill="#999999" />
                </svg>
              </q-icon>
            </template>
          </q-input>

          <q-input type="email" class="q-mb-md" ref="emailRef" bg-color="white" filled v-model="email"
            label="Ваша почта" lazy-rules :rules="emailRules">
            <template v-slot:prepend>
              <q-icon>
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#999999"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#999999" stroke-width="2"
                    stroke-linecap="round" />
                </svg>
              </q-icon>
            </template>
          </q-input>


          <q-input type="textarea" class="q-mb-md" ref="titleRef" bg-color="white" filled v-model="problem"
            label="Ваше сообщение" lazy-rules :rules="titleRules">
            <template v-slot:prepend>

            </template>
          </q-input>
          <button class="connection_btn"><span>Связаться с нами</span></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { mapActions, mapState } from "vuex";
export default {
  props: {
    formConnection: {
      type: Array,
    },
  },
  data() {
    return {
      nameRef: null,
      nameRules: [
        (val) => (val && val.length > 0) || "Заполните имя",
      ],
      telRef: null,
      telRules: [
        (val) => (val && val.length > 0) || "Заполните телефон",
      ],
      emailRef: null,
      emailRules: [
        (val) => (val && val.length > 0) || "Заполните почту",
      ],
      titleRef: null,
      titleRules: [
        (val) => (val && val.length > 0) || "Заполните обращение",
      ],
      problem: "",
      tel: "",
      email: "",
      answer: '',
      name: "",

      test: ''
    };
  },
  computed: {
    ...mapState("base", ["answer"]),
  },
  methods: {
    ...mapActions("base", ["saveData"]),

    async submitForm() {

      let payload = {
        idsotr: "000005859",
        problem: `Имя: ${this.name}; Текст сообщения: ${this.problem}`,
        tel: ` Телефон: ${this.tel} Email: ${this.email}`,
        url: "tasks/task",
        nameMethod: "api/tg/post_request_1C",
        nameState: "setAnswer",
      }

      this.$refs.nameRef.validate();
      this.$refs.telRef.validate();
      this.$refs.emailRef.validate();
      this.$refs.titleRef.validate();

      if (this.$refs.nameRef.hasError || this.$refs.telRef.hasError || this.$refs.emailRef.hasError || this.$refs.titleRef.hasError) {
        this.$q.notify({
          color: "red",
          type: "negative",
          message: "Заполните все поля!",
        })
      } else {
        this.saveData(payload).then((answer) => {
          this.$q.notify({
            message: `Создано обращение №: ${answer}`,
            type: "positive",

            actions: [
              {
                label: "Закрыть",
                color: "white",
                handler: () => {
                },
              },
            ],
          });
          this.problem = "",
            this.tel = "",
            this.email = "",
            this.answer = "",
            this.name = ""
        }).catch((err) => {
          console.log(err)
        })
      }


    }
  },

};
</script>

<style lang="scss">
.form-small {
  width: 410px;
}

.connection_form {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  opacity: 0;
  transition: 0.9s;

  .connection_form_in {
    max-width: 570px;
    margin: 0 auto;
    width: 100%;
    background: url("../assets/images/home/connection_form_bg.png") no-repeat center;
    background-size: cover;
    backdrop-filter: blur(9.5px);
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 65px 24px 70px;

    .close {
      position: absolute;
      top: 14px;
      right: 14px;
      cursor: pointer;
    }

    .title {
      font-family: $Montserrat-Regular;
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 32px;
      text-align: center;
      text-transform: uppercase;
      color: #323232;
      margin-bottom: 16px;
    }

    .description {
      font-family: $Gilroy-Regular;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #323232;
      margin-bottom: 10px;
    }

    form {
      .fotm_controller {
        max-width: 410px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #ffffff;
        border-radius: 5px;
        height: 53px;
        margin-bottom: 27px;

        label {
          padding: 0 18px;
        }

        input {
          width: 100%;
          height: 100%;
          font-family: $Montserrat-Regular;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #666666;
          border: 0;
          outline: 0;

          &:focus {
            border: 0;
            outline: 0;
          }
        }
      }

      .from_textarea {
        max-width: 410px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 5px;
        margin-bottom: 26px;

        textarea {
          width: 100%;
          max-height: 100px;
          border: 0;
          padding: 17px;
          font-family: $Montserrat-Regular;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #666666;
          resize: none;

          &:focus {
            border: 0;
            outline: 0;
          }
        }
      }

      .connection_btn {
        max-width: 410px;
        width: 100%;
        margin: 0 auto;
        font-family: $Montserrat-Regular;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
        padding: 17px 0;
        margin-bottom: 25px;
      }

      .checkbox_in {
        display: none;
      }

      .checkbox {
        max-width: 410px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        font-family: $Montserrat-Regular;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #434343;
        cursor: pointer;

        .checkbox_input {
          width: 21px;
          height: 21px;
          min-width: 21px;
          min-height: 21px;
          background: #ffffff;
          border-radius: 3px;
          margin-right: 21px;
          display: flex;
          align-items: center;
          justify-content: center;

          .checkbox_icon {
            display: none;
            align-items: center;
            justify-content: center;
          }

          .checkbox_icon_active {
            display: flex;
          }
        }
      }
    }
  }
}

.connection_form_active {
  z-index: 1100;
  opacity: 1;
}

@media (max-width: 500px) {

  .form-small {
    width: 310px;
  }

  .connection_form {
    .connection_form_in {
      padding: 32px 22px 25px;

      .close {
        position: absolute;
        top: 14px;
        right: 14px;
        cursor: pointer;
      }

      .title {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 14px;
      }

      .description {
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 21px;

        br {
          display: none;
        }
      }

      form {
        .fotm_controller {
          margin-bottom: 17px;

          label {
            padding: 0 18px;
          }

          input {
            font-size: 14px;
            line-height: 17px;
          }
        }

        .from_textarea {
          margin-bottom: 26px;

          textarea {
            font-size: 14px;
            line-height: 17px;
            height: 85px;
          }
        }

        .connection_btn {
          font-size: 14px;
          line-height: 17px;
          margin-bottom: 19px;
        }

        .checkbox_in {
          display: none;
        }

        .checkbox {
          align-items: start;
          font-size: 10px;
          line-height: 12px;

          .checkbox_input {
            width: 17px;
            height: 17px;
            min-width: 17px;
            min-height: 17px;
            margin-right: 7px;
            display: flex;
            align-items: center;
            justify-content: center;

            .checkbox_icon {
              display: none;
              align-items: center;
              justify-content: center;
            }

            .checkbox_icon_active {
              display: flex;
            }
          }
        }
      }
    }
  }

}
</style>
