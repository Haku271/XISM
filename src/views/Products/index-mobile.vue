<template>
  <div class="container">
    <div class="banner">
      <div class="box">
        <div class="text">XSIM AI COPILOT</div>
        <div class="text1">
          Your trusted AI Copilot,<br />
          ready to tackle<br />
          complex wastewater<br />
          challenges
        </div>
      </div>
      <div class="demo-box">
        <div class="content" @click="openDemo">Request a Demo</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="content">
      <div class="text">
        Through continual self-learning, our system aims to tackle all challenges facing
        by your plant including but not limited to:
      </div>
      <div class="text1">Difficulties in meeting stringent discharge standards</div>
      <div class="text1">Struggling in adopting predictive maintenance</div>
      <div class="text1">Potential risk associated with aging assets</div>
      <div class="text1">Operational risks due to human error</div>
      <div class="text2">
        By integrating the noval AI innovation into the treatment processes, you will
        benefit from a dual advantage of safety and cost-effectiveness.
      </div>
    </div>
    <div class="content1" ref="contentRef1">
      <div class="header">
        <div class="title">KEY TECHNOLOGIES</div>
      </div>
      <div class="info">
        <div class="info-item">Machine Learning</div>
        <div class="info-item">Simulation</div>
        <div class="info-item">Big Data and Cloud Computing</div>
        <div class="info-item">Internet of Things (IoT)</div>
        <div class="info-item">Mobile Edge Computing (MEC)</div>
      </div>
    </div>
    <div class="content2" ref="contentRef2">
      <div class="title">
        XSIM AI COPILOT<br />
        CONTROL SYSTEM
      </div>
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

        <div class="architecture">
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
    <div class="content3" ref="contentRef3">
      <div class="text">
        XSIM AI Copilot orchestrates the entire treatment process flow, seamlessly
        integrating and <br />securing the safety of various intelligent units. Through AI
        engagement, your business will <br />demonstrate significant improvements in
        efficiencies.
      </div>
      <div class="charts-wrap charts-wrap1"></div>
      <div class="info-item">
        <img src="../../assets/imgs/icon-arrows-down.png" />
        <div class="text">Enhanced stability leads to improved safety</div>
      </div>
      <div class="charts-wrap charts-wrap2"></div>
      <div class="info-item">
        <img src="../../assets/imgs/icon-arrows-down.png" />
        <div class="text">
          Stability and safety zone contributes to improved cost-efficiency
        </div>
      </div>
      <div class="charts-wrap charts-wrap3"></div>
    </div>
    <div class="content4" ref="contentRef4">
      <div class="info-wrap">
        <div class="title">
          REAL-TIME DATA<br />
          ANALYSIS
        </div>
        <div class="carousel-wrap">
          <el-carousel trigger="click">
            <el-carousel-item>
              <img src="../../assets/imgs/products-img3.png" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/imgs/products-img7.png" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="text">
          Our platform enables <br />access to the performance <br />of all units in your
          business. <br />It allows easy detection of <br />abnormal performance of
          <br />actuators on demand.
        </div>
      </div>
      <div class="info-wrap1">
        <div class="title">
          INDIVIDUAL<br />
          CONTROL UNITS
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
        <div class="text">
          Under the control of XSIM AI Copilot, various control units collaborates to
          ensure efficient use of resources through our key technologies such as load
          equalization and load sensing.
        </div>
      </div>
    </div>
    <RequestDemo />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import RequestDemo from "@/components/RequestDemoMobile.vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "ProductsPage",
});

const router = useRouter();

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
    background: url("../../assets/imgs/banner-products-mobile.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    overflow: hidden;

    .box {
      margin-top: 2.06rem;
    }
    .text {
      font-size: 0.6rem;
      font-weight: 400;
      font-family: LeagueGothic;
      line-height: 0.48rem;
      color: rgba(64, 224, 208, 1);
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
    padding: 0.5rem 0.2rem 0.36rem;
    background: url("../../assets/imgs/home-img1.png") no-repeat;
    background-size: 2.8rem 2.8rem;
    background-position: 50% 40%;

    .text {
      margin-bottom: 0.3rem;
      font-size: 0.2rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 0.3rem;
      color: rgba(71, 71, 71, 1);
      animation: fromLeftShow 1s;
    }
    .text1 {
      display: flex;
      font-size: 0.18rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 0.24rem;
      color: rgba(255, 99, 71, 1);
      animation: fromRightShow 1.5s;

      &::before {
        content: "";
        display: inline-block;
        margin: 0.1rem 0.1rem 0 0;
        min-width: 0.06rem;
        height: 0.06rem;
        background: rgba(255, 99, 71, 1);
        border-radius: 50%;
      }
    }
    .text2 {
      margin-top: 0.3rem;
      font-size: 0.16rem;
      font-weight: 500;
      font-family: Poppins;
      line-height: 0.22rem;
      color: rgba(71, 71, 71, 1);
      animation: fromLeftShow 2s;
    }
  }
  .content1 {
    background: linear-gradient(
      360deg,
      rgba(13, 88, 90, 1) 0%,
      rgba(63, 77, 77, 0.44) 100%
    );
    overflow: hidden;
    .header {
      height: 1.4rem;
      background: url("../../assets/imgs/products-mobile-bg1.png") no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
    }
    .title {
      margin: 0.7rem 0 0 0.2rem;
      font-size: 0.4rem;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(255, 255, 255, 1);
    }
    .info {
      margin: 0.4rem 0 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .info-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 0.6rem;
      font-size: 0.18rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 0.25rem;
      color: rgba(255, 255, 255, 1);
      border-radius: 1.87rem;
      background: rgba(24, 108, 108, 1);
      border: 0.03rem solid rgba(64, 224, 208, 1);
      &:not(:last-child) {
        margin-bottom: 0.2rem;
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
    padding: 0.5rem 0.2rem;

    .title {
      font-size: 0.4rem;
      font-weight: 400;
      font-family: LeagueGothic;
      text-align: center;
      color: rgba(64, 224, 208, 1);
    }
    .info-wrap {
      .describe {
        margin: 0.6rem 0 0.4rem;
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.26rem;
        color: rgba(71, 71, 71, 1);
        .text {
          margin-bottom: 0.3rem;
        }
      }
      .architecture {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 0 0.5rem;
        border-radius: 0.24rem;
        background: linear-gradient(
          0deg,
          rgba(2, 122, 122, 0.6) 0%,
          rgba(64, 224, 208, 0) 100%
        );

        .architecture-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;

          font-size: 0.13rem;
          font-weight: 400;
          font-family: Poppins;
          line-height: 0.18rem;
          color: rgba(71, 71, 71, 1);
        }
        .architecture-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.86rem;
          height: 0.68rem;
          border-radius: 1.21rem;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0.02rem 0.21rem rgba(255, 99, 71, 0.25);
          text-align: center;
        }
        .architecture-content {
          display: flex;
          align-items: center;

          .architecture-item1 {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 0.02rem;
            width: 1.07rem;
            height: 0.85rem;
            border-radius: 0.2rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0.02rem 0.21rem rgba(64, 224, 208, 0.25);
            box-sizing: border-box;
          }
          .architecture-item2 {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1.15rem;
            font-size: 0.26rem;
            font-weight: 400;
            font-family: LeagueGothic;
            line-height: 0.3rem;
            color: rgba(255, 99, 71, 1);
            overflow: hidden;

            &::before {
              content: "";
              margin: 0.1rem;
              display: inline-block;
              width: 0.12rem;
              height: 0.1rem;
              background: url("../../assets/imgs/icon-triangle.png") no-repeat;
              background-size: 100% 100%;
            }
            &::after {
              content: "";
              margin: 0.1rem;
              display: inline-block;
              width: 0.12rem;
              height: 0.1rem;
              background: url("../../assets/imgs/icon-triangle.png") no-repeat;
              background-size: 100% 100%;
            }

            .box1 {
              position: absolute;
              top: 50%;
              left: -0.39rem;
              width: 0.77rem;
              height: 0.76rem;
              background: url("../../assets/imgs/products-img5.png") no-repeat;
              background-size: 100% 100%;
              transform: translateY(-50%);
            }
            .box2 {
              position: absolute;
              top: 50%;
              right: -0.39rem;
              width: 0.77rem;
              height: 0.76rem;
              background: url("../../assets/imgs/products-img6.png") no-repeat;
              background-size: 100% 100%;
              transform: translateY(-50%);
            }
          }
        }
        .technologies-wrap {
          position: relative;
          width: 2.95rem;
          height: 2.65rem;
          background: url("../../assets/imgs/products-img1.png") no-repeat;
          background-size: 100% 100%;

          .technologies-title {
            position: absolute;
            left: 50%;
            top: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.06rem;
            height: 1.06rem;
            font-size: 0.26rem;
            font-weight: 400;
            font-family: LeagueGothic;
            line-height: 0.26rem;
            color: rgba(255, 255, 255, 1);
            background: rgba(255, 99, 71, 1);
            border-radius: 50%;
            box-shadow: 0px 0.02rem 0.23rem rgba(0, 128, 128, 0.25);
            text-align: center;
            transform: translatex(-50%);
          }
          .technologies-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 0.85rem;
            height: 0.85rem;
            font-size: 0.14rem;
            font-weight: 400;
            font-family: Load Equalization;
            line-height: 0.16rem;
            color: rgba(71, 71, 71, 1);
            background: rgba(255, 255, 255, 1);
            border: 0.02rem solid rgba(255, 99, 71, 1);
            border-radius: 50%;
            text-align: center;

            &:nth-child(2) {
              position: absolute;
              left: 50%;
              top: 0.36rem;
              transform: translateX(-50%);
            }
            &:nth-child(3) {
              position: absolute;
              left: 0.36rem;
              bottom: 0.08rem;
            }
            &:nth-child(4) {
              position: absolute;
              right: 0.36rem;
              bottom: 0.08rem;
            }
          }
        }
        .next-arrows {
          margin: 0.26rem 0;
          width: 0.38rem;
          height: 0.22rem;
          background: url("../../assets/imgs/icon-arrows-down.png") no-repeat;
          background-size: 100% 100%;
        }
        .text {
          padding: 0.5rem 0.2rem 0;
          font-size: 0.18rem;
          font-weight: 400;
          font-family: Poppins;
          line-height: 0.25rem;
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
    .architecture {
      animation: fromRightShow 1.5s;
    }
  }
  .content3 {
    padding: 0.5rem 0.2rem;
    background: linear-gradient(
      135deg,
      rgba(34, 83, 85, 1) 0%,
      rgba(34, 83, 85, 0.82) 33.48%,
      rgba(13, 88, 90, 1) 100%
    );

    .text {
      margin-bottom: 0.5rem;
      font-size: 0.18rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 0.3rem;
      color: rgba(255, 255, 255, 1);
    }
    .charts-wrap1 {
      height: 3.2rem;
      background: url("../../assets/imgs/products-mobile-img1.png") no-repeat;
      background-size: 100% 100%;
    }
    .charts-wrap2 {
      height: 3.2rem;
      background: url("../../assets/imgs/products-mobile-img2.png") no-repeat;
      background-size: 100% 100%;
    }
    .charts-wrap3 {
      height: 3.2rem;
      background: url("../../assets/imgs/products-mobile-img3.png") no-repeat;
      background-size: 100% 100%;
    }
    .info-item {
      display: flex;
      margin: 0.3rem 0;
      align-items: center;
      font-size: 0.2rem;
      font-weight: 500;
      font-family: Poppins;
      line-height: 0.26rem;
      color: rgba(255, 255, 255, 1);

      img {
        margin-right: 0.24rem;
        min-width: 0.38rem;
        height: 0.22rem;
      }
      .text {
        margin: 0;
        width: 2.4rem;
        font-size: 0.18rem;
        line-height: 0.26rem;
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
    padding: 0.5rem 0.2rem;
    background: linear-gradient(
      360deg,
      rgba(13, 118, 118, 0.2) 0%,
      rgba(204, 204, 204, 0) 100%
    );

    .info-wrap {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 0.4rem;
        font-weight: 400;
        font-family: LeagueGothic;
        text-align: center;
        color: rgba(255, 99, 71, 1);
      }
      .text {
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.3rem;
        color: rgba(71, 71, 71, 1);
      }
      .carousel-wrap {
        position: relative;
        left: -0.18rem;
        margin-top: 0.3rem;
        width: calc(100% + 0.36rem);
        height: 2.4rem;

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
      .title {
        margin: 0.6rem 0;
        font-size: 0.4rem;
        font-weight: 400;
        font-family: LeagueGothic;
        text-align: center;
        color: rgba(64, 224, 208, 1);
      }
      .text {
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.3rem;
        color: rgba(71, 71, 71, 1);
      }
      .system-wrap {
        position: relative;
        height: 5.5rem;
        font-size: 0.18rem;
        font-weight: 500;
        font-family: Poppins;
        line-height: 0.22rem;
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

      .system-item1 {
        left: 0.12rem;
        width: 1.27rem;
        height: 1.27rem;
      }
      .system-item2 {
        top: 0.37rem;
        left: 1.55rem;
        width: 1.54rem;
        height: 1.54rem;
      }
      .system-item3 {
        top: 1.37rem;
        left: 0.14rem;
        width: 1.62rem;
        height: 1.62rem;
      }
      .system-item4 {
        top: 2.43rem;
        left: 1.4rem;
        width: 1.78rem;
        height: 1.78rem;
      }
      .system-item5 {
        top: 3.52rem;
        left: 0;
        width: 1.57rem;
        height: 1.57rem;
      }
    }
  }
  .content4.add-animation {
    .info-wrap {
      .title,
      .text {
        animation: fromLeftShow 1s;
      }
      .carousel-wrap {
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
