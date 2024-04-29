<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: 'App',
  data() {
    return {
      // formDataStructure: {
      //   nameMethod: "structura/structura/",
      //   nameState: "setStructuraList",
      // },
      formDataPortfolio: {
        nameMethod: "portfolio/portfolio/",
        nameState: "setPortfolioList"
      },
      formDataGetTeam: {
        nameMethod: "sotrudniki/sotrudniki/",
        nameState: "setTeamList",
        otdel: 'Руководство'

      }
    }
  },
  methods: {
    ...mapActions("base", ["postQuery", "postQueryTeam", "postQuery2"]),
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

    showLocaleTime: function () {
      setInterval(function () {
        const observerLeft = new IntersectionObserver((entires) => {
          entires.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animation_left_active");
            } else {
              entry.target.classList.remove("animation_left_active");
            }
          });
        });
        const observerRight = new IntersectionObserver((entires) => {
          entires.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animation_right_active");
            } else {
              entry.target.classList.remove("animation_right_active");
            }
          });
        });
        const observerCenter = new IntersectionObserver((entires) => {
          entires.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animation_center_active");
            } else {
              entry.target.classList.remove("animation_center_active");
            }
          });
        });
        const animationbottom = new IntersectionObserver((entires) => {
          entires.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animation_bottom_active");
            } else {
              entry.target.classList.remove("animation_bottom_active");
            }
          });
        });
        const animationrotate = new IntersectionObserver((entires) => {
          entires.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animation_rotate_active");
            } else {
              entry.target.classList.remove("animation_rotate_active");
            }
          });
        });
        const animation_left = document.querySelectorAll(".animation_left");
        const animation_right = document.querySelectorAll(".animation_right");
        const animation_center = document.querySelectorAll(".animation_center");
        const animation_bottom = document.querySelectorAll(".animation_bottom");
        const animation_rotate = document.querySelectorAll(".animation_rotate");
        animation_left.forEach((el) => observerLeft.observe(el));
        animation_right.forEach((el) => observerRight.observe(el));
        animation_center.forEach((el) => observerCenter.observe(el));
        animation_bottom.forEach((el) => animationbottom.observe(el));
        animation_rotate.forEach((el) => animationrotate.observe(el));
      }, 500);
    },
  },
  computed: {
    ...mapState("base", ["structuraList"]),
  },
  mounted() {
    // this.postQuery(this.formDataStructure)
    // this.postQuery(this.formDataPortfolio)
    // this.postQuery(this.formDataGetTeam)
    this.absoluteImg();
    this.showLocaleTime();
  },


})
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;




}

html,
body,
#q-app {
  width: 100%;
  direction: ltr;
  background: #f6fbfa;

}

.animation_left {
  transform: translateX(-100%);
  opacity: 0;
  transition: 2s;
}

.animation_right {
  transform: translateX(100%);
  opacity: 0;
  transition: 2s;
}

.animation_bottom {
  transform: translateY(500px);
  opacity: 0;
  transition: 1.4s;
}

.animation_center {
  transform: scale(0.1);
  transition: 1.5s;
  opacity: 0;
}

.animation_left_active {
  transform: translateX(0);
  opacity: 1;
}

.animation_right_active {
  transform: translateX(0);
  opacity: 1;
}

.animation_center_active {
  transform: scale(1);
  opacity: 1;
  animation: animation_center 2s forwards ease-out;
}

.animation_bottom_active {
  transform: translateY(0);
  opacity: 1;
  animation: animation_bottom 1.3s forwards ease-out;
}

.animation_rotate {
  transform-origin: center;
}

.animation_rotate_active {
  animation: animation_rotate 1.5s forwards ease-out;
  transform-origin: center;
}

@keyframes animation_center {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes animation_bottom {
  0% {
    transform: translateY(500px);
    opacity: 0;
  }

  25% {
    transform: translateY(275);
    opacity: 0.25;
  }

  50% {
    transform: translateY(55);
    opacity: 0.5;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes animation_rotate {
  0% {
    transform: rotate(-39deg);
    transform-origin: center;
    opacity: 0;
  }

  100% {
    transform: rotate(0);
    opacity: 1;
  }
}
</style>
