<template>
  <div class="request-demo-container">
    <div class="top">
      Pioneering AI-driven solutions tailored for your wastewater treatment plant
    </div>
    <div class="bottom">
      <div class="box" @click="openDemo">Request a Demo</div>
      <div class="line"></div>
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
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0.2rem 0.6rem;

  .top {
    font-size: 0.3rem;
    font-weight: 600;
    font-family: Poppins;
    color: rgba(64, 224, 208, 1);
    line-height: 0.42rem;

    animation: fromLeftShow 1s;
  }
  .bottom {
    margin: 0.3rem auto 0;
    animation: fromRightShow 1s;

    .box {
      padding: 0.12rem 0.15rem;
      width: 1.12rem;
      height: 0.8rem;
      border: 0.04rem solid rgba(222, 222, 222, 1);
      border-radius: 0.1rem;
      background: rgba(255, 99, 71, 1);
      font-size: 0.18rem;
      font-weight: 500;
      font-family: Poppins;
      line-height: 0.25rem;
      color: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      cursor: pointer;
    }
    .line {
      margin-top: 0.1rem;
      width: 1.08rem;
      height: 0.06rem;
      background: rgba(222, 222, 222, 1);
      border-radius: 0.02rem;
    }
  }
}
</style>
