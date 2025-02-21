<template>
  <div class="footer-container">
    <div class="content-w1350">
      <div class="footer-title">
        <div class="logo"></div>
        <div class="text">XSIM AI Canada Inc.</div>
        <div class="back-top-btn" @click="backTop"></div>
      </div>
      <el-row class="content">
        <el-col :span="6">
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
        <el-col :span="6">
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

          <!-- <div class="title" style="margin-top: 40px">Demo</div>
          <div class="info">
            <img src="../../assets/imgs/icon-link.png" />
            <div class="demo-link" @click="openDemo">https://demo.xsimcopilot.ai/</div>
          </div> -->
        </el-col>
        <!-- <el-col :span="6">
          <el-input v-model="emailAddress" placeholder="Your email address">
            <template #append>
              <el-button v-loading="btnLoading" @click="toSend"
                >Send <img src="../../assets/imgs/icon-arrows.png"
              /></el-button>
            </template>
          </el-input>
        </el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script setup>
// import { ElMessage } from "element-plus";
// import { getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";

// const { proxy } = getCurrentInstance();

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

// const emailAddress = ref();
// const btnLoading = ref(false);

const selectMenu = (record = {}) => {
  router.push({
    path: record.path,
  });
};

// const toSend = () => {
//   if (!emailAddress.value || !emailAddress.value.trim()) {
//     ElMessage.warning("Please fill in your email.");
//     return;
//   }
//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.value)) {
//     ElMessage.warning("Please fill in a valid email address. ");
//     return;
//   }
//   btnLoading.value = true;
//   proxy.$http.post(`/send_us/?email=${emailAddress.value}`).then((res) => {
//     if (res.data.code === 200) {
//       ElMessage.success(
//         "Thank you for connecting with us. Our team will reach out to you shortly."
//       );
//     } else {
//       ElMessage.error(res.data.msg);
//     }
//     btnLoading.value = false;
//   });
// };

// const openDemo = () => {
//   window.open("https://demo.xsimcopilot.ai/");
// };

const backTop = () => {
  document.querySelector("#app") && document.querySelector("#app").scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: 600px;
  background: rgba(68, 73, 73, 1);
  background-image: url("../../assets/imgs/footer-bg.png");
  background-repeat: no-repeat;
  background-size: 1600px 1430px;
  background-position: 130% 26%;
  box-shadow: 0px -42px 65px -2px rgba(0, 128, 128, 0.2);
  overflow: hidden;

  .content-w1350 {
    margin: 50px auto;
  }
  .footer-title {
    display: flex;
    align-items: center;
    .logo {
      width: 260px;
      height: 138px;
      background: url("../../assets/imgs/logo.png") no-repeat;
      background-size: 100% 100%;
    }
    .text {
      margin: 16px 0 0 98px;
      font-size: 30px;
      font-weight: 600;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 42px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
    }

    .back-top-btn {
      margin-left: 576px;
      width: 46px;
      height: 46px;
      background: url("../../assets/imgs/back-top.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  .content {
    margin: 40px;

    .title {
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: 600;
      font-family: Poppins;
      letter-spacing: 0px;
      color: rgba(64, 224, 208, 1);
      text-align: left;
      vertical-align: top;
    }
    .link {
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 400;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 25.2px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
      cursor: pointer;
    }
    .info {
      display: flex;
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 400;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 25.2px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;

      img {
        margin: 2px 14px 0 0;
        width: 16px;
        height: 16px;
      }
    }
    .demo-link {
      cursor: pointer;
    }
    :deep(.el-input) {
      margin-left: 170px;
      width: 463px;
      height: 60px;
      border-radius: 36.38px;
      background: rgba(247, 247, 247, 1);
      border: 2px solid rgba(66, 214, 215, 1);
      .el-input__wrapper {
        width: 463px;
        border-radius: 36.38px;
        background: rgba(247, 247, 247, 1);
        box-shadow: none;

        .el-input__inner {
          font-size: 16px;
          font-weight: 400;
          font-family: Poppins;
          color: rgba(71, 71, 71, 1);
        }
      }
      .el-input-group__append {
        width: 128px;
        height: 56px;
        border-radius: 33px;
        overflow: hidden;
      }
      .el-button {
        width: 128px;
        height: 60px;
        font-size: 20px;
        font-weight: 500;
        font-family: Poppins;
        color: rgba(71, 71, 71, 1);
        border: none;
        border-radius: 33px;
        background: rgba(64, 224, 208, 1);

        img {
          margin-left: 20px;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
