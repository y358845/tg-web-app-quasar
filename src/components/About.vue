<template>
  <section class="about_container" id="About">
    <div class="about_bg_img">
      <img src="../assets/images/about/about_bg.png" alt="about_bg" />
    </div>
    <div class="position_images">
      <img class="position_img small_box" src="../assets/images/about/small_box.svg" alt="" />
      <img class="position_img big_box" src="../assets/images/about/big_box.svg" alt="" />
    </div>
    <div class="main_container ">
      <title-component>О нас</title-component>
      <div class="about_in_wrapper">
        <div class="about_in_wrapper_left ">
          <p class="description">
            Департамент ЦР и ИТ создан на основании решения
            ученого совета Университета от 12 июня 2022г. утвержденного приказом
            ректора № 341 от 20 июня 2022г г. Основная цель оДепартамента ЦР и ИТ заключается в совершенствовании и
            внедрении современных информационных технологий в различных сферах
            управления Университета.
          </p>
          <!-- <button class="connection_btn" @click="formConnection = true">
            <span>связаться с нами</span>
          </button> -->
        </div>
        <div class="about_in_wrapper_right ">
          <img src="../assets/images/about/card_img.png" alt="card_img" />
        </div>

      </div>

      <connectionbtn @click="formConnection = true" id="Project" />

    </div>

    <ConnectionForm @close="closeConnection" :formConnection="formConnection" />


  </section>
</template>
<script>
import ConnectionForm from "../components/ConnectionForm";

export default {
  components: {
    ConnectionForm,
    "title-component": require("components/UI/Title.vue").default,
    "connectionbtn": require("components/ConnectionBtn.vue").default,
  },
  data() {
    return {
      formConnection: false,
    };
  },
  methods: {
    closeConnection() {
      this.formConnection = false;
    },
  },
};
</script>

<style lang="scss">
.titles {
  margin-bottom: 50px;
}

.about_container {
  position: relative;
  padding: 153px 0 60px;

  .about_bg_img {
    position: absolute;
    top: 230px;
    left: 0;
  }

  .position_images {
    .small_box {
      height: 86.63px;
      position: absolute;
      top: 190px;
      left: 180px;
    }

    .big_box {
      height: 152px;
      position: absolute;
      bottom: 190px;
      right: -64px;
    }
  }

  .main_container {
    max-width: 1210px;
    padding: 0 20px;
    margin: 0 auto;
    position: relative;



    .about_in_wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .about_in_wrapper_left {
        .description {
          max-width: 430px;
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          color: #232323;
          margin: 93px 0 30px;
        }

        .connection_btn {
          max-width: 369.8px;
          width: 100%;
          display: block;
          background: #037798;
          border-radius: 5px;
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 500;
          font-size: 17px;
          line-height: 142.7%;
          text-align: center;
          letter-spacing: 0.38em;
          color: #ffffff;
          border: 0;
          padding: 40px 0;
          cursor: pointer;
          margin-bottom: 25px;
        }
      }

      .about_in_wrapper_right {
        img {
          height: 700.72px;
          margin-right: -90px;
          margin-top: -30px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .about_container {
    padding: 108px 0 94px;

    .position_images {
      .small_box {
        height: 37.26px;
        top: -10px;
        left: 0;
      }

      .big_box {
        height: 29px;
        right: 0;
        bottom: 100px;
      }
    }

    .main_container {
      .about_in_wrapper {
        grid-template-columns: repeat(1, 1fr);

        .about_in_wrapper_left {
          .description {
            max-width: 100%;
            margin: 20px 0;
            font-size: 12px;
            line-height: 182.2%;

            img {
              height: 29px;
              right: 10px;
            }
          }

          .connection_btn {
            max-width: 215.69px;
            margin: 0 auto;
            padding: 22px 0;
            font-size: 12px;
            line-height: 142.7%;
            margin-bottom: 15px;
          }
        }

        .about_in_wrapper_right {
          img {
            width: 135%;
            transform: translateX(-12.4%);
            height: auto;
          }
        }
      }
    }
  }
}
</style>
