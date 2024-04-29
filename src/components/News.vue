<template>
  <section class="news" id="News">
    <div class="main_container">
      <title-component class="q-mb-xl ">Новости</title-component>
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
        <swiper-slide class="slider_item " v-for="item of news" :key="item.id">
          <div>
            <img :src="item.src" alt="Checkbox" />
            <h2 class="swiper_title">
              {{ item.title }}
            </h2>
            <p class="swiper_description">
              {{ item.des }}
            </p>
          </div>
          <div class="slider_item_bottom">
            <p class="news_date">{{ item.data }}</p>
            <button class="more_btn" @click="modal(item.id)">Читать</button>
          </div>
        </swiper-slide>
      </swiper>
      <div class="news_modal" :class="newsmodal ? 'news_modal_active' : ''">
        <div class="news_modal_in">
          <div class="modal_exit" @click="newsmodal = false">
            <img src="../assets/images/close.svg" alt="" />
          </div>
          <div class="modal_top">
            <img :src="modalNews.src" alt="" />
            <h2 class="title">
              {{ modalNews.title }}
            </h2>
          </div>
          <p class="description">
            <span>
              {{ modalNews.fulltext }}
            </span>
          </p>
          <div class="modal_bottom">
            <p class="news_date">{{ modalNews.data }}</p>
          </div>
        </div>
      </div>
      <div class="swiper_buttons">
        <button ref="prev" class="prev_btn">
          <img src="../assets/images/portfolio/prev.svg" alt="" />
        </button>
        <button ref="next" class="next_btn">
          <img src="../assets/images/portfolio/next.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { $authHost, $host } from "../http/index.js"
export default {
  components: {
    Swiper,
    SwiperSlide,
    "title-component": require("components/UI/Title.vue").default,
  },
  data() {
    return {
      news: [],
      newsmodal: false,
      modalNews: {},
    };
  },
  methods: {
    modal(id) {
      this.modalNews = this.news.find((item) => item.id == id);
      this.newsmodal = true;
    },
  },
  async created() {
    await $host.get(`api/website/news`).then((res) => {
      this.news = res.data;
    });
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {

      modules: [Navigation],
      onSwiper,
      onSlideChange,
      prev,
      next,
    };
  },
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.titles {
  margin-bottom: 50px;
}

.news {
  padding-bottom: 138px;

  .main_container {
    max-width: 1210px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Montserrat-Medium;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 142.7%;
      color: #232323;
      margin-bottom: 20px;

      img {
        margin-right: 18px;
      }
    }

    .swiper_wrapper {
      position: relative;
    }

    .news_modal {
      max-width: 1170px;
      width: 90%;
      padding: 25px 27px 17px;
      background: #c7eaf0;
      border-radius: 6px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      transition: 0.8s;
      opacity: 0;
      z-index: -1;
      border: 2px solid white;

      .modal_exit {
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 1;
        cursor: pointer;
      }

      .modal_top {
        display: flex;
        align-items: center;
        margin-bottom: 39px;

        img {
          height: 130px;
          border-radius: 6px;
        }

        .title {
          max-width: 854.72px;
          width: 100%;
          font-family: Montserrat-Medium;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          color: #232323;
          margin-left: 38px;
          padding-bottom: 25px;
          border-bottom: 1px solid #ffffff;
        }
      }

      .description {
        font-family: $Gilroy-Regular;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #232323;
        margin-bottom: 30px;
        padding-right: 10px;
      }

      .modal_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .news_date {
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          color: #aaaaaa;
        }

        .modal_close {
          padding: 9px 35px;
          background: #ffffff;
          border-radius: 14px;
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          color: #00a9aa;
          border: 0;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            background: #00a9aa;
            color: #ffffff;
          }
        }
      }
    }

    .news_modal_active {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      z-index: 2000;
    }

    .swiper_container {
      .slider_item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(41, 179, 209, 0.2);
        border-radius: 6px;
        padding: 26px 21px 17px;

        .card_img {
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        &:hover {
          .card_img {
            img {
              transform: scale(1.2);
            }
          }
        }

        img {
          width: 100%;
          transition: 0.5s;
        }

        .swiper_title {
          font-family: Montserrat-Medium;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          color: #232323;
          margin-bottom: 9px;
        }

        .swiper_description {
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #232323;
          margin-bottom: 30px;
        }

        .slider_item_bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .news_date {
            font-family: $Gilroy-Regular;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #aaaaaa;
          }

          .more_btn {
            background: #ffffff;
            transition: 0.3s;
            border-radius: 14px;
            padding: 9px 40px;
            border: 0;
            font-family: $Gilroy-Regular;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #00a9aa;
            cursor: pointer;

            &:hover {
              background: #00a9aa;
              color: #ffffff;
            }
          }
        }
      }
    }

    .swiper_buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: 45px;

      .prev_btn {
        margin-right: 72px;
      }

      button {
        border: 0;
        background: transparent;
        cursor: pointer;
      }
    }
  }
}

// News end
@media (max-width: 1220px) {
  .news {
    .main_container {
      .news_modal {
        width: 96.5%;
      }
    }
  }
}

@media (max-width: 992px) {
  .news {
    padding-bottom: 122px;

    .main_container {
      .title {
        font-size: 24px;
        line-height: 142.7%;
        margin-bottom: 30px;
        justify-content: start;

        img {
          height: 9.98px;
          margin-right: 9px;
        }
      }

      .swiper_container {
        overflow: visible;

        .slider_item {
          img {
            margin-bottom: 13px;
          }

          .swiper_title {
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 10px;
          }

          .swiper_description {
            font-size: 12px;
            line-height: 14px;
          }

          .slider_item_bottom {
            .news_date {
              font-size: 8px;
              line-height: 10px;
            }

            .more_btn {
              max-width: 93.41px;
              width: 100%;
              font-size: 10px;
              line-height: 12px;
              padding: 6px 0;
            }
          }
        }
      }

      .swiper_buttons {
        justify-content: center;
        margin-top: 40px;
      }
    }
  }
}

@media (max-width: 768px) {
  .news {
    .main_container {
      .news_modal {
        width: 89%;
        height: 95%;
        padding: 3px;
        background: linear-gradient(180deg, #1e71aa 0%, #9fdedf 100%);
        border-radius: 7px;

        .news_modal_in {
          height: 100%;
          padding: 32px 12px 17px 19px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 7px;
          overflow: hidden;
        }

        .modal_exit {
          top: 9px;
          right: 9px;

          img {
            height: 11.08px;
          }
        }

        .modal_top {
          flex-direction: column;
          align-items: start;
          margin-bottom: 0;

          img {
            width: 100%;
            height: auto;
            margin-bottom: 8px;
            max-height: 279px;
          }

          .title {
            font-size: 14px;
            line-height: 17px;
            margin-left: 0;
            padding-bottom: 0;
            padding: 0 10px;
          }
        }

        .description {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          margin-bottom: 0;
          max-height: 337.28px;
          overflow: auto;

          span {
            display: block;
            background: rgba(183, 230, 231, 0.3);
            border-radius: 7px 7px 0 0;
            padding: 13px 15px 0 13px;
          }

          &::-webkit-scrollbar {
            width: 3px;
            background: #ebebeb;
          }

          &::-webkit-scrollbar-thumb {
            background: #00a9aa;
          }
        }

        .modal_bottom {
          background: rgba(183, 230, 231, 0.3);
          border-radius: 0 0 7px 7px;
          padding: 30px 15px 23px;
          margin-right: 12px;

          .news_date {
            font-family: $Gilroy-Regular;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #aaaaaa;
          }

          .modal_close {
            padding: 9px 35px;
            background: #ffffff;
            border-radius: 14px;
            font-family: $Gilroy-Regular;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            color: #00a9aa;
            border: 0;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
              background: #00a9aa;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
