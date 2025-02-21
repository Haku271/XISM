<template>
  <div class="container">
    <div class="banner">
      <div class="content-w1350 box">
        <div class="text">XSIM AI COPILOT</div>
        <div class="text1">
          Your trusted AI Copilot, ready to tackle complex wastewater challenges
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-w1200">
        <div class="text">
          Through continual self-learning, our system aims to tackle all challenges facing
          by your plant including but not limited to:
        </div>
        <div class="text1">Difficulties in meeting stringent discharge standards</div>
        <div class="text1">Struggling in adopting predictive maintenance</div>
        <div class="text1">Potential risk associated with aging assets</div>
        <div class="text1">Operational risks due to human error</div>
        <div class="text2">
          By integrating the noval AI innovation into the treatment processes, <br />you
          will benefit from a dual advantage of safety and cost-effectiveness.
        </div>
      </div>
    </div>
    <div class="content1" ref="contentRef1">
      <div class="content-w1200">
        <div class="title">KEY TECHNOLOGIES</div>
        <div class="info">
          <div class="info-item">Machine Learning</div>
          <div class="info-item">Simulation</div>
          <div class="info-item">Big Data and Cloud Computing</div>
          <div class="info-item">Internet of Things (IoT)</div>
          <div class="info-item">Mobile Edge Computing (MEC)</div>
        </div>
      </div>
    </div>
    <div class="content2" ref="contentRef2">
      <div class="content-w1200">
        <div class="title">XSIM AI COPILOT CONTROL SYSTEM</div>
        <div class="info-wrap">
          <div class="describe">
            <div class="text">
              Our pioneering AI-driven product ensures you with a peaceful mind of having
              not to worry about compliance of more and more stringent discharge standards
              at the expense of lower efficiency.
            </div>
            <div class="text">
              We strive to help you achieve your maximum capacity in an environmental
              friendly manner through the use of forefront AI technologies.
            </div>
          </div>

          <div class="right">
            <div class="architecture-wrap">
              <div class="architecture-item">
                XSIM Industrial<br />
                Large Model
              </div>
              <div class="architecture-content">
                <div class="architecture-item1">
                  Large Industrial<br />
                  Knowledge<br />
                  Database
                </div>
                <div class="architecture-item2">
                  <div class="box1"></div>
                  Mixture of<br />
                  Experts (MoE)<br />
                  Architecture
                  <div class="box2"></div>
                </div>
                <div class="architecture-item1">
                  Model-Training<br />
                  Powered by<br />
                  Reinforcement Learning
                </div>
              </div>
              <div class="architecture-item">
                Smart System <br />Infrastructure to Drive<br />
                Optimization & Control
              </div>
            </div>
            <div class="next-arrows"></div>
            <div class="technologies-wrap">
              <div class="technologies-title">
                Key<br />
                Technologies
              </div>
              <div class="technologies-item">Simulation Modules</div>
              <div class="technologies-item">Load Equalization</div>
              <div class="technologies-item">Load Sensing</div>
            </div>
            <div class="text">
              End-to-end industrial-grade applications of cutting-edge<br />
              AI framework by integrating Q&A, control and planning.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content3" ref="contentRef3">
      <div class="content-w1200">
        <div class="text">
          XSIM AI Copilot orchestrates the entire treatment process flow, seamlessly
          integrating and <br />securing the safety of various intelligent units. Through
          AI engagement, your business will <br />demonstrate significant improvements in
          efficiencies.
        </div>
        <div class="charts-wrap"></div>
        <div class="info-wrap">
          <div class="info-item">
            <img src="../../assets/imgs/icon-arrows-right.png" />
            <div class="text">Enhanced stability leads to improved safety</div>
          </div>
          <div class="info-item">
            <img src="../../assets/imgs/icon-arrows-right.png" />
            <div class="text">
              Stability and safety zone contributes to improved cost-efficiency
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content4" ref="contentRef4">
      <div class="content-w1200">
        <div class="info-wrap">
          <div class="left">
            <div class="title">
              REAL-TIME<br />
              DATA ANALYSIS
            </div>
            <div class="text">
              Our platform enables <br />access to the performance <br />of all units in
              your business. <br />It allows easy detection of <br />abnormal performance
              of <br />actuators on demand.
            </div>
          </div>
          <div class="right">
            <el-carousel trigger="click">
              <el-carousel-item>
                <img src="../../assets/imgs/products-img3.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/imgs/products-img7.png" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="info-wrap1">
          <div class="title">INDIVIDUAL CONTROL UNITS</div>
          <div class="text">
            Under the control of XSIM AI Copilot, <br />various control units collaborates
            to <br />ensure efficient use of resources <br />through our key technologies
            such as <br />load equalization and load sensing.
          </div>
          <div class="system-wrap">
            <div class="system-item system-item1">Smart <br />Aeration <br />System</div>
            <div class="system-item system-item2">
              Smart <br />Carbon Source <br />Dosing System
            </div>
            <div class="system-item system-item3">
              Smart<br />
              Chemical Treatment <br />Control System
            </div>
            <div class="system-item system-item4">
              Smart <br />Detoxification ORP <br />Control System
            </div>
            <div class="system-item system-item5">
              Smart <br />Ozonation <br />Control System
            </div>
          </div>
        </div>
      </div>
    </div>
    <RequestDemo />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import RequestDemo from "@/components/RequestDemo.vue";

defineOptions({
  name: "ProductsPage",
});

const contentRef1 = ref(null);
const contentRef2 = ref(null);
const contentRef3 = ref(null);
const contentRef4 = ref(null);

const scrollFun = function () {
  const currentScroll = document.querySelector("#app").scrollTop;
  const innerHeight = window.innerHeight;
  if (currentScroll >= contentRef1.value.offsetTop + 100 - innerHeight) {
    contentRef1.value.classList.add("add-animation");
  }
  if (currentScroll >= contentRef2.value.offsetTop + 100 - innerHeight) {
    contentRef2.value.classList.add("add-animation");
  }
  if (currentScroll >= contentRef3.value.offsetTop + 100 - innerHeight) {
    contentRef3.value.classList.add("add-animation");
  }
  if (currentScroll >= contentRef4.value.offsetTop + 100 - innerHeight) {
    contentRef4.value.classList.add("add-animation");
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
    background: url("../../assets/imgs/banner-products.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;

    .box {
      position: absolute;
      left: 50%;
      top: 580px;
      transform: translateX(-50%);
    }
    .text {
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      letter-spacing: 0px;
      line-height: 76px;
      color: rgba(64, 224, 208, 1);
      text-align: left;
      vertical-align: top;
      animation: fromLeftShow 1s;
    }
    .text1 {
      margin-top: 20px;
      width: 840px;
      font-size: 30px;
      font-weight: 500;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 40px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
      animation: fromLeftShow 1s;
    }
  }
  .content-w1200 {
    margin: 0 auto;
  }
  .content {
    padding: 48px 0 68px;

    .content-w1200 {
      margin: 0 auto;
      background: url("../../assets/imgs/home-img1.png") no-repeat;
      background-size: 465px 474px;
      background-position: 100% 50%;
    }
    .text {
      margin-bottom: 46px;
      width: 674px;
      font-size: 30px;
      font-weight: 400;
      font-family: Poppins;
      line-height: 40px;
      color: rgba(71, 71, 71, 1);
      animation: fromLeftShow 1s;
    }
    .text1 {
      font-size: 24px;
      font-weight: 400;
      font-family: Poppins;
      line-height: 40px;
      color: rgba(255, 99, 71, 1);
      animation: fromRightShow 1.5s;
    }
    .text2 {
      margin-top: 46px;
      width: 756px;
      font-size: 20px;
      font-weight: 500;
      font-family: Poppins;
      line-height: 28px;
      color: rgba(71, 71, 71, 1);
      animation: fromLeftShow 2s;
    }
  }
  .content1 {
    padding: 96px 0;
    background: url("../../assets/imgs/products-bg1.png") no-repeat;
    background-size: 100% 100%;

    .content-w1200 {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    .title {
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(255, 255, 255, 1);
    }
    .info-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 437px;
      height: 70px;
      font-size: 24px;
      font-weight: 400;
      font-family: Poppins;
      line-height: 60px;
      color: rgba(255, 255, 255, 1);
      border-radius: 187px;
      background: rgba(24, 108, 108, 1);
      border: 4px solid rgba(64, 224, 208, 1);
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
  .content1.add-animation {
    .title {
      animation: fromLeftShow 1s;
    }
    .info {
      animation: fromRightShow 1s;
    }
  }
  .content2 {
    padding-top: 70px;

    .title {
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
    }
    .info-wrap {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      .describe {
        margin-top: 90px;
        width: 326px;
        font-size: 24px;
        font-weight: 400;
        font-family: Poppins;
        line-height: 36px;
        color: rgba(71, 71, 71, 1);
        .text {
          margin-bottom: 50px;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 0 55px;
        width: 798px;
        border-radius: 40px;
        background: linear-gradient(
          0deg,
          rgba(2, 122, 122, 0.6) 0%,
          rgba(64, 224, 208, 0) 100%
        );

        .architecture-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;

          font-size: 24px;
          font-weight: 400;
          font-family: Poppins;
          line-height: 33.6px;
          color: rgba(71, 71, 71, 1);
        }
        .architecture-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 294px;
          height: 161px;
          border-radius: 121px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 21px rgba(255, 99, 71, 0.25);
          text-align: center;
        }
        .architecture-content {
          display: flex;
          align-items: center;

          .architecture-item1 {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 34px;
            width: 255px;
            height: 161px;
            border-radius: 36px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 21px rgba(64, 224, 208, 0.25);
            box-sizing: border-box;
          }
          .architecture-item2 {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 240px;
            font-size: 40px;
            font-weight: 400;
            font-family: LeagueGothic;
            line-height: 48px;
            color: rgba(255, 99, 71, 1);
            overflow: hidden;

            &::before {
              content: "";
              margin: 10px;
              display: inline-block;
              width: 30px;
              height: 22px;
              background: url("../../assets/imgs/icon-triangle.png") no-repeat;
              background-size: 100% 100%;
            }
            &::after {
              content: "";
              margin: 10px;
              display: inline-block;
              width: 30px;
              height: 22px;
              background: url("../../assets/imgs/icon-triangle.png") no-repeat;
              background-size: 100% 100%;
            }

            .box1 {
              position: absolute;
              top: 50%;
              left: -80px;
              width: 146px;
              height: 180px;
              background: url("../../assets/imgs/products-img5.png") no-repeat;
              background-size: 100% 100%;
              transform: translateY(-50%);
            }
            .box2 {
              position: absolute;
              top: 50%;
              right: -80px;
              width: 146px;
              height: 180px;
              background: url("../../assets/imgs/products-img6.png") no-repeat;
              background-size: 100% 100%;
              transform: translateY(-50%);
            }
          }
        }
        .technologies-wrap {
          position: relative;
          width: 500px;
          height: 450px;
          background: url("../../assets/imgs/products-img1.png") no-repeat;
          background-size: 100% 100%;

          .technologies-title {
            position: absolute;
            left: 50%;
            top: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 256px;
            height: 256px;
            font-size: 40px;
            font-weight: 400;
            font-family: LeagueGothic;
            line-height: 48px;
            color: rgba(255, 255, 255, 1);
            background: rgba(255, 99, 71, 1);
            border-radius: 50%;
            box-shadow: 0px 2px 23px rgba(0, 128, 128, 0.25);
            text-align: center;
            transform: translatex(-50%);
          }
          .technologies-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 144px;
            height: 144px;
            font-size: 24px;
            font-weight: 400;
            font-family: Load Equalization;
            line-height: 33.6px;
            color: rgba(71, 71, 71, 1);
            background: rgba(255, 255, 255, 1);
            border: 2px solid rgba(255, 99, 71, 1);
            border-radius: 50%;
            text-align: center;

            &:nth-child(2) {
              position: absolute;
              left: 50%;
              top: 70px;
              transform: translateX(-50%);
            }
            &:nth-child(3) {
              position: absolute;
              left: 50px;
              bottom: 10px;
            }
            &:nth-child(4) {
              position: absolute;
              right: 50px;
              bottom: 10px;
            }
          }
        }
        .next-arrows {
          margin: 36px 0;
          width: 94px;
          height: 55px;
          background: url("../../assets/imgs/icon-arrows-down.png") no-repeat;
          background-size: 100% 100%;
        }
        .text {
          margin-top: 46px;
          font-size: 24px;
          font-weight: 400;
          font-family: Poppins;
          line-height: 33.6px;
          color: rgba(71, 71, 71, 1);
        }
      }
    }
  }
  .content2.add-animation {
    .title {
      animation: fromLeftShow 1s;
    }
    .describe {
      animation: fromLeftShow 1.5s;
    }
    .right {
      animation: fromRightShow 1.5s;
    }
  }
  .content3 {
    padding: 80px 0;
    background: url("../../assets/imgs/products-bg2.png") no-repeat;
    background-size: 100% 100%;

    .text {
      font-size: 24px;
      font-weight: 400;
      font-family: Poppins;
      line-height: 36px;
      color: rgba(255, 255, 255, 1);
    }
    .charts-wrap {
      margin: 70px 0 20px;
      width: 1276px;
      height: 330px;
      background: url("../../assets/imgs/products-img2.png") no-repeat;
      background-size: 100% 100%;
    }
    .info-wrap {
      display: flex;
      justify-content: center;

      .info-item {
        display: flex;
        margin: 0 22px;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        font-weight: 500;
        font-family: Poppins;
        line-height: 30px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        &:nth-child(1) {
          .text {
            width: 340px;
          }
        }
        &:nth-child(2) {
          .text {
            width: 500px;
          }
        }
        img {
          margin-bottom: 20px;
          width: 52px;
          height: 48px;
        }
      }
    }
  }
  .content3.add-animation {
    .text {
      animation: fromLeftShow 1s;
    }
    .charts-wrap {
      animation: fromLeftShow 1.5s;
    }
    .info-wrap {
      animation: fromRightShow 1.5s;
    }
  }
  .content4 {
    padding: 104px 0;
    height: 1788px;
    background: linear-gradient(
      216.64deg,
      rgba(13, 118, 118, 0.29) 0%,
      rgba(204, 204, 204, 0) 100%
    );
    box-sizing: border-box;

    .content-w1200 {
      margin: 0 auto;
    }
    .info-wrap {
      display: flex;

      .left {
        width: 354px;
      }

      .title {
        margin-bottom: 122px;
        font-size: 72px;
        font-weight: 400;
        font-family: LeagueGothic;
        color: rgba(255, 99, 71, 1);
      }
      .text {
        font-size: 24px;
        font-weight: 400;
        font-family: Poppins;
        line-height: 36px;
        color: rgba(71, 71, 71, 1);
      }
      .right {
        margin: -50px -40px 0 0;
        width: calc(100% - 220px);
        height: 640px;

        :deep(.el-carousel) {
          width: 100%;
          height: 100%;
          .el-carousel__container {
            width: 100%;
            height: 100%;
          }
          .el-carousel__arrow,
          .el-carousel__indicators {
            display: none;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .info-wrap1 {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .title {
        margin: 80px 0;
        font-size: 72px;
        font-weight: 400;
        font-family: LeagueGothic;
        color: rgba(64, 224, 208, 1);
      }
      .text {
        font-size: 24px;
        font-weight: 400;
        font-family: Poppins;
        line-height: 36px;
        color: rgba(71, 71, 71, 1);
      }
      .system-wrap {
        position: absolute;
        top: 140px;
        left: 0;
        font-size: 30px;
        font-weight: 500;
        font-family: Poppins;
        line-height: 30px;
        color: rgba(255, 99, 71, 1);
        text-align: center;
      }
      .system-item {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("../../assets/imgs/products-img4.png") no-repeat;
        background-size: 100% 100%;
      }
      .system-item1,
      .system-item5 {
        width: 276px;
        height: 276px;
      }
      .system-item2,
      .system-item4 {
        width: 306px;
        height: 306px;
      }
      .system-item3 {
        width: 342px;
        height: 342px;
      }
      .system-item1 {
        left: 40px;
      }
      .system-item2 {
        top: 122px;
        left: 304px;
      }
      .system-item3 {
        top: 296px;
        left: 0;
      }
      .system-item4 {
        top: 326px;
        left: 546px;
      }
      .system-item5 {
        top: 510px;
        left: 318px;
      }
    }
  }
  .content4.add-animation {
    .info-wrap {
      .left {
        animation: fromLeftShow 1s;
      }
      .right {
        animation: fromRightShow 1.5s;
      }
    }
    .info-wrap1 {
      .title {
        animation: fromRightShow 2s;
      }
      .text {
        animation: fromRightShow 2.5s;
      }
      .system-wrap {
        animation: fromBottomShow 2.5s;
      }
    }
  }
}
</style>
