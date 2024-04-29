<template>
  <div class="our_structure_modal" :class="modal ? 'our_structure_modal_active' : ''">
    <div class="our_structure_modal_in">
      <button class="close_btn" @click="modal = false" v-close-popup="popupValue">
        <img src="../../assets/images/close.svg" alt="close" />
      </button>
      <div class="our_structure_modal_left">
        <h2 class="title">
          {{ structEl.title }}
          <br />
        </h2>

        <div class="name_and_description">
          <p class="name"> {{ structEl.name }}</p>
          <p class="description">
            {{ structEl.description }}
            <br />
          </p>
        </div>
      </div>
      <div class="our_structure_modal_right">
        <a href="tel://+7777777777" class="modal_phone">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.78465 2.12624C1.54295 3.79753 1.30473 8.31121 4.85163 11.8581C8.39853 15.405 12.9122 15.1668 14.5835 14.9251V11.5052L11.0718 10.9199L10.5416 11.9803C10.4075 12.2485 10.1334 12.4179 9.8335 12.4179V11.6262C9.8335 12.4179 9.83311 12.4179 9.83271 12.4179L9.83188 12.4179L9.83011 12.4179L9.82612 12.4179L9.81635 12.4178C9.80905 12.4176 9.80019 12.4174 9.78981 12.4171C9.76906 12.4164 9.74223 12.4152 9.70972 12.4131C9.64472 12.4087 9.55686 12.4006 9.44941 12.3852C9.23464 12.3545 8.94042 12.295 8.59357 12.1794C7.89714 11.9472 6.99542 11.4911 6.10705 10.6027C5.21867 9.71432 4.76253 8.8126 4.53038 8.11617C4.41477 7.76933 4.35522 7.47511 4.32453 7.26033C4.30918 7.15288 4.30102 7.06502 4.29668 7.00003C4.29452 6.96752 4.29331 6.94069 4.29264 6.91993C4.2923 6.90956 4.2921 6.90069 4.29199 6.89339L4.29187 6.88363L4.29184 6.87963L4.29184 6.87786L4.29184 6.87703C4.29184 6.87663 4.29184 6.87624 5.0835 6.87624H4.29184C4.29184 6.61154 4.42413 6.36436 4.64437 6.21753L6.4849 4.99051L5.33919 2.12624H1.78465ZM5.93348 7.26106L7.36317 6.30793C7.98616 5.8926 8.23306 5.09766 7.95498 4.40248L6.80928 1.53821C6.56882 0.93708 5.98662 0.542908 5.33919 0.542908H1.74329C1.02405 0.542908 0.347032 1.04258 0.228959 1.82296C-0.0396612 3.59835 -0.40529 8.84036 3.73205 12.9777C7.86938 17.115 13.1114 16.7494 14.8868 16.4808C15.6672 16.3627 16.1668 15.6857 16.1668 14.9665V11.5052C16.1668 10.7312 15.6073 10.0707 14.8438 9.94343L11.3321 9.35814C10.6464 9.24386 9.96645 9.59013 9.65559 10.2118L9.38129 10.7605C9.29507 10.7393 9.19882 10.7121 9.09427 10.6773C8.6032 10.5136 7.92159 10.1781 7.22663 9.48311C6.53168 8.78816 6.19615 8.10654 6.03246 7.61548C5.98823 7.48278 5.95639 7.36347 5.93348 7.26106Z"
              fill="#00A9AA" />
          </svg>

          +{{ structEl.tel }}</a>
        <a href="mailto:rgmu.it@rostgmu.ru" class="modal_email">
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.333496 2.09043C0.333496 1.16996 1.04238 0.423767 1.91683 0.423767H14.5835C15.4579 0.423767 16.1668 1.16996 16.1668 2.09043V12.0904C16.1668 13.0109 15.4579 13.7571 14.5835 13.7571H1.91683C1.04238 13.7571 0.333496 13.0109 0.333496 12.0904V2.09043ZM3.11905 2.09043L8.25016 6.81646L13.3813 2.09043H3.11905ZM14.5835 3.19774L8.77148 8.55091C8.473 8.82583 8.02733 8.82583 7.72885 8.55091L1.91683 3.19774V12.0904H14.5835V3.19774Z"
              fill="#00A9AA" />
          </svg>

          {{ structEl.mail }}</a>
        <p class="location">
          <span>
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.25033 2.3882C4.62697 2.3882 2.50033 4.51485 2.50033 7.1382C2.50033 7.95193 2.78845 8.8615 3.27735 9.80439C3.76269 10.7404 4.41901 11.658 5.0906 12.4735C5.76027 13.2866 6.43214 13.9827 6.93745 14.476C7.05106 14.5869 7.15601 14.6873 7.25032 14.7763C7.34464 14.6873 7.44959 14.5869 7.5632 14.476C8.06851 13.9827 8.74038 13.2866 9.41005 12.4735C10.0816 11.658 10.738 10.7404 11.2233 9.80439C11.7122 8.8615 12.0003 7.95193 12.0003 7.1382C12.0003 4.51485 9.87368 2.3882 7.25033 2.3882ZM7.25033 15.8465C6.73512 16.4476 6.73497 16.4475 6.73481 16.4474L6.73313 16.4459L6.72914 16.4425L6.71526 16.4305C6.70342 16.4202 6.68648 16.4054 6.66477 16.3863C6.62136 16.348 6.55885 16.2924 6.47997 16.2208C6.32227 16.0775 6.0988 15.87 5.83143 15.609C5.29768 15.088 4.58413 14.3491 3.86838 13.48C3.15456 12.6132 2.42546 11.6011 1.87174 10.5332C1.32158 9.4722 0.916992 8.30364 0.916992 7.1382C0.916992 3.6404 3.75252 0.804871 7.25033 0.804871C10.7481 0.804871 13.5837 3.6404 13.5837 7.1382C13.5837 8.30364 13.1791 9.4722 12.6289 10.5332C12.0752 11.6011 11.3461 12.6132 10.6323 13.48C9.91652 14.3491 9.20297 15.088 8.66922 15.609C8.40185 15.87 8.17838 16.0775 8.02068 16.2208C7.9418 16.2924 7.87929 16.348 7.83588 16.3863C7.81417 16.4054 7.79722 16.4202 7.78539 16.4305L7.77151 16.4425L7.76752 16.4459L7.76627 16.447C7.76611 16.4471 7.76553 16.4476 7.25033 15.8465ZM7.25033 15.8465L6.73481 16.4474C7.03128 16.7015 7.46906 16.7017 7.76553 16.4476L7.25033 15.8465ZM7.25033 5.55487C6.37587 5.55487 5.66699 6.26375 5.66699 7.1382C5.66699 8.01265 6.37587 8.72154 7.25033 8.72154C8.12478 8.72154 8.83366 8.01265 8.83366 7.1382C8.83366 6.26375 8.12478 5.55487 7.25033 5.55487ZM4.08366 7.1382C4.08366 5.3893 5.50142 3.97154 7.25033 3.97154C8.99923 3.97154 10.417 5.3893 10.417 7.1382C10.417 8.88711 8.99923 10.3049 7.25033 10.3049C5.50142 10.3049 4.08366 8.88711 4.08366 7.1382Z"
                fill="#00A9AA" />
            </svg>
          </span>
          {{ structEl.adres }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["structEl"],
  data() {
    return {
      modal: false,
    };
  },
  mounted() {
    // this.updateTable()
    // console.log(this.structEl)
  },

};
</script>

<style lang="scss" scoped>
.our_structure_modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: 0.8s;
  margin-top: 60px;

  max-width: 588.53px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(2px);
  border-radius: 7px;

  .our_structure_modal_in {
    max-width: 588.53px;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(2px);
    border-radius: 7px;
    border: 4px solid;
    border-image-source: linear-gradient(180deg, #1e71aa 0%, #9fdedf 100%);
    border-image-slice: 25%;
    padding: 17px 33px;
    display: flex;
    align-items: center;
    gap: 43px;
  }

  .close_btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: 0;
    cursor: pointer;

    img {
      height: 8.75px;
    }
  }

  .our_structure_modal_left {
    .title {
      font-family: $Montserrat-Medium;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 142.7%;
      color: #037798;
      margin-bottom: 10px;
    }

    .name_and_description {
      background: rgba(183, 230, 231, 0.3);
      border-radius: 7px;
      padding: 10px;

      .name {
        font-family: $Gilroy-Regular;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 142.7%;
        text-transform: uppercase;
        color: #232323;
        margin-bottom: 10px;
      }

      .description {
        font-family: $Gilroy-Regular ;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 142.7%;
        color: #232323;
      }
    }
  }

  .our_structure_modal_right {
    font-family: $Gilroy-Regular ;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 142.7%;
    color: #232323;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: $Gilroy-Regular ;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 142.7%;
      color: #232323;
      text-decoration: none;
      margin-bottom: 22px;

      svg {
        margin-right: 15px;
      }
    }

    .location {
      display: flex;
      align-items: center;

      svg {
        display: block;
        width: 14px;
        min-height: 17px;
        height: 17px;
        margin-right: 15px;

        path {
          min-width: 14px;
          min-height: 17px;
        }
      }
    }
  }
}

.our_structure_modal_active {
  z-index: 2000;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);

}
</style>
