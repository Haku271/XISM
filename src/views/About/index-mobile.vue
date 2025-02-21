<template>
  <div class="container">
    <div class="banner">
      <div class="box">
        <div class="text">ABOUT US</div>
        <div class="text1">
          The guardian of<br />
          your business
        </div>
      </div>
      <div class="demo-box">
        <div class="content" @click="openDemo">Request a Demo</div>
        <div class="line"></div>
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
      <div class="content-wrap">
        <div class="text1" ref="contentRef1">
          Maximizing efficiency of<br />
          your business without<br />
          compromising on<br />
          safety is at the core of<br />
          our value.
        </div>
        <div class="text2" ref="contentRef2">OUR SCOPE OF SERVICE INCLUDE:</div>
        <div class="section section2" ref="contentRef3">
          <div class="section-num">01</div>
          <div class="section-img"></div>
          <div class="section-content">
            <div class="title">CONSULTING</div>
            <div class="text">Water Quality Diagnosis</div>
            <div class="text">Process Diagnosis</div>
            <div class="text">Customized Report Generation</div>
            <div class="text">Pain Points and Needs Assessment</div>
            <div class="text">Solution Customization</div>
          </div>
        </div>
        <div class="section section3" ref="contentRef4">
          <div class="section-num">02</div>
          <div class="section-img"></div>
          <div class="section-content">
            <div class="title">DEPLOYMENT</div>
            <div class="text">Deployment and Installation</div>
            <div class="text">Trial Operations</div>
            <div class="text">Establishment of Operational Mechanisms</div>
            <div class="text">Software Usage Training</div>
            <div class="text">Post-Installation Parameter Adjustment Services</div>
          </div>
        </div>
        <div class="section section4" ref="contentRef5">
          <div class="section-num">03</div>
          <div class="section-img"></div>
          <div class="section-content">
            <div class="title">AFTER-SALES SERVICE</div>
            <div class="text">Prompt Response</div>
            <div class="text">Emergency Plans</div>
            <div class="text">Regular Maintenance and Upgrades</div>
          </div>
        </div>
      </div>
    </div>
    <RequestDemo />
  </div>
</template>

<script setup>
import RequestDemo from "@/components/RequestDemoMobile.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "AboutPage",
});

const router = useRouter();

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

const openDemo = () => {
  router.push({
    path: "/Contact",
  });
};
</script>

<style lang="scss" scoped>
.container {
  height: max-content;
  .banner {
    position: relative;
    width: 100%;
    height: 7.42rem;
    background: url("../../assets/imgs/banner-about-mobile.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    overflow: hidden;

    .box {
      margin-top: 1.88rem;
    }
    .text {
      font-size: 0.72rem;
      font-weight: 400;
      font-family: LeagueGothic;
      letter-spacing: 0px;
      line-height: 0.8rem;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      animation: fromLeftShow 1s;
    }
    .text1 {
      margin: 0.6rem 0;
      font-size: 0.24rem;
      font-weight: 500;
      font-family: Poppins;
      line-height: 0.3rem;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      animation: fromLeftShow 1.6s;
    }

    .demo-box {
      margin-top: 0.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      animation: fromRightShow 1s;
      .content {
        padding: 0.12rem;
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
        text-align: center;
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
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 0.2rem;
    background: linear-gradient(
      310deg,
      rgba(13, 118, 118, 0.29) 0%,
      rgba(204, 204, 204, 0) 100%
    );
    .section1 {
      position: relative;
      margin-top: -1.36rem;
      padding: 0.2rem 0.14rem;
      border-radius: 0.2rem;
      background: linear-gradient(
        180deg,
        rgba(64, 224, 208, 0.6) 0%,
        rgba(64, 224, 208, 0.1) 100%
      );
      font-size: 0.18rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 0.3rem;
      color: rgba(71, 71, 71, 1);
      text-align: left;
      box-sizing: border-box;
      z-index: 999;
      animation: fromTopShow 1s;
    }

    .content-wrap {
      margin: 0.26rem 0;
      .text1 {
        margin: 50px 0 60px;
        font-size: 0.2rem;
        font-weight: 600;
        font-family: Poppins;
        line-height: 0.26rem;
        color: rgba(255, 99, 71, 1);
        text-align: left;
        vertical-align: top;
      }
      .text1.add-animation {
        animation: fromLeftShow 1s;
      }
      .text2 {
        padding: 0.4rem 0;
        font-size: 0.3rem;
        font-weight: 400;
        font-family: LeagueGothic;
        line-height: 0.36rem;
        color: rgba(71, 71, 71, 1);
      }
      .text2.add-animation {
        animation: fromLeftShow 1.6s;
      }
      .section {
        display: flex;
        flex-direction: column;
        .section-num {
          font-size: 0.48rem;
          font-weight: 600;
          font-family: Poppins;
          color: rgba(64, 224, 208, 1);
        }
        .section-img {
          width: 100%;
          height: 2.93rem;
        }
        .title {
          margin: 0.2rem 0 0.1rem;
          font-size: 0.26rem;
          font-weight: 600;
          font-family: Poppins;
          line-height: 0.4rem;
          color: rgba(255, 99, 71, 1);
        }
        .text {
          display: flex;
          margin-top: 0.08rem;
          font-size: 0.18rem;
          font-weight: 400;
          font-family: Poppins;
          line-height: 0.3rem;
          color: rgba(71, 71, 71, 1);

          &::before {
            content: "";
            display: inline-block;
            margin: 0.12rem 0.08rem 0 0;
            min-width: 0.06rem;
            height: 0.06rem;
            background: rgba(71, 71, 71, 1);
            border-radius: 50%;
          }
        }
      }
      .section2 {
        .section-img {
          background: url("../../assets/imgs/about-mobile-img1.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .section2.add-animation {
        .section-num,
        .section-img {
          animation: fromLeftShow 1s;
        }
        .section-content {
          animation: fromRightShow 1s;
        }
      }
      .section3 {
        margin: 0.5rem 0;
        .section-img {
          background: url("../../assets/imgs/about-mobile-img2.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .section3.add-animation {
        .section-num,
        .section-img {
          animation: fromLeftShow 1s;
        }
        .section-content {
          animation: fromRightShow 1s;
        }
      }
      .section4 {
        .section-img {
          background: url("../../assets/imgs/about-mobile-img3.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .section4.add-animation {
        .section-num,
        .section-img {
          animation: fromLeftShow 1s;
        }
        .section-content {
          animation: fromRightShow 1s;
        }
      }
    }
  }
}
</style>
