<template>
  <div class="container">
    <div class="banner">
      <div class="content-w1350 box">
        <div class="text">ABOUT US</div>
        <div class="text1">The guardian of your business</div>
      </div>
    </div>
    <div class="content">
      <div class="section1">
        With over 5 years of continuous and independent R&D efforts, along with successful
        pilot project deployments, XSIM is dedicated to providing world-class AI-driven
        technology solutions to tackle the most complex water and wastewater treatment
        challenges. Our team consists of unrivaled experts from around the globe. XSIM
        demonstrates exceptional intelligence in learning complex dynamic patterns
        embedded within operational data, leveraging these insights to generate real-time
        forecasts, optimize control strategies, and reduce the carbon footprint.
      </div>
      <div class="content-w1200">
        <div class="text1" ref="contentRef1">
          Maximizing efficiency of your business without <br />compromising on safety is
          at the core of our value.
        </div>
        <div class="text2" ref="contentRef2">OUR SCOPE OF SERVICE INCLUDE:</div>
        <div class="section section2" ref="contentRef3">
          <div class="left">
            <div class="num">01</div>
            <div class="title">CONSULTING</div>
            <div class="text">Water Quality Diagnosis</div>
            <div class="text">Process Diagnosis</div>
            <div class="text">Customized Report Generation</div>
            <div class="text">Pain Points and Needs Assessment</div>
            <div class="text">Solution Customization</div>
          </div>
          <div class="right"></div>
        </div>
        <div class="section section3" ref="contentRef4">
          <div class="left"></div>
          <div class="right">
            <div class="num">02</div>
            <div class="title">DEPLOYMENT</div>
            <div class="text">Deployment and Installation</div>
            <div class="text">Trial Operations</div>
            <div class="text">Establishment of Operational Mechanisms</div>
            <div class="text">Software Usage Training</div>
            <div class="text">Post-Installation Parameter Adjustment Services</div>
          </div>
        </div>
        <div class="section section4" ref="contentRef5">
          <div class="left">
            <div class="num">03</div>
            <div class="title">AFTER-SALES SERVICE</div>
            <div class="text">Prompt Response</div>
            <div class="text">Emergency Plans</div>
            <div class="text">Regular Maintenance and Upgrades</div>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>
    <RequestDemo />
  </div>
</template>

<script setup>
import RequestDemo from "@/components/RequestDemo.vue";
import { onMounted, onUnmounted, ref } from "vue";

defineOptions({
  name: "AboutPage",
});

const contentRef1 = ref(null);
const contentRef2 = ref(null);
const contentRef3 = ref(null);
const contentRef4 = ref(null);
const contentRef5 = ref(null);

const scrollFun = function () {
  const currentScroll = document.querySelector("#app").scrollTop;
  const innerHeight = window.innerHeight;
  if (currentScroll >= contentRef1.value.offsetTop + 20 - innerHeight) {
    contentRef1.value.classList.add("add-animation");
  }
  if (currentScroll >= contentRef2.value.offsetTop + 20 - innerHeight) {
    contentRef2.value.classList.add("add-animation");
  }
  if (currentScroll >= contentRef3.value.offsetTop + 100 - innerHeight) {
    contentRef3.value.classList.add("add-animation");
  }
  if (currentScroll >= contentRef4.value.offsetTop + 100 - innerHeight) {
    contentRef4.value.classList.add("add-animation");
  }
  if (currentScroll >= contentRef5.value.offsetTop + 100 - innerHeight) {
    contentRef5.value.classList.add("add-animation");
  }
};

onMounted(() => {
  document.querySelector("#app").addEventListener("scroll", scrollFun);
});

onUnmounted(() => {
  document.querySelector("#app").removeEventListener("scroll", scrollFun);
});
</script>

<style lang="scss" scoped>
.container {
  height: max-content;
  .banner {
    position: relative;
    width: 100%;
    height: 923px;
    background: url("../../assets/imgs/banner-about.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;

    .box {
      position: absolute;
      left: 50%;
      top: 557px;
      transform: translateX(-50%);
    }
    .text {
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      letter-spacing: 0px;
      line-height: 76px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
      animation: fromLeftShow 1s;
    }
    .text1 {
      margin-top: 20px;
      font-size: 30px;
      font-weight: 500;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 40px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
      animation: fromLeftShow 1.6s;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
      310deg,
      rgba(13, 118, 118, 0.29) 0%,
      rgba(204, 204, 204, 0) 100%
    );
    .section1 {
      position: relative;
      margin-top: -166px;
      padding: 56px 118px;
      width: 1350px;
      border-radius: 75px;
      background: linear-gradient(
        180deg,
        rgba(0, 128, 128, 0.5) 0%,
        rgba(64, 224, 208, 0.1) 100%
      );
      font-size: 31px;
      font-weight: 400;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 40px;
      color: rgba(71, 71, 71, 1);
      text-align: justify;
      vertical-align: top;
      box-sizing: border-box;
      z-index: 999;
      animation: fromTopShow 1s;
    }

    .content-w1200 {
      margin-bottom: 100px;
      .text1 {
        margin: 50px 0 60px;
        font-size: 36px;
        font-weight: 600;
        font-family: Poppins;
        letter-spacing: 0px;
        line-height: 50px;
        color: rgba(255, 99, 71, 1);
        text-align: left;
        vertical-align: top;
      }
      .text1.add-animation {
        animation: fromLeftShow 1s;
      }
      .text2 {
        width: 500px;
        font-size: 72px;
        font-weight: 400;
        font-family: LeagueGothic;
        letter-spacing: 0px;
        color: rgba(71, 71, 71, 1);
        text-align: left;
        vertical-align: top;
      }
      .text2.add-animation {
        animation: fromLeftShow 1.6s;
      }
      .section {
        .num {
          font-size: 140px;
          font-weight: 600;
          font-family: Poppins;
          color: rgba(64, 224, 208, 1);
          text-align: left;
          vertical-align: top;
        }
        .title {
          font-size: 48px;
          font-weight: 600;
          font-family: Poppins;
          line-height: 40px;
          color: rgba(255, 99, 71, 1);
          text-align: left;
          vertical-align: top;
        }
        .text {
          margin-top: 20px;
          font-size: 24px;
          font-weight: 400;
          font-family: Poppins;
          letter-spacing: 0px;
          line-height: 40px;
          color: rgba(71, 71, 71, 1);
          text-align: left;
          vertical-align: top;
        }
      }
      .section2 {
        display: flex;
        justify-content: space-between;
        .right {
          margin-top: 40px;
          width: 624px;
          height: 515px;
          border-radius: 40px;
          background: url("../../assets/imgs/about-img1.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .section2.add-animation {
        .left {
          animation: fromLeftShow 1s;
        }
        .right {
          animation: fromRightShow 1s;
        }
      }
      .section3 {
        margin: 150px 0;
        display: flex;
        justify-content: space-between;
        .left {
          margin-top: 40px;
          width: 551px;
          height: 538px;
          opacity: 1;
          border-radius: 40px;
          background: url("../../assets/imgs/about-img2.png") no-repeat;
          background-size: 100% 100%;
        }
        .right {
          .num,
          .title,
          .text {
            text-align: right;
          }
        }
      }
      .section3.add-animation {
        .left {
          animation: fromLeftShow 1s;
        }
        .right {
          animation: fromRightShow 1s;
        }
      }
      .section4 {
        display: flex;
        justify-content: space-between;
        .right {
          margin-top: 40px;
          width: 538px;
          height: 491px;
          border-radius: 40px;
          background: url("../../assets/imgs/about-img3.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .section4.add-animation {
        .left {
          animation: fromLeftShow 1s;
        }
        .right {
          animation: fromRightShow 1s;
        }
      }
    }
  }
}
</style>
