<template>
  <section class="our_structure" v-if="structuraList.length > 0">
    <title-component class="q-mb-xl ">Наша структура</title-component>

    <div class="our_structure_card">

      <div v-for="item of filteredStructureOne('1')" :key="item.id" class="card_item animation_left">
        <div class="card_item_in">
          <button class="modal_btn" @click="openModalForm(findStructure(item.title))">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.00006 2C4.68635 2 2.00006 4.68629 2.00006 8C2.00006 11.3137 4.68635 14 8.00006 14C11.3138 14 14.0001 11.3137 14.0001 8C14.0001 4.68629 11.3138 2 8.00006 2ZM0.500061 8C0.500061 3.85786 3.85793 0.5 8.00006 0.5C12.1422 0.5 15.5001 3.85786 15.5001 8C15.5001 12.1421 12.1422 15.5 8.00006 15.5C3.85793 15.5 0.500061 12.1421 0.500061 8Z"
                fill="#00A9AA" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.00006 6.5C8.41427 6.5 8.75006 6.83579 8.75006 7.25V11.75C8.75006 12.1642 8.41427 12.5 8.00006 12.5C7.58585 12.5 7.25006 12.1642 7.25006 11.75V7.25C7.25006 6.83579 7.58585 6.5 8.00006 6.5Z"
                fill="#00A9AA" />
              <path
                d="M9.12506 4.625C9.12506 5.24632 8.62138 5.75 8.00006 5.75C7.37874 5.75 6.87506 5.24632 6.87506 4.625C6.87506 4.00368 7.37874 3.5 8.00006 3.5C8.62138 3.5 9.12506 4.00368 9.12506 4.625Z"
                fill="#00A9AA" />
            </svg>
          </button>
          <img class="card_img" src="../assets/images/our_structure/card_img.png" alt="" />
          <p class="description">{{ item.title }}</p>
          <a class="phone card_link" href="tel://+7777777777"><svg width="17" height="17" viewBox="0 0 17 17"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.89524 2.33223C1.65354 4.00352 1.41532 8.5172 4.96223 12.0641C8.50913 15.611 13.0228 15.3728 14.6941 15.1311V11.7112L11.1824 11.1259L10.6522 12.1863C10.5181 12.4545 10.244 12.6239 9.9441 12.6239V11.8322C9.9441 12.6239 9.94371 12.6239 9.94331 12.6239L9.94248 12.6239L9.94071 12.6239L9.93671 12.6239L9.92694 12.6238C9.91965 12.6236 9.91078 12.6234 9.90041 12.6231C9.87965 12.6224 9.85282 12.6212 9.82031 12.6191C9.75532 12.6147 9.66746 12.6066 9.56001 12.5912C9.34523 12.5605 9.05101 12.501 8.70417 12.3854C8.00774 12.1532 7.10602 11.6971 6.21764 10.8087C5.32926 9.92031 4.87312 9.0186 4.64098 8.32216C4.52536 7.97532 4.46581 7.6811 4.43513 7.46633C4.41978 7.35887 4.41161 7.27101 4.40728 7.20602C4.40511 7.17351 4.4039 7.14668 4.40323 7.12593C4.4029 7.11555 4.4027 7.10669 4.40258 7.09939L4.40246 7.08962L4.40244 7.08563L4.40244 7.08386L4.40243 7.08303C4.40243 7.08263 4.40243 7.08223 5.1941 7.08223H4.40243C4.40243 6.81754 4.53472 6.57035 4.75496 6.42353L6.59549 5.19651L5.44978 2.33223H1.89524ZM6.04407 7.46705L7.47377 6.51392C8.09676 6.0986 8.34365 5.30366 8.06558 4.60847L6.91987 1.7442C6.67942 1.14307 6.09722 0.748901 5.44978 0.748901H1.85388C1.13464 0.748901 0.457628 1.24857 0.339555 2.02895C0.0709345 3.80434 -0.294695 9.04636 3.84264 13.1837C7.97998 17.321 13.222 16.9554 14.9974 16.6868C15.7778 16.5687 16.2774 15.8917 16.2774 15.1725V11.7112C16.2774 10.9372 15.7179 10.2767 14.9544 10.1494L11.4427 9.56413C10.757 9.44986 10.077 9.79612 9.76619 10.4178L9.49188 10.9664C9.40566 10.9453 9.30942 10.9181 9.20486 10.8833C8.7138 10.7196 8.03218 10.3841 7.33723 9.68911C6.64227 8.99415 6.30675 8.31254 6.14306 7.82147C6.09883 7.68878 6.06698 7.56946 6.04407 7.46705Z"
                fill="white" />
            </svg>
            {{ item.tel }}</a>
          <a class="email card_link" href="mailto:rgmu.it@rostgmu.ru" target="_blank"><svg width="17" height="14"
              viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.444092 2.29643C0.444092 1.37595 1.15297 0.629761 2.02743 0.629761H14.6941C15.5685 0.629761 16.2774 1.37595 16.2774 2.29643V12.2964C16.2774 13.2169 15.5685 13.9631 14.6941 13.9631H2.02743C1.15298 13.9631 0.444092 13.2169 0.444092 12.2964V2.29643ZM3.22964 2.29643L8.36076 7.02245L13.4919 2.29643H3.22964ZM14.6941 3.40373L8.88207 8.75691C8.5836 9.03182 8.13792 9.03182 7.83944 8.75691L2.02743 3.40373V12.2964H14.6941V3.40373Z"
                fill="white" />
            </svg>
            {{ item.mail }}</a>
          <p class="lacation card_link">
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.36092 1.5942C3.73757 1.5942 1.61092 3.72084 1.61092 6.3442C1.61092 7.15793 1.89904 8.0675 2.38795 9.01038C2.87329 9.9464 3.5296 10.864 4.2012 11.6795C4.87086 12.4926 5.54273 13.1887 6.04804 13.682C6.16166 13.7929 6.2666 13.8933 6.36092 13.9823C6.45524 13.8933 6.56019 13.7929 6.6738 13.682C7.17911 13.1887 7.85098 12.4926 8.52064 11.6795C9.19224 10.864 9.84855 9.9464 10.3339 9.01038C10.8228 8.0675 11.1109 7.15793 11.1109 6.3442C11.1109 3.72084 8.98427 1.5942 6.36092 1.5942ZM6.36092 15.0525C5.84571 15.6536 5.84557 15.6535 5.84541 15.6533L5.84373 15.6519L5.83974 15.6485L5.82586 15.6364C5.81402 15.6262 5.79708 15.6114 5.77537 15.5923C5.73196 15.554 5.66945 15.4984 5.59057 15.4268C5.43287 15.2835 5.20939 15.076 4.94203 14.815C4.40827 14.2939 3.69473 13.5551 2.97898 12.686C2.26516 11.8192 1.53605 10.8071 0.982334 9.73921C0.432174 8.67819 0.0275879 7.50963 0.0275879 6.3442C0.0275879 2.84639 2.86312 0.0108643 6.36092 0.0108643C9.85872 0.0108643 12.6943 2.84639 12.6943 6.3442C12.6943 7.50963 12.2897 8.67819 11.7395 9.73921C11.1858 10.8071 10.4567 11.8192 9.74287 12.686C9.02711 13.5551 8.31357 14.2939 7.77981 14.815C7.51245 15.076 7.28897 15.2835 7.13127 15.4268C7.05239 15.4984 6.98989 15.554 6.94647 15.5923C6.92476 15.6114 6.90782 15.6262 6.89599 15.6364L6.8821 15.6485L6.87811 15.6519L6.87687 15.653C6.87671 15.6531 6.87613 15.6536 6.36092 15.0525ZM6.36092 15.0525L5.84541 15.6533C6.14188 15.9075 6.57966 15.9077 6.87613 15.6536L6.36092 15.0525ZM6.36092 4.76086C5.48647 4.76086 4.77759 5.46975 4.77759 6.3442C4.77759 7.21865 5.48647 7.92753 6.36092 7.92753C7.23537 7.92753 7.94425 7.21865 7.94425 6.3442C7.94425 5.46975 7.23537 4.76086 6.36092 4.76086ZM3.19425 6.3442C3.19425 4.5953 4.61202 3.17753 6.36092 3.17753C8.10982 3.17753 9.52759 4.5953 9.52759 6.3442C9.52759 8.0931 8.10982 9.51086 6.36092 9.51086C4.61202 9.51086 3.19425 8.0931 3.19425 6.3442Z"
                fill="white" />
            </svg>

            {{ item.adres }}
          </p>
        </div>
      </div>
      <div class="card_item_container">
        <div v-for="item of filteredStructureOne('2')" :key="item.id" class="card_item animation_center">
          <div class="card_item_in">
            <button class="modal_btn" @click="openModalForm(findStructure(item.title))">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.00006 2C4.68635 2 2.00006 4.68629 2.00006 8C2.00006 11.3137 4.68635 14 8.00006 14C11.3138 14 14.0001 11.3137 14.0001 8C14.0001 4.68629 11.3138 2 8.00006 2ZM0.500061 8C0.500061 3.85786 3.85793 0.5 8.00006 0.5C12.1422 0.5 15.5001 3.85786 15.5001 8C15.5001 12.1421 12.1422 15.5 8.00006 15.5C3.85793 15.5 0.500061 12.1421 0.500061 8Z"
                  fill="#00A9AA" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.00006 6.5C8.41427 6.5 8.75006 6.83579 8.75006 7.25V11.75C8.75006 12.1642 8.41427 12.5 8.00006 12.5C7.58585 12.5 7.25006 12.1642 7.25006 11.75V7.25C7.25006 6.83579 7.58585 6.5 8.00006 6.5Z"
                  fill="#00A9AA" />
                <path
                  d="M9.12506 4.625C9.12506 5.24632 8.62138 5.75 8.00006 5.75C7.37874 5.75 6.87506 5.24632 6.87506 4.625C6.87506 4.00368 7.37874 3.5 8.00006 3.5C8.62138 3.5 9.12506 4.00368 9.12506 4.625Z"
                  fill="#00A9AA" />
              </svg>
            </button>
            <p class="description_center">{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div class="card_item_container">
        <div v-for="item of filteredStructureOne('3')" :key="item.id" class="card_item animation_right">
          <div class="card_item_in">
            <button class="modal_btn" @click="openModalForm(findStructure(item.title))">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.00006 2C4.68635 2 2.00006 4.68629 2.00006 8C2.00006 11.3137 4.68635 14 8.00006 14C11.3138 14 14.0001 11.3137 14.0001 8C14.0001 4.68629 11.3138 2 8.00006 2ZM0.500061 8C0.500061 3.85786 3.85793 0.5 8.00006 0.5C12.1422 0.5 15.5001 3.85786 15.5001 8C15.5001 12.1421 12.1422 15.5 8.00006 15.5C3.85793 15.5 0.500061 12.1421 0.500061 8Z"
                  fill="#00A9AA" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.00006 6.5C8.41427 6.5 8.75006 6.83579 8.75006 7.25V11.75C8.75006 12.1642 8.41427 12.5 8.00006 12.5C7.58585 12.5 7.25006 12.1642 7.25006 11.75V7.25C7.25006 6.83579 7.58585 6.5 8.00006 6.5Z"
                  fill="#00A9AA" />
                <path
                  d="M9.12506 4.625C9.12506 5.24632 8.62138 5.75 8.00006 5.75C7.37874 5.75 6.87506 5.24632 6.87506 4.625C6.87506 4.00368 7.37874 3.5 8.00006 3.5C8.62138 3.5 9.12506 4.00368 9.12506 4.625Z"
                  fill="#00A9AA" />
              </svg>
            </button>
            <p class="description_center">{{ item.title }}</p>
          </div>
        </div>


      </div>
    </div>

    <q-dialog v-model="openForm" @close="openForm = false">
      <OurStructureModal :structEl="structEl" />
    </q-dialog>

  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { $authHost, $host } from "../http/index.js"

export default {
  data() {
    return {
      modal: false,
      openForm: false,
      structuraList: [],
      structEl: "",
      structure: [],
      val: "1"
    };
  },

  components: {
    "OurStructureModal": require("components/modal/OurStructureModal.vue").default,
    "title-component": require("components/UI/Title.vue").default,
  },
  methods: {
    ...mapActions("base", ["postQuery"]),
    filteredStructureOne(val) {
      return this.structuraList.filter((el) =>
        el.level === val
      )
    },
    openModalForm(val) {
      this.openForm = true;
      this.structEl = val;
    },
    findStructure(val) {
      return this.structuraList.find(el => el.title === val);
    }
  },

  async created() {
    await $host.get(`api/website/structura`).then((res) => {
      this.structuraList = res.data;
      console.log(res.data);
    });
  },
};
</script>

<style lang="scss" scoped>
.our_structure {
  max-width: 1210px;
  margin: 0 auto;
  padding: 123px 20px 0;
  position: relative;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    font-family: $Montserrat-Regular;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 142.7%;
    color: #232323;

    img {
      margin-right: 17px;
    }
  }

  .our_structure_card {
    height: 616.01px;
    display: flex;
    justify-content: space-between;

    .card_item {
      max-width: 270px;
      width: 100%;
      height: 100%;
      background: #ffffff;
      box-shadow: 0px 2px 10px rgba(41, 179, 209, 0.1);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 14.8px 12.58px;

      &:hover {
        box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
      }

      .card_item_in {
        height: 100%;
        background: rgba(14, 173, 176, 0.3);
        border-radius: 7px;
        padding: 21px 11.6px;
        position: relative;


        .modal_btn {
          background: transparent;
          margin: 6px 6px 0 0;
          border: 0;
          cursor: pointer;
          float: right;
          position: absolute;
          top: 0;
          right: 0;

          svg {
            transition: 0.3s;

            &:hover {
              path {
                fill: #ffffff;
              }
            }
          }
        }

        .card_img {
          transform: translateX(-15%);
        }

        .description {
          font-family: $Montserrat-Medium;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 142.7%;
          text-align: center;
          text-transform: uppercase;
          color: #232323;
          padding-bottom: 16px;
          border-bottom: 2px solid #ffffff;
          margin-bottom: 37px;
        }

        .card_link {
          display: block;
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 142.7%;
          color: #232323;
          text-decoration: none;
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          svg {
            margin-right: 13.5px;
          }
        }
      }
    }

    .card_item_container {
      max-width: 370px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 34.2px;
      position: relative;

      &:nth-child(2) {
        max-width: 270px;
        width: 100%;
        height: 100%;

        .card_item {
          position: relative;

          &:first-child {
            position: relative;
            // &::after {
            //   content: "";
            //   width: 21px;
            //   height: 0;
            //   border: 1px solid #09accb;
            //   position: absolute;
            //   top: 0;
            //   bottom: 0;
            //   margin: auto 0;
            //   right: -55px;
            //   z-index: 1;
            // }
          }
        }
      }

      &:last-child {
        &::before {
          content: "";
          width: 22px;
          height: 0;
          border: 1px solid #09accb;
          position: absolute;
          top: 120px;
          margin: auto 0;
          left: -120px;
          z-index: 1;
        }

        &::after {
          content: "";
          width: 0;
          height: 656.85px;
          border: 1px solid #09accb;
          position: absolute;
          top: 165px;
          bottom: 0;
          margin: auto 0;
          left: -82px;
          z-index: 1;
        }

        .card_item {
          max-width: 370px;
          width: 100%;
          height: 100%;

          .card_item_in {
            padding: 13.5px 0;

            &::after {
              content: "";
              width: 50px;
              left: -78px;
            }
          }
        }
      }

      .card_item {
        max-width: 370px;
        width: 100%;
        height: 100%;

        .card_item_in {
          max-width: 370px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &::after {
            content: "";
            width: 70px;
            height: 0;
            border: 1px solid #09accb;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            left: -112px;
            z-index: 1;
          }

          .description_center {
            width: 100%;
            max-width: 221.82px;
            font-family: $Montserrat-Medium;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 142.7%;
            text-align: center;
            color: #232323;
          }
        }
      }
    }
  }

}

@media (max-width: 1200px) {
  .our_structure {
    .our_structure_card {
      .card_item_container {
        max-width: 270px;

        &:last-child {
          &::before {
            left: -77px;
          }

          &::after {
            left: -56px;
          }

          .card_item {
            .card_item_in {
              &::after {
                content: "";
                width: 40px;
                left: -68px;
              }
            }
          }
        }

        .card_item {
          .card_item_in {
            &::after {
              width: 30px;
              left: -72px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1115px) {
  .our_structure {
    .our_structure_card {
      .card_item_container {
        &:last-child {
          &::before {
            left: -70px;
          }

          &::after {
            left: -44px;
          }

          .card_item {
            .card_item_in {
              &::after {
                content: "";
                width: 30px;
                left: -51px;
              }
            }
          }
        }

        .card_item {
          .card_item_in {
            &::after {
              width: 30px;
              left: -72px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .our_structure {
    padding-top: 0;
    background: url("../assets/images/our_structure/our_structure_mob_bg.png") no-repeat;

    .title {
      font-size: 24px;
      line-height: 142.7%;
      margin-bottom: 40px;

      img {
        height: 9.98px;
      }
    }

    .our_structure_card {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      height: auto;
      gap: 30px;

      .card_item {
        width: 100%;
        max-width: 100%;
        padding: 10px;

        .card_item_in {
          .card_img {
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
            float: center;
            transform: translateX(0);
          }

          .modal_btn {
            height: 13px;

            svg {
              height: 100%;
            }
          }

          .description {
            margin-bottom: 17px;
            padding-bottom: 17px;
            font-size: 16px;
            line-height: 142.7%;
          }

          .card_link {
            font-weight: 400;
            font-size: 12px;
            line-height: 142.7%;
            margin-bottom: 10px;
          }
        }
      }

      .card_item_container {
        max-width: 100%;
        width: 100%;
        justify-content: flex-end;
        align-items: flex-end;

        &:nth-child(2) {
          max-width: 100%;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;

          .card_item {
            max-width: 100%;
            min-height: 100%;

            .card_item_in {
              max-width: 100%;
              height: 100%;

              &::after {
                width: 15.27px;
                top: -25px;
                left: 0;
                right: 0;
                margin: 0 auto;
                transform: rotate(90deg);
              }

              .description_center {
                font-weight: 500;
                font-size: 12px;
                line-height: 142.7%;
              }
            }
          }
        }

        &:last-child {
          padding-left: 94px;

          &::before {
            display: none;
          }

          &::after {
            height: 473px;
            top: -0px;
            left: 40px;
          }

          .card_item {
            max-width: 100%;
            width: 100%;
            height: 85px;
            align-items: flex-end;

            .card_item_in {
              max-width: 100%;
              width: 100%;
              height: 100%;

              &::after {
                content: "";
                width: 15.98px;
                left: -58px;
              }

              .description_center {
                font-weight: 400;
                font-size: 12px;
                line-height: 142.7%;
                padding: 0 23px;
              }
            }
          }
        }

        .card_item {
          height: 100%;

          .card_item_in {
            &::after {
              width: 30px;
              left: 0;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .our_structure {
    .our_structure_modal {
      padding: 0 22px;
      background: transparent;

      .our_structure_modal_in {
        flex-direction: column;
        align-items: flex-start;
        padding: 17px 24px;
      }
    }
  }
}

.q-body--fullscreen-mixin,
.q-body--prevent-scroll {
  position: important;
}
</style>
