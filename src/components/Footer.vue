<template>
  <div v-if="contacts.length > 0" class="footer_wrapper" id="Contact">
    <div class="main_container">
      <footer>
        <div class="logo">
          <a href="#"><img src="../assets/images/logo.svg" /></a>
        </div>
        <div class="footer_link">
          <img src="../assets/images/footer/location.svg" />
          <p>{{ contacts[0].adres }}</p>
        </div>
        <div class="footer_link">
          <img src="../assets/images/footer/call.svg" />
          <a href="tel:+78632014447">{{ contacts[0].tel }}</a>
        </div>
        <div class="footer_link">
          <img src="../assets/images/footer/email.svg" />
          <a href="#">{{ contacts[0].email }}</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { $authHost, $host } from "../http/index.js"
export default {
  data() {
    return {
      contacts: '',
    };
  },

  async created() {
    await $host.get(`api/website/contacts`).then((res) => {
      this.contacts = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.footer_wrapper {
  width: 100%;
  max-width: 100%;
  background: #fff;

  .main_container {
    max-width: 1210px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px 0;

  .logo {
    img {
      height: 100px;
    }
  }

  .footer_link {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 8px;

    a {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #232323;
      text-decoration: none;
    }

    p {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #232323;
      text-decoration: none;
      max-width: 254px;
    }
  }
}

@media (max-width: 992px) {
  .footer {
    .footer_link {
      a {
        font-size: 14px;
        line-height: 17px;
      }

      p {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
}

@media (max-width: 870px) {
  footer {
    flex-direction: column;
    justify-content: center;
  }
}

@media (max-width: 490px) {
  footer {
    justify-content: center;
    flex-direction: column;
    padding: 25px 0;
  }
}
</style>
