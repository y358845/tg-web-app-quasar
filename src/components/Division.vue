<template>
  <section class="division">
    <div class="main_container">
      <title-component>Наша история</title-component>

      <div class="division_card">
        <div class="card_item" v-for="item of items" :key="item.id">
          <div class="card_item_top">
            <h1 class="number">{{ item.num }}</h1>
            <img src="../assets/images/next_icon.svg" alt="next_icon" />
          </div>
          <p class="description">
            {{ item.des }}
          </p>
        </div>
      </div>
      <!-- <button class="connection_btn" @click="formConnection = true">
        <span>связаться с нами</span>
      </button> -->
    </div>
    <div class="position_images">
      <img class="position_img" src="../assets/images/box_plasti.svg" alt="" />
    </div>
    <!-- <ConnectionForm @close="closeConnection" :formConnection="formConnection" /> -->
  </section>
</template>

<script>
import ConnectionForm from "../components/ConnectionForm";

export default {
  components: {
    ConnectionForm,
    "title-component": require("components/UI/Title.vue").default,
  },
  data() {
    return {
      formConnection: false,
      items: [
        {
          id: 1,
          num: "01",
          des: "В 2010 году создан отдел информацинно-технического обеспечения управленческой деятельности",
        },
        {
          id: 2,
          num: "02",
          des: " На основании решения ученого совета Университета от 12 июня 2017 утвержденного приказом ректора № 341 от 20 июня 2017 г создано Управление информационных технологий",
        },
        {
          id: 3,
          num: "03",
          des: "В 2017 году в состав управления вошел  сектор ТСО",
        },
        {
          id: 4,
          num: "04",
          des: "В 2022 году создан Департамент цифрового развития и информационных технологий объединивший в себе все подразделения Управления ИТ",
        },

      ],
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

.division {
  padding: 150px 0;
  position: relative;

  .position_images {
    .position_img {
      position: absolute;
      right: 0;
      bottom: 102px;
      filter: blur(11.5px);
      transform: matrix(-0.14, 0.99, 0.99, 0.14, 0, 0);
    }
  }

  .main_container {
    max-width: 1210px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 4;



    .division_card {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      margin-bottom: 18px;

      .card_item {
        .card_item_top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: $Montserrat-Bold;
          font-style: normal;
          font-weight: 700;
          font-size: 80px;
          line-height: 142.7%;
          color: #ffffff;
          text-shadow: 0px 4px 26px rgba(41, 179, 209, 0.2);
        }

        .description {
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 142.7%;
          color: #232323;
          min-height: 110.37px;
        }
      }
    }

    .connection_btn {
      max-width: 369.8px;
      width: 100%;
      margin: 0 auto;
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
      padding: 40px 0;
      color: #ffffff;
      border: 0;
      cursor: pointer;
    }
  }
}

@media (max-width: 1100px) {
  .division {
    .main_container {
      .division_card {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 20px;

        .card_item {
          .card_item_top {
            img {
              transform: rotateY(180deg);
            }
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .division {
    padding: 90px 0 102px;

    .main_container {

      .division_card {
        .card_item {
          &:last-child {
            margin-bottom: 50px;
          }

          .card_item_top {
            font-size: 80px;
            line-height: 142.7%;
          }

          .description {
            max-width: 220.73px;
            font-size: 16px;
            line-height: 142.7%;
            min-height: auto;
          }
        }
      }

      .connection_btn {
        max-width: 215.69px;
        font-size: 12px;
        line-height: 142.7%;
        margin-bottom: 19px;
        padding: 22px 0;
      }
    }
  }
}

@media (max-width: 576px) {
  .division {
    .main_container {
      .division_card {
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;

        .card_item {
          padding-right: 50px;

          &:nth-child(2n) {
            padding-left: 50px;
            padding-right: 0;
          }
        }
      }
    }
  }
}
</style>
