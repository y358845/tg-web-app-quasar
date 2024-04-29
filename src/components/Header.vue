<template>
  <div class="header_container" :class="menu_top ? 'header_top_scroll' : ''">
    <header>
      <a href="#" class="logo "><img src="../assets/images/logo.svg" alt="" /></a>
      <nav class="nav_link " :class="menu ? 'mobile_menu_active' : ''">
        <button class="close_btn" @click="menu = false">
          <img src="../assets/images/close.svg" alt="close" />
        </button>
        <div class="nav_link_in">
          <a href="#About" @click="menu = !menu">O нас</a>
          <a href="#Project" @click="menu = !menu">Проекты</a>
          <a href="#Ourteam" @click="menu = !menu">Наша команда</a>
          <a href="#News" @click="menu = !menu">Новости</a>
          <a href="#Contact" @click="menu = !menu">Контакты</a>
          <a href="https://rostgmu-uit.ru/HD/#/auth" target="_blank" @click="menu = !menu">
            СУЗ
            <q-tooltip class="bg-primary text-body2" :offset="[10, 10]" transition-show="scale" transition-hide="scale">
              Система управления заявками
            </q-tooltip>
          </a>
          <!-- <a href="#" @click="menu = !menu">1C:УИТ</a> -->
        </div>
      </nav>
      <div class="burger_button" @click="menu = !menu">
        <button>
          <img src="../assets/images/bar-chart-alt.svg" alt="bar-chart-alt" />
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      menu_top: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.menu_top = true;
      } else {
        this.menu_top = false;
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header_container {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  display: flex;
  justify-content: center;
  transition: 0.3s;
}

header {
  max-width: 1210px;
  width: 100%;
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  transition: 0.3s;

  .nav_link {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(2px);
    border-radius: 6px 0px 0px 6px;
    padding: 0 0 0 46px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: 0.3s;

    .close_btn {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: -100%;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(2px);
      border-radius: 6px 0px 0px 6px;
      transition: 0.3s;
    }

    .nav_link_in {
      width: 754px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(2px);
      padding: 23px 0;
      transition: 0.3s;

      a {
        font-family: $Montserrat-Medium;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #555555;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          color: #037798;
        }
      }
    }
  }

  .burger_button {
    width: 85px;
    height: 51px;
    display: none;
    align-content: center;
    justify-content: end;
    padding-right: 15px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(2px);
    border-radius: 6px 0px 0px 6px;
    margin-right: -20px;

    button {
      background: transparent;
      border: 0;
    }
  }
}

.header_top_scroll {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);

  header {
    .nav_link {
      background: rgba(255, 255, 255, 0);
      backdrop-filter: blur(0px);

      &::before {
        background: rgba(255, 255, 255, 0);
      }

      .nav_link_in {
        background: rgba(255, 255, 255, 0);
      }
    }
  }
}

@media (max-width: 1400px) {
  header {
    .nav_link {
      &::before {
        margin-right: 0;
      }

      .nav_link_in {
        max-width: 600px;
        margin-right: 0;
      }
    }
  }
}

@media (max-width: 992px) {
  .header_container {
    overflow: visible;
  }

  header {
    padding: 7px 20px;
    position: relative;
    z-index: 1000;

    .logo {
      img {
        height: 62px;
      }
    }

    .nav_link {
      background: rgba(255, 255, 255, 1) !important;
      position: fixed;
      top: 0;
      left: -100%;
      max-width: 450px;
      height: 100vh;
      margin-right: 0;
      transition: 0.5s;
      z-index: 1001;
      padding: 100px 20px;
      border-radius: 0;
      align-items: flex-start;

      &::before {
        display: none;
      }

      .nav_link_in {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      a {
        margin-bottom: 30px;
      }
    }

    .mobile_menu_active {
      left: 0;
      z-index: 1000;
    }

    .burger_button {
      display: flex;
    }

    .menu_blur {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #000000;
      z-index: -1;
      transition: 0.5s;
      opacity: 0;
    }

    .menu_blur_active {
      transform: scale(1);
      opacity: 0.6;
      z-index: 999;
    }
  }
}

@media (max-width: 576px) {
  header {
    .logo {
      img {
        height: 62px;
      }
    }

    .nav_link {
      max-width: 100%;

      .close_btn {
        display: inline-block;
        content: "";
        width: 80px;
        height: 80px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1001;
        background: transparent;
        border: 0;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
