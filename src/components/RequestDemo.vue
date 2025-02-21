<template>
  <div class="request-demo-container">
    <div class="content-w1200">
      <div class="left">
        Pioneering AI-driven solutions tailored for your wastewater treatment plant
      </div>
      <div class="right">
        <div class="box" @click="openDemo">Request a Demo</div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const openDemo = () => {
  // window.open("https://demo.xsimcopilot.ai/");
  router.push({
    path: "/Contact",
  });
};
</script>

<style lang="scss" scoped>
.request-demo-container {
  display: flex;
  justify-content: center;
  padding: 70px 0 80px;
  .content-w1200 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    width: 805px;
    font-size: 46px;
    font-weight: 600;
    font-family: Poppins;
    color: rgba(64, 224, 208, 1);
    text-align: left;
    vertical-align: top;

    animation: fromLeftShow 1s;
  }
  .right {
    animation: fromRightShow 1s;

    .box {
      padding: 30px;
      width: 222px;
      height: 177px;
      border: 6px solid rgba(222, 222, 222, 1);
      border-radius: 24px;
      background: rgba(255, 99, 71, 1);
      font-size: 36px;
      font-weight: 500;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 50px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
      box-sizing: border-box;
      cursor: pointer;
    }
    .line {
      margin-top: 30px;
      width: 216px;
      height: 12px;
      background: rgba(222, 222, 222, 1);
      border-radius: 4px;
    }
  }
}
</style>
