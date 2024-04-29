<template>
  <section class="our_portfolio ">
    <div class="main_container">
      <title-component>Наше портфолио</title-component>
      <p class="description">
        За время работы нашего подразделения мы разработали проекты в различных
        направлениях и сферах деятельности нашего ВУЗа. С некоторыми из них вы
        можете ознакомится ниже:
      </p>
      <swiper class="swiper_container" :navigation="{
        prevEl: prev,
        nextEl: next,
      }" :modules="modules" :loop="false" :breakpoints="{
        '@0.00': {
          slidesPerView: 1.1,
          spaceBetween: 18,
        },
        '650': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }">
        <swiper-slide class="slider_item" v-for="item of portfolioList" :key="item.id">
          <div>
            <h2 class="swiper_title">
              <img src="../assets/images/portfolio/Checkbox.png" alt="Checkbox" />
              {{ item.title }}
            </h2>
            <p class="swiper_description">{{ item.description }}</p>
          </div>
          <div class="more_btn_wrapper " id="Ourteam">
            <button class="more_btn" @click="getPortfolioElement(item)">Узнать больше</button>
          </div>
        </swiper-slide>
      </swiper>

      <div class="swiper_buttons">
        <button ref="prev" class="prev_btn">
          <img src="../assets/images/portfolio/prev.svg" alt />
        </button>
        <button ref="next" class="next_btn">
          <img src="../assets/images/portfolio/next.svg" alt />
        </button>
      </div>
      <div class="swiper_modal" :class="portfoliomodal ? 'swiper_modal_active' : ''">
        <div class="swiper_modal_content">
          <button class="close_modal" @click="portfoliomodal = false">
            <img src="../assets/images/close.svg" alt="close" />
          </button>
          <h2 class="modal_title">{{ modalData.title }}</h2>
          <p class="modal_description">{{ modalData.description }}</p>
          <div class="swiper_modal_in_container">
            <div class="swiper_modal_in">
              <div class="item" v-for="(item) of  portfolioListElenment " :key="item">
                <h3 v-if="item.type === 'Абзац'" class="swiper_modal_in__title">{{ item.description }}</h3>
                <ul>
                  <li v-if="item.type === 'Текст'">{{ item.description }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { mapActions, mapState } from "vuex";
import { $authHost, $host } from "../http/index.js"
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    "title-component": require("components/UI/Title.vue").default
  },
  data() {
    return {
      portfolioListElenment: '',
      portfolioList: '',
      portfoliomodal: false,
      modalData: {}
    };
  },

  methods: {
    ...mapActions("base", ["postQuery"]),
    moreportfolio(id) {
      this.modalData = this.portfolioList.find(item => item.id == id);
      this.portfoliomodal = true;
    },
    getPortfolioElement(item) {
      this.portfolioListElenment = item.tab
      this.portfoliomodal = true;
      this.modalData = item;
    }
  },

  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next
    };
  },
  async created() {
    await $host.get(`api/website/portfolio`).then((res) => {
      this.portfolioList = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.titles {
  margin-bottom: 50px;
}

.our_portfolio .main_container .swiper_modal .swiper_modal_in_container .swiper_modal_in .item[data-v-5aeb1ce8] {
  margin-bottom: 0px;
}

.our_portfolio .main_container .swiper_modal .swiper_modal_in_container .swiper_modal_in .item ul[data-v-5aeb1ce8] {
  margin-top: 0px;
  margin-bottom: 0px;
}

.our_portfolio {
  position: relative;
  padding-bottom: 80px;

  .main_container {
    max-width: 1210px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: $Montserrat-Medium;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 142.7%;
      color: #232323;
      margin-bottom: 20px;

      img {
        height: 29.52px;
        margin-right: 18px;
      }
    }

    .description {

      max-width: 970.85px;
      margin: 0 auto;
      font-family: $Gilroy-Regular;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 142.7%;
      text-align: center;
      color: #232323;
      margin-bottom: 50px;
    }

    .swiper_container {
      height: 100%;
      align-items: center !important;

      .swiper-slide {
        height: 100% !important;
        max-height: 100% !important;
        min-height: 370px;
        border-bottom: 1px solid #00a9aa;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
      }

      .swiper_title {
        display: flex;
        align-items: center;
        font-family: $Montserrat-Medium;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 142.7%;
        color: #037798;
        margin-bottom: 30px;

        img {
          margin-right: 32px;

          svg {
            background: linear-gradient(35.84deg,
                rgba(162, 244, 255, 0.3) 28.41%,
                rgba(104, 211, 233, 0.28215) 61.65%,
                rgba(0, 155, 176, 0.237) 80.65%);
          }
        }
      }

      .swiper_description {
        font-family: $Gilroy-Regular;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 142.7%;
        color: #555555;
        margin-bottom: 30px;
      }

      .more_btn_wrapper {
        display: flex;
        justify-content: flex-end;
      }

      .more_btn {
        max-width: 112px;
        font-family: $Gilroy-Regular;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 142.7%;
        color: #00a9aa;
        background: transparent;
        border: 0;
        float: flex-end;
        margin-bottom: 5px;
        cursor: pointer;
      }
    }

    .swiper_buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 43px;

      .prev_btn {
        margin-right: 72px;
      }

      button {
        border: 0;
        background: transparent;
        cursor: pointer;
      }
    }

    .swiper_modal {
      padding: 3px;
      background: linear-gradient(180deg, #1e71aa 0%, #9fdedf 100%);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      z-index: -1;
      opacity: 0;
      transition: 0.8s;
      border-radius: 7px;

      .swiper_modal_content {
        padding: 31px 22px 20px 33px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(2px);
        border-radius: 7px;
      }

      .swiper_modal_in_wrapper {
        padding: 31px 22px 22px 34.7px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(2px);
        border-radius: 7px;
      }

      .close_modal {
        border: 0;
        background: transparent;
        position: absolute;
        top: 17px;
        right: 17px;
        cursor: pointer;
      }

      .modal_title {
        font-family: $Montserrat-Medium;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 142.7%;
        color: #037798;
        margin-bottom: 30px;
      }

      .modal_description {
        font-family: $Gilroy-Regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 142.7%;
        color: #232323;
        margin-bottom: 25px;
      }

      .swiper_modal_in_container {
        max-height: 452.31px;
        overflow: auto;
        padding-right: 18px;
        border-radius: 7px;

        &::-webkit-scrollbar {
          width: 5px;
          background: #ebebeb;
        }

        &::-webkit-scrollbar-thumb {
          background: #00a9aa;
        }

        .swiper_modal_in {
          background: rgba(183, 230, 231, 0.3);
          border-radius: 7px;
          padding: 16px 12px;

          .item {
            margin-bottom: 30px;

            .swiper_modal_in__title {
              font-family: $Gilroy-Regular;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 142.7%;
              text-transform: uppercase;
              color: #037798;
              margin-bottom: 10px;
            }

            ul {
              padding-left: 30px;

              li {
                font-family: $Gilroy-Regular;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 142.7%;
                color: #232323;
              }
            }
          }
        }
      }
    }

    .swiper_modal_active {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
      z-index: 2000;
    }
  }
}

// OurPortfolio end
@media (max-width: 1150px) {
  .our_portfolio {
    .main_container {
      .swiper_container {
        .swiper-slide {
          min-height: 450px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .our_portfolio {
    padding-bottom: 105px;

    .main_container {
      .title {
        font-size: 24px;
        line-height: 142.7%;
        margin-bottom: 17px;

        img {
          height: 9.98px;
          margin-right: 8px;
        }
      }

      .description {
        font-size: 12px;
        line-height: 142.7%;
        margin-bottom: 35px;
      }

      .swiper_container {
        .swiper-slide {
          min-height: 256px;

          .swiper_title {
            font-size: 14px;
            line-height: 142.7%;
            margin-bottom: 25px;

            img {
              height: 54.9px;
              margin-right: 24px;
            }
          }

          .swiper_description {
            font-size: 12px;
            line-height: 150.7%;
          }

          .more_btn_wrapper {
            .more_btn {
              font-size: 10px;
              line-height: 142.7%;
            }
          }
        }
      }

      .swiper_buttons {
        margin-top: 38px;
        justify-content: center;
      }

      .swiper_modal {
        width: 89%;

        .swiper_modal_content {
          padding: 31px 12px 20px 16px;
        }

        .swiper_modal_in_wrapper {
          padding: 31px 10px 20px 16px;
        }

        .modal_title {
          font-size: 16px;
          line-height: 142.7%;
          margin-bottom: 20px;
        }

        .modal_description {
          font-size: 12px;
          line-height: 142.7%;
          margin-bottom: 25px;
        }

        .swiper_modal_in_container {
          padding-right: 9px;

          &::-webkit-scrollbar {
            width: 3px;
          }

          .swiper_modal_in {
            .item {
              .swiper_modal_in__title {
                font-size: 12px;
                line-height: 142.7%;
              }

              ul {
                padding-left: 18px;

                li {
                  font-size: 12px;
                  line-height: 142.7%;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .our_portfolio {
    .main_container {
      .swiper_container {
        .swiper-slide {
          min-height: 275px;
        }
      }
    }
  }
}

@media (max-width: 650px) {
  .our_portfolio {
    .main_container {
      .swiper_container {
        background: transparent;
        overflow: unset;

        .swiper-slide {
          min-height: 100%;
          height: 100%;
          background: #ffffff;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          border-radius: 9px;
          padding: 9px 8px 17px;
          border-bottom: 0;

          .more_btn_wrapper {
            width: 100%;
            border-bottom: 1px solid #00a9aa;

            .more_btn {
              margin-bottom: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
