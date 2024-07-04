<template>
  <div class="wrapper team_wrapper" id="Ourteam">
    <div class="team_wrapper_bg">
      <img src="../assets/images/team/team_bg.png" alt="about_bg" />
    </div>
    <div class="team_card_bg">
      <img src="../assets/images/team/team_card.png" alt="" />
    </div>
    <div class="main_container">
      <title-component>Наша команда</title-component>
      <div class="team_title_card">
        <!-- первый враппер -->
        <div class="title_wrapper">
          <!-- подразделения первого уровня -->
          <div v-for="item of level1" :key="item.id" class="team_title teamlistBtn" :data-filter="item.title"
            @click="getTeam(level1[0].title)">
            {{ item.title }}
          </div>

          <!-- подразделения второго уровня -->
          <div v-for="item of level2" :key="item.id" class="team_title teamlistBtn" :data-filter="item.title"
            @click="getTeam(item.title)">
            {{ item.title }}
          </div>

        </div>

        <!-- второй враппер -->
        <div class="description_text_wrapper ">
          <!-- подразделения третьего уровня -->
          <div v-for="item of level3" :key="item.id" class="description_text teamlistBtn" :data-filter="item.title"
            @click="getTeam(item.title)">
            {{ item.title }}
          </div>

        </div>
      </div>



      <div class="team_card_wrapper">
        <div class="team_card " v-for="cardItem of teamList " :key="cardItem.id">
          <div class="card_img" @click="showSingle(cardItem.src)">
            <img :src="cardItem.src" />
          </div>
          <div class="card_body">
            <div class="card_title">{{ cardItem.title }}</div>
            <!-- <div class="card_title">{{ cardItem.title2 }}</div> -->
            <div class="card_sescription">
              {{ cardItem.description }}
            </div>
            <div class="card_network_wrapper">
              <a :href=cardItem.email>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.7523 31.304C7.19191 31.304 0.252319 24.3644 0.252319 15.804C0.252319 7.24354 7.19191 0.303955 15.7523 0.303955C24.3127 0.303955 31.2523 7.24354 31.2523 15.804C31.2523 24.3644 24.3127 31.304 15.7523 31.304ZM15.9683 14.934C17.2374 14.934 23.4083 11.464 23.4083 11.464L23.4182 10.844C23.4182 10.1595 22.8627 9.60396 22.1763 9.60396H9.76023C9.07451 9.60396 8.51899 10.1595 8.51899 10.844V11.3964C8.51899 11.3964 14.7574 14.934 15.9683 14.934ZM8.52891 13.324C8.52829 13.324 14.7574 16.639 15.9683 16.639C17.2957 16.639 23.4083 13.324 23.4083 13.324L23.4182 20.764C23.4182 21.4484 22.8627 22.004 22.1763 22.004H9.76023C9.07513 22.004 8.51899 21.4484 8.51899 20.764L8.52891 13.324Z"
                    fill="#97D7EF" />
                </svg>
              </a>
              <a :href=cardItem.tel>
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.2523 0.303955C6.96805 0.303955 0.252319 7.24354 0.252319 15.804C0.252319 24.3644 6.96805 31.304 15.2523 31.304C23.5366 31.304 30.2523 24.3644 30.2523 15.804C30.2523 7.24354 23.5366 0.303955 15.2523 0.303955ZM10.7447 8.05396C10.7891 8.09033 10.8243 8.09033 10.8595 8.08559C11.0416 8.06977 11.1977 8.11564 11.2988 8.28804C11.3166 8.31794 11.3344 8.34783 11.3523 8.37773C11.5611 8.72749 11.7704 9.07788 11.9692 9.43633C12.1131 9.69548 12.2504 9.95884 12.3879 10.2225C12.4887 10.4158 12.5896 10.6093 12.6932 10.8013C12.7333 10.8791 12.7834 10.9525 12.8335 11.0258C12.8618 11.0672 12.8901 11.1086 12.9166 11.1508C12.9805 11.2559 13.0417 11.3638 13.1014 11.4691L13.111 11.4862C13.2396 11.7376 13.2335 11.9907 13.0422 12.1916C12.8407 12.4044 12.6243 12.6059 12.4082 12.8071C12.332 12.8781 12.2558 12.949 12.1804 13.0204C12.0866 13.1093 11.9914 13.1968 11.8963 13.2843C11.7462 13.4224 11.5961 13.5603 11.4518 13.7036C11.2681 13.8871 11.2207 14.1165 11.3447 14.3584C11.3562 14.3807 11.3676 14.4029 11.3791 14.4251C11.5588 14.7729 11.7384 15.1204 11.9355 15.4609C12.7131 16.8005 13.7065 17.9393 14.9616 18.8171C15.4453 19.1572 15.9488 19.4688 16.457 19.7661C16.9361 20.0461 17.1228 19.9986 17.4948 19.57C17.6912 19.3446 17.8837 19.1171 18.0765 18.8893C18.2232 18.7159 18.37 18.5424 18.5188 18.3695C18.6014 18.2731 18.7009 18.1876 18.7974 18.1054C18.9933 17.9346 19.2076 17.9156 19.4326 18.0326C19.4467 18.0398 19.461 18.0467 19.4754 18.0537C19.525 18.0777 19.5751 18.102 19.6178 18.1339C20.0169 18.4289 20.4475 18.666 20.8776 18.9028C21.0907 19.0201 21.3037 19.1374 21.5127 19.2616C21.7282 19.3895 21.9399 19.5232 22.151 19.6566C22.2714 19.7326 22.3916 19.8085 22.5122 19.8832C22.6913 19.9923 22.7632 20.1521 22.751 20.3719C22.7173 20.9903 22.6178 21.5977 22.2704 22.1197C22.125 22.3363 21.9183 22.5261 21.7102 22.6796C21.1331 23.0971 20.4887 23.3549 19.803 23.5131C19.18 23.657 18.5586 23.6048 17.9616 23.4119C16.8091 23.0449 15.6733 22.6242 14.6279 21.9868C13.6789 21.4063 12.8156 20.7057 12.0166 19.9227C11.0049 18.9279 10.1018 17.8428 9.37168 16.6076C8.89566 15.8057 8.55585 14.9421 8.2482 14.0611C8.06146 13.5297 7.87778 13.003 7.79513 12.4399C7.70023 11.8025 7.76604 11.1888 7.9635 10.5846C8.14105 10.0389 8.36299 9.51699 8.6982 9.0504C8.96147 8.6882 9.29056 8.42248 9.71608 8.30386C9.95651 8.23813 10.1985 8.18181 10.4403 8.12552C10.5418 8.10189 10.6433 8.07827 10.7447 8.05396Z"
                    fill="#97D7EF" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <swiper class="swiper_container" :modules="modules" :loop="false" :breakpoints="{
          '@0.00': {
            slidesPerView: 1.2,
            spaceBetween: 18,
          },
        }
          ">
          <swiper-slide class="slider_item " v-for="   item of teamList   " :key="item.id"
            :class="item.visible ? '' : 'team_card_remove'" @click="showSingle(item.src)">
            <div class="team_card_slide">
              <div class="card_img">
                <img :src="item.src" alt="Checkbox" />
              </div>
              <div class="card_body">
                <h2 class="swiper_title">
                  {{ item.title1 }}
                </h2>
                <h2 class="swiper_title">
                  {{ item.title2 }}
                </h2>
                <p class="swiper_description">
                  {{ item.description }}
                </p>
                <div class="card_network">
                  <a href="#">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.7523 31.304C7.19191 31.304 0.252319 24.3644 0.252319 15.804C0.252319 7.24354 7.19191 0.303955 15.7523 0.303955C24.3127 0.303955 31.2523 7.24354 31.2523 15.804C31.2523 24.3644 24.3127 31.304 15.7523 31.304ZM15.9683 14.934C17.2374 14.934 23.4083 11.464 23.4083 11.464L23.4182 10.844C23.4182 10.1595 22.8627 9.60396 22.1763 9.60396H9.76023C9.07451 9.60396 8.51899 10.1595 8.51899 10.844V11.3964C8.51899 11.3964 14.7574 14.934 15.9683 14.934ZM8.52891 13.324C8.52829 13.324 14.7574 16.639 15.9683 16.639C17.2957 16.639 23.4083 13.324 23.4083 13.324L23.4182 20.764C23.4182 21.4484 22.8627 22.004 22.1763 22.004H9.76023C9.07513 22.004 8.51899 21.4484 8.51899 20.764L8.52891 13.324Z"
                        fill="#97D7EF" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.2523 0.303955C6.96805 0.303955 0.252319 7.24354 0.252319 15.804C0.252319 24.3644 6.96805 31.304 15.2523 31.304C23.5366 31.304 30.2523 24.3644 30.2523 15.804C30.2523 7.24354 23.5366 0.303955 15.2523 0.303955ZM10.7447 8.05396C10.7891 8.09033 10.8243 8.09033 10.8595 8.08559C11.0416 8.06977 11.1977 8.11564 11.2988 8.28804C11.3166 8.31794 11.3344 8.34783 11.3523 8.37773C11.5611 8.72749 11.7704 9.07788 11.9692 9.43633C12.1131 9.69548 12.2504 9.95884 12.3879 10.2225C12.4887 10.4158 12.5896 10.6093 12.6932 10.8013C12.7333 10.8791 12.7834 10.9525 12.8335 11.0258C12.8618 11.0672 12.8901 11.1086 12.9166 11.1508C12.9805 11.2559 13.0417 11.3638 13.1014 11.4691L13.111 11.4862C13.2396 11.7376 13.2335 11.9907 13.0422 12.1916C12.8407 12.4044 12.6243 12.6059 12.4082 12.8071C12.332 12.8781 12.2558 12.949 12.1804 13.0204C12.0866 13.1093 11.9914 13.1968 11.8963 13.2843C11.7462 13.4224 11.5961 13.5603 11.4518 13.7036C11.2681 13.8871 11.2207 14.1165 11.3447 14.3584C11.3562 14.3807 11.3676 14.4029 11.3791 14.4251C11.5588 14.7729 11.7384 15.1204 11.9355 15.4609C12.7131 16.8005 13.7065 17.9393 14.9616 18.8171C15.4453 19.1572 15.9488 19.4688 16.457 19.7661C16.9361 20.0461 17.1228 19.9986 17.4948 19.57C17.6912 19.3446 17.8837 19.1171 18.0765 18.8893C18.2232 18.7159 18.37 18.5424 18.5188 18.3695C18.6014 18.2731 18.7009 18.1876 18.7974 18.1054C18.9933 17.9346 19.2076 17.9156 19.4326 18.0326C19.4467 18.0398 19.461 18.0467 19.4754 18.0537C19.525 18.0777 19.5751 18.102 19.6178 18.1339C20.0169 18.4289 20.4475 18.666 20.8776 18.9028C21.0907 19.0201 21.3037 19.1374 21.5127 19.2616C21.7282 19.3895 21.9399 19.5232 22.151 19.6566C22.2714 19.7326 22.3916 19.8085 22.5122 19.8832C22.6913 19.9923 22.7632 20.1521 22.751 20.3719C22.7173 20.9903 22.6178 21.5977 22.2704 22.1197C22.125 22.3363 21.9183 22.5261 21.7102 22.6796C21.1331 23.0971 20.4887 23.3549 19.803 23.5131C19.18 23.657 18.5586 23.6048 17.9616 23.4119C16.8091 23.0449 15.6733 22.6242 14.6279 21.9868C13.6789 21.4063 12.8156 20.7057 12.0166 19.9227C11.0049 18.9279 10.1018 17.8428 9.37168 16.6076C8.89566 15.8057 8.55585 14.9421 8.2482 14.0611C8.06146 13.5297 7.87778 13.003 7.79513 12.4399C7.70023 11.8025 7.76604 11.1888 7.9635 10.5846C8.14105 10.0389 8.36299 9.51699 8.6982 9.0504C8.96147 8.6882 9.29056 8.42248 9.71608 8.30386C9.95651 8.23813 10.1985 8.18181 10.4403 8.12552C10.5418 8.10189 10.6433 8.07827 10.7447 8.05396Z"
                        fill="#97D7EF" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.7523 31.304C24.3127 31.304 31.2523 24.3644 31.2523 15.804C31.2523 7.24354 24.3127 0.303955 15.7523 0.303955C7.19191 0.303955 0.252319 7.24354 0.252319 15.804C0.252319 24.3644 7.19191 31.304 15.7523 31.304ZM6.45232 15.8036C6.45232 10.6756 10.6246 6.50396 15.752 6.50396C20.88 6.50396 25.0523 10.6756 25.0523 15.8036C25.0523 20.9323 20.88 25.1033 15.752 25.1033C10.6246 25.1033 6.45232 20.9317 6.45232 15.8036Z"
                        fill="#97D7EF" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.714 7.8772C11.7018 8.26712 10.7841 8.84347 10.001 9.5662L9.99992 9.56897C9.98587 9.60537 9.97254 9.63991 9.96358 9.6732C9.93141 9.80186 10.1887 9.70536 10.1887 9.70536L10.4762 9.83336L10.8288 9.70536C10.8288 9.70536 10.9252 9.51303 11.1484 9.35351C11.3093 9.23827 11.3387 9.18876 11.3777 9.12309C11.3932 9.09712 11.4101 9.06861 11.4373 9.03252C11.4847 8.9695 11.4852 8.96901 11.5239 8.93027L11.5239 8.93027L11.5239 8.93025C11.5635 8.8907 11.6429 8.81128 11.8528 8.58483C12.2696 8.13583 12.4935 8.13649 12.4935 8.13649C12.4935 8.13649 12.6142 8.0052 12.714 7.8772ZM13.8385 10.3132L13.7111 10.1215L13.8385 9.83336L14.147 9.95677V9.38502L14.4418 9.22551L14.6866 9.57736L15.0634 9.99419L14.8133 10.1859L14.1464 10.3139V9.9745L13.8385 10.3132ZM8.97236 10.7937C8.97236 10.8333 8.95566 10.8636 8.93775 10.8961C8.89776 10.9686 8.85176 11.0521 8.97236 11.2742C9.19555 11.6904 9.00387 11.8827 9.00387 11.8827C9.00387 11.8827 8.45903 12.2668 8.36319 12.3311C8.26736 12.3954 8.01135 12.7473 8.17086 12.6508C8.33103 12.5549 8.52271 12.4591 8.36319 12.7151C8.31598 12.7908 8.25765 12.8802 8.19722 12.9729L8.19722 12.9729C8.05264 13.1946 7.89608 13.4347 7.85118 13.5481C7.82803 13.6066 7.77094 13.6945 7.70766 13.7919C7.5969 13.9625 7.46716 14.1622 7.46716 14.2846C7.46716 14.3687 7.44271 14.4895 7.41787 14.6122C7.38587 14.7703 7.35322 14.9316 7.37133 15.0218C7.39299 15.1334 7.32209 15.4623 7.2663 15.5975C7.30962 13.7976 7.91551 12.1388 8.91591 10.7819C8.94873 10.7852 8.97236 10.7937 8.97236 10.7937ZM24.2316 16.169C24.2399 16.0478 24.2482 15.9268 24.2482 15.8036C24.2482 12.7716 22.6465 10.1123 20.2512 8.60912C20.227 8.62256 20.1996 8.63927 20.1704 8.6571C20.0384 8.73765 19.8693 8.84084 19.7956 8.76666C19.6998 8.67082 19.4746 8.53232 19.4746 8.53232C19.6676 8.40366 19.0906 8.19032 19.0906 8.19032L18.4191 8.24414H17.9392C17.8971 8.24414 17.8366 8.23098 17.7685 8.21616C17.6808 8.19706 17.5804 8.17522 17.4902 8.17522C17.379 8.17522 17.1566 8.24703 16.9891 8.30111C16.9175 8.32424 16.8559 8.34413 16.8174 8.35377C16.7671 8.36626 16.6913 8.39962 16.6101 8.43533C16.4866 8.48964 16.3507 8.54938 16.2739 8.54938C16.1465 8.54938 15.9535 8.79095 15.9535 8.79095C15.9535 8.79095 15.7297 9.20056 15.9227 9.13623C16.1137 9.0719 16.3704 9.06862 16.4012 9.16512C16.417 9.21094 16.4398 9.27137 16.4629 9.33249C16.4877 9.39832 16.5128 9.46495 16.5299 9.51499C16.5614 9.61083 17.0097 9.64169 17.0097 9.64169C17.0097 9.64169 17.074 9.48152 17.1699 9.35351C17.2657 9.22551 17.3616 9.06534 17.3616 9.06534C17.3616 9.06534 17.5217 9.38568 17.5539 9.48152C17.5854 9.57801 17.4896 9.86553 17.4896 9.86553C17.4896 9.86553 17.1377 10.0894 17.0412 10.0894C16.9447 10.0894 16.3999 9.60886 16.3999 9.60886C16.2082 9.6732 16.048 9.76969 16.048 9.76969C15.8242 9.99419 15.5997 10.1859 15.5997 10.1859C15.5997 10.1859 15.4061 10.2502 15.2787 10.346C15.2213 10.389 15.134 10.4168 15.0483 10.4441C14.9429 10.4777 14.8399 10.5105 14.7975 10.5699C14.638 10.7937 14.8592 10.9539 14.8592 10.9539L14.6623 11.2099L14.5251 11.3064L14.0571 11.4029L13.7768 11.4502C13.8083 11.546 13.7459 11.8506 13.7459 11.8506V12.3934C13.7459 12.3934 14.2081 12.5215 14.3046 12.5215C14.3186 12.5215 14.3357 12.5222 14.3551 12.523C14.4677 12.5276 14.6569 12.5354 14.7667 12.4256C14.8934 12.2976 15.1021 12.0094 15.1658 11.9136C15.2295 11.8178 15.3161 11.7219 15.5091 11.6576C15.6208 11.6204 15.6764 11.5722 15.7225 11.5321C15.7554 11.5036 15.7835 11.4793 15.8235 11.4659C15.92 11.4337 16.2968 11.3694 16.2968 11.3694C16.2968 11.3694 16.5194 11.5302 16.6145 11.5939C16.6256 11.6014 16.6277 11.613 16.6304 11.6276C16.6387 11.6731 16.6525 11.7482 16.9565 11.8217V12.0751L17.3826 12.0429L17.1896 11.7869L17.1568 11.7784L16.7859 11.4029L16.7583 11.1147C16.7583 11.1147 17.1528 11.3386 17.2808 11.4029C17.4088 11.4666 17.6819 11.6582 17.6819 11.6582L17.8716 12.1059L18.1276 12.4184C18.0416 12.3114 17.8296 12.0094 18.1604 12.0094C18.1604 12.0094 18.465 12.0416 18.5609 12.0094C18.6574 11.9779 18.744 11.9464 18.8714 11.8821C18.9338 11.8507 18.9233 11.7813 18.9109 11.6999C18.8979 11.6145 18.883 11.5158 18.9482 11.4337C19.0768 11.2736 19.2436 11.2092 19.3394 11.1777C19.4359 11.1456 19.7582 10.9854 19.7582 10.9854L20.1127 11.0497C19.9532 11.1777 19.7621 11.3694 19.8895 11.3379C20.0175 11.3057 20.307 11.4659 20.4343 11.5617C20.5623 11.6576 20.4665 11.8821 20.4665 11.8821C20.4665 11.8821 20.1146 11.8499 19.8908 11.8178C19.6663 11.7862 19.3138 11.8499 19.3138 11.8499L19.0263 12.0094C19.0263 12.0094 18.8339 12.0738 18.8661 12.2333C18.8976 12.3934 19.0263 12.5864 19.1543 12.746C19.1829 12.7822 19.2101 12.8199 19.2359 12.856C19.325 12.9801 19.3996 13.084 19.4733 13.0341C19.5705 12.9698 19.8908 12.7781 19.8908 12.7781C19.8908 12.7781 19.8258 13.002 19.8586 13.1621C19.8908 13.3216 19.8908 13.5461 19.8908 13.5461C19.8908 13.5461 19.5705 13.5461 19.6663 13.6111C19.7383 13.6583 19.8341 13.809 19.9006 13.9136C19.9219 13.9472 19.9403 13.976 19.9538 13.9951C20.2742 14.4428 20.9463 15.4354 21.0107 15.5634C21.0374 15.618 21.0476 15.6845 21.0577 15.7501C21.0713 15.839 21.0846 15.9263 21.1387 15.9795C21.3304 16.1719 21.7144 15.9795 21.8102 15.9159C21.8403 15.8962 21.8921 15.867 21.952 15.8332C22.0843 15.7585 22.2563 15.6615 22.3222 15.5955C22.3607 15.5575 22.3789 15.5395 22.3989 15.5237C22.4292 15.4997 22.4635 15.4807 22.5795 15.4038C22.7712 15.2758 22.8992 15.1793 22.8034 15.0835C22.7075 14.9877 22.5159 14.6352 22.5159 14.6352C22.2264 14.6995 21.9389 14.5393 21.9389 14.4435C21.9389 14.3476 21.6829 13.9636 21.6829 13.9636C21.6829 13.9636 21.7144 13.9 21.9389 14.0273C22.024 14.0757 22.1043 14.1425 22.1816 14.2069C22.3088 14.3127 22.428 14.412 22.548 14.412C22.7255 14.412 22.8203 14.4666 23.0116 14.5768C23.0269 14.5856 23.0428 14.5948 23.0594 14.6043C23.1832 14.6746 23.2681 14.7548 23.3407 14.8234C23.3997 14.8792 23.4506 14.9273 23.5077 14.9562C23.6357 15.0205 23.8281 15.2765 23.8281 15.2765C23.8281 15.2765 24.0204 15.7248 24.0519 15.8535C24.0661 15.9088 24.1096 16.0119 24.1547 16.1189C24.1787 16.1757 24.2032 16.2337 24.2239 16.2861C24.2263 16.247 24.229 16.208 24.2316 16.169Z"
                        fill="#97D7EF" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="show_galery">
      <vue-easy-lightbox class="easy-lightbox" escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index"
        @hide="handleHide"></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { mapActions, mapState } from "vuex";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { $authHost, $host } from "../http/index.js"
import {
  QSpinnerGears,
  Loading
} from "quasar";


export default {
  components: {
    Swiper,
    SwiperSlide,
    VueEasyLightbox,
    "title-component": require("components/UI/Title.vue").default,
  },
  data() {
    return {
      teamList: '',
      structura_list: '',
      isActive: false,
      imgs: "",
      visible: false,
      index: 0,
      team: [],
      level1: '',
      level2: '',
      level3: ''
    };
  },

  setup() {
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
    };
  },
  methods: {
    ...mapActions("base", ["postQuery"]),

    showSingle(scr) {
      this.imgs = scr;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },

    async getTeam(otdel) {

      const teamTitleBtn = document.querySelectorAll(".teamlistBtn");
      teamTitleBtn.forEach((element) => {
        const dataFilter = element.getAttribute("data-filter");

        if (dataFilter == otdel) {
          console.log(dataFilter);
          console.log(otdel);
          element.classList.add("teamlistBtn_active");
        } else {
          element.classList.remove("teamlistBtn_active");
        }
      });
      this.isActive = true
      Loading.show({
        spinner: QSpinnerGears,
        backgroundColor: "bg"
      })
      try {
        await $host.get(`api/website/team_division/${otdel}`).then((res) =>
          this.teamList = res.data
        )
      } catch (e) {
        console.log(e);

      } finally {
        Loading.hide();
      }
    },

  },

  async created() {
    await $host.get(`api/website/team_division/Руководство`).then((res) =>
      this.teamList = res.data
    )
    Loading.show({
      spinner: QSpinnerGears,
      backgroundColor: "bg"
    })
    try {
      await $host.get(`api/website/structura`).then((res) => {
        this.structura_list = res.data
        this.level1 = res.data.filter((element) => {
          return element.level === "1"
        })
        this.level2 = res.data.filter((element) => {
          return element.level === "2"
        })
        this.level3 = res.data.filter((element) => {
          return element.level === "3"
        })
      }

      )
    } catch (e) {
      console.log(e);

    } finally {
      Loading.hide();
    }
  },
};
</script>

<style lang="scss" scoped>
.titles {
  margin-bottom: 50px;
}

.team_wrapper {
  position: relative;

  .main_container {
    max-width: 1210px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: $Montserrat-Regular, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 142.7%;
    color: #232323;

    img {
      margin-right: 15px;
    }
  }

  .team_title_card {
    display: block;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 17px 30px 25px;


    .title_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: start;
      padding-bottom: 14px;
      border-bottom: 2px solid #f2f2f2;


      .team_title {
        font-family: $Montserrat-Regular;
        padding-left: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 142.7%;
        color: #037798;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: #00a9aa;
        }
      }

      .teamlistBtn_active {

        color: #00a9aa;
      }
    }

    .description_text_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-top: 14px;

      .description_text {
        font-family: $Montserrat-Regular;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 142.7%;
        color: #232323;
        max-width: 269px;
        cursor: pointer;
        transition: 0.3s;
        padding-left: 10px;

        &:hover {
          color: #00a9aa;
        }
      }

      .teamlistBtn_active {
        color: #00a9aa;
      }
    }
  }

  .team_card_wrapper {
    margin-top: 36px;
    display: grid;
    justify-content: center;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 30px;

    .team_card {
      transition: 0.3s;
      padding: 30px 26px 12px;

      &:hover {
        box-shadow: 4px 4px 49px -5px rgba(34, 60, 80, 0.2);

        .card_img {
          img {
            transform: scale(1.2);
          }
        }
      }

      .card_img {
        margin-bottom: 13px;
        overflow: hidden;
        cursor: pointer;
        border-radius: 12px 12px 6px 6px;
        border-bottom: 11.97px solid #97d7ef;

        img {
          width: 100%;
          height: 100%;
          border-radius: 12px 12px 6px 6px;
          padding: 0;
          margin: 0;
          transition: 0.5s;
          transform: scale(1.05);
        }
      }

      .card_body {
        .card_title {
          font-family: $Montserrat-Regular;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          color: #232323;
          text-transform: capitalize;
        }

        .card_sescription {
          font-family: $Gilroy-Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #555555;
          margin-top: 8px;
          max-width: 240px;
        }

        .card_network_wrapper {
          display: flex;
          gap: 20px;
          margin-top: 13px;

          svg {
            transition: all 0.5s ease-in-out;

            &:hover {
              path {
                fill: #00a9aa;
              }
            }
          }
        }
      }
    }

    .team_card_remove {
      display: none;
    }

    .swiper_container {
      .slider_item {
        display: none;
      }
    }
  }

  .team_wrapper_bg {
    position: absolute;
    top: 180px;
    right: 65px;
    z-index: 2;

    img {
      max-height: 2281.33px;
      height: 100%;
    }
  }

  .team_card_bg {
    position: absolute;
    bottom: 0;
    left: -178px;
    z-index: 1;

    img {
      max-height: 800.99px;
      height: 100%;
    }
  }
}

//team end
@media (max-width: 1040px) {
  .team_wrapper {
    .team_card_wrapper {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }
  }
}

@media (max-width: 1047px) {
  .team_wrapper {
    .team_card_wrapper {
      justify-content: center;
    }
  }
}

@media (max-width: 992px) {
  .team_wrapper {
    .team_title_card {
      .title_wrapper {
        .team_title {
          font-size: 14px;
          line-height: 142.7%;
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .description_text_wrapper {
        .description_text {
          font-size: 12px;
          line-height: 142.7%;
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media (max-width: 860px) {
  .team_wrapper {
    .team_title_card {
      padding: 10px 10px 15px 10px;

      .title_wrapper {
        flex-direction: column;
        align-items: flex-start;
      }

      .description_text_wrapper {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}

@media (max-width: 650px) {
  .team_wrapper {
    .title {
      font-size: 24px;
      line-height: 142.7%;
      justify-content: center;
      margin-top: 40px;

      img {
        width: 10px;
        height: 10px;
        margin-right: 8px;
      }
    }

    .team_card_wrapper {
      display: block;
      padding: 0;

      .team_card {}

      .swiper_container {
        position: relative;
        margin-bottom: 60px;
        overflow: unset;

        .slider_item {
          display: flex;

          .team_card_slide {
            max-width: 100%;

            .card_img {
              margin-bottom: 12.5px;

              img {
                max-width: 100%;
                height: auto;
                width: 100%;
                border-radius: 12px 12px 6px 6px;
                padding: 0;
                margin: 0;
                border-bottom: 11.97px solid #97d7ef;
              }
            }

            .swiper_title {
              font-family: Montserrat-Medium;
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 17px;
              text-transform: capitalize;
              color: #232323;
            }

            .swiper_description {
              font-family: $Gilroy-Regular;
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              color: #555555;
              margin-top: 7px;
            }
          }

          .card_network {
            display: flex;
            gap: 21px;
            margin-top: 7px;
          }
        }
      }
    }

    .swiper_container {
      .team_card_remove {
        display: none !important;
      }
    }
  }
}
</style>
