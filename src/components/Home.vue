<template>
  <section class="home_container">
    <div class="home">
      <div class="position_images">
        <a href="https://1c.rostgmu-uit.ru:4443/uit/ru_RU/" target="_blank"><img class="position_img box1"
            src="../assets/images/home/box1.svg" alt="box1" /><q-tooltip class="bg-primary text-body2"
            :offset="[10, 10]" transition-show="scale" transition-hide="scale">
            1С: УИТ
          </q-tooltip></a>
        <img class="position_img box2" src="../assets/images/home/box2.svg" alt="box1" />
        <!-- <img class="position_img circle" src="../assets/images/home/circle.svg" alt="box1" /> -->
      </div>
      <div class="home_left ">
        <h1 class="title ">
          Мы рады приветствовать вас <br><span>на нашем новом сайте!</span>
        </h1>
        <p class="description">
          Основная цель Департамента ЦР и ИТ заключается в
          совершенствовании и внедрении современных информационных технологий в
          различных сферах управления ФГБОУ ВО РостГМУ Минздрава России
        </p>
        <connectionbtn @click="formConnection = true" />
      </div>
      <div class="home_right ">
        <img src="../assets/images/home/home_right.png" alt="" />
        <img class="position_img box1" src="../assets/images/home/box1.svg" alt="box1" />
      </div>
      <div class="home_right_bg">
        <img src="../assets/images/home/home_right_bg.png" alt="" />
      </div>
    </div>
    <ConnectionForm @close="closeConnection" :formConnection="formConnection" />
  </section>
</template>

<script>
import ConnectionForm from "../components/ConnectionForm";
export default {
  components: {
    ConnectionForm,
  },
  data() {
    return {
      formConnection: false,
      checkbox: false,
    };
  },
  methods: {

    absoluteImg() {
      const position_img = document.querySelectorAll(".position_img");
      window.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;

        position_img.forEach((img) => {
          img.style.transform =
            "translate(" + x / 50 + "px" + "," + y / 50 + "px" + ")";
        });
      });
    },
    checkboxbtn() {
      document.querySelector(".checkbox_in").click();
      this.checkbox = !this.checkbox;
    },
    closeConnection() {
      this.formConnection = false;
    },
  },

  components: {
    ConnectionForm,
    "connectionbtn": require("components/ConnectionBtn.vue").default,
  },
  mounted() {
    this.absoluteImg();
  },
};
</script>
<style lang="scss">
.home_container {
  position: relative;

  .home {
    max-width: 1210px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .home_left {
      max-width: 719.33px;
      position: relative;
      z-index: 5;
      padding: 276px 0 131px;

      .title {
        font-family: $Montserrat-Bold;
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 54px;
        color: #232323;
        margin-bottom: 12px;

        span {
          font-weight: 400;
          font-family: $Montserrat-Regular;
        }
      }

      .description {
        max-width: 622.02px;
        font-family: $Gilroy-Regular;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 135%;
        color: #232323;
        margin-bottom: 70px;
      }


    }

    .home_right {
      position: absolute;
      top: 195px;
      right: 58px;
      z-index: 2;

      .box1 {
        display: none;
      }
    }

    .home_right_bg {
      position: absolute;
      top: -100px;
      right: -346px;

      img {
        height: 900.99px;
      }
    }

    .position_images {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      margin: 0 auto;

      .box1 {
        height: 53px;
        position: absolute;
        top: 140px;
        right: 263px;
        z-index: 5;
      }

      .box2 {
        height: 89px;
        position: absolute;
        bottom: 261px;
        left: 82px;
      }

      .circle {
        height: 46px;
        position: absolute;
        bottom: 105px;
        left: 174px;
      }
    }
  }


}

@media (max-width: 992px) {
  .home_container {
    .home {
      overflow: hidden;
      flex-direction: column;

      .home_left {
        max-width: 100%;
        width: 100%;
        padding: 118px 0 34px;

        .title {
          font-size: 22px;
          line-height: 27px;

          span {
            display: block;
          }
        }

        .description {
          font-size: 14px;
          line-height: 135%;
          margin-bottom: 32px;
        }

        .connection_btn {
          font-size: 12px;
          line-height: 142.7%;
          padding: 22px 0;
          width: 215.69px;
        }
      }

      .home_right {
        position: relative;
        top: 0;
        left: 20px;

        img {
          width: 100%;
        }
      }
    }
  }

}
</style>
