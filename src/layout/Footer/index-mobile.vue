<template>
  <div class="footer-container">
    <div class="footer-title">
      <div class="logo"></div>
      <div class="text">XSIM AI Canada Inc.</div>
      <div class="back-top-btn" @click="backTop"></div>
    </div>
    <el-row class="content">
      <el-col :span="24">
        <div class="title">Company</div>
        <div
          class="link"
          v-for="item in navList"
          :key="item.name"
          @click="selectMenu(item)"
        >
          {{ item.name }}
        </div>
      </el-col>
      <el-col :span="24">
        <div class="title">Get in touch</div>
        <div class="info">
          <img src="../../assets/imgs/icon-phone.png" />
          <div>416.580.4452</div>
        </div>
        <div class="info">
          <img src="../../assets/imgs/icon-email.png" />
          <div>arcare@xsimcopilot.ai</div>
        </div>
        <div class="info">
          <img src="../../assets/imgs/icon-address.png" />
          <div>Unit 403, 206 Placer Ct, North York ON Canada M5H 4A1</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

defineOptions({
  name: "FooterPage",
});

const router = useRouter();

const navList = [
  { name: "Home", path: "/Home" },
  { name: "Products", path: "/Products" },
  { name: "About", path: "/About" },
  { name: "Case Studies", path: "/CaseStudies" },
  { name: "Contact", path: "/Contact" },
];

const selectMenu = (record = {}) => {
  router.push({
    path: record.path,
  });
};

const backTop = () => {
  document.querySelector("#app") && document.querySelector("#app").scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: 6.26rem;
  background: rgba(68, 73, 73, 1);
  background-image: url("../../assets/imgs/footer-bg-mobile.png");
  background-repeat: no-repeat;
  background-size: 180% 8rem;
  background-position: 4% 0rem;
  box-shadow: 0px -42px 65px -2px rgba(0, 128, 128, 0.2);
  overflow: hidden;

  .footer-title {
    position: relative;
    overflow: hidden;
    .logo {
      margin-top: 0.2rem;
      width: 1.13rem;
      height: 0.6rem;
      background: url("../../assets/imgs/logo.png") no-repeat;
      background-size: 100% 100%;
    }
    .text {
      padding: 0 0.2rem;
      font-size: 0.18rem;
      font-weight: 600;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 0.26rem;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
    }

    .back-top-btn {
      position: absolute;
      top: 0.4rem;
      right: 0.3rem;
      width: 0.2rem;
      height: 0.2rem;
      background: url("../../assets/imgs/back-top.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  .content {
    padding: 0.3rem 0.2rem;

    .el-col {
      &:nth-child(1) {
        margin-bottom: 0.45rem;
      }
    }

    .title {
      margin-bottom: 0.16rem;
      font-size: 0.18rem;
      font-weight: 600;
      font-family: Poppins;
      line-height: 0.25rem;
      color: rgba(64, 224, 208, 1);
    }
    .link {
      margin-bottom: 0.1rem;
      font-size: 0.16rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 0.2rem;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
    .info {
      display: flex;
      margin-bottom: 0.1rem;
      font-size: 0.16rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 0.22rem;
      color: rgba(255, 255, 255, 1);

      img {
        margin: 0.04rem 0.12rem 0 0;
        width: 0.12rem;
        height: 0.12rem;
      }
    }
  }
}
</style>
