<template>
  <div class="container">
    <div class="banner">
      <div class="content-w1350 box">
        <div class="text">
          PIONEERING AI-DRIVEN SOLUTIONS TAILORED FOR YOUR WASTEWATER TREATMENT PLANT
        </div>
        <div class="text1">
          Your trusted AI Copilot, ready to tackle complex wastewater challenges
        </div>
      </div>
      <div class="demo-box">
        <div class="content" @click="openDemo">Request a Demo</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="content">
      <div class="content-w1200">
        <div class="title">FEATURES</div>
        <div class="info-wrap">
          <div class="left">
            <div class="circle">
              <div class="text">Value Logic</div>
            </div>
            <div class="circle1">
              <div class="text">Process Logic</div>
            </div>
            <div class="circle2">
              <div class="text">Core AI Logic</div>
            </div>
          </div>
          <div class="right">
            <div class="info-item">
              <div class="text">Safety Assessment</div>
              <div class="text">Economic Assessment</div>
              <div class="text">Digital Intelligence Analysis</div>
            </div>
            <div class="info-item">
              <div class="text">Process Control Point Analysis</div>
              <div class="text">Full Process Coordination</div>
              <div class="text">Safety Boundary Consideration</div>
            </div>
            <div class="info-item">
              <div class="text">System Operation Monitoring</div>
              <div class="text">Load Sensing</div>
              <div class="text">Learning, Evolution, and Thinking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content1" ref="contentRef1">
      <div class="content-w1200">
        <div class="left">BENEFITS</div>
        <div class="right">
          <div class="text"><p>Discover patterns from sensor data</p></div>
          <div class="text">
            <p><span>Predict</span> changes in control parameters</p>
          </div>
          <div class="text">
            <p><span>Real-time automatic control</span> of related equipment or valves</p>
          </div>
          <div class="text">
            <p><span>Anomaly detection and early warning</span></p>
          </div>
          <div class="text">
            <p>
              Generate control strategies that <span> balance safety and efficiency</span>
            </p>
          </div>
          <div class="text"><p>Simulate and optimize the water treatment process</p></div>
          <div class="text">
            <p>Quickly adapt to changes and shocks in influent water load</p>
          </div>
          <div class="text">
            <p>
              <span
                >Maximize cost savings in operations while ensuring compliance with safety
                standards</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="content2" ref="contentRef2">
      <div class="content-w1200">
        <div class="title">WHAT YOU CAN EXPECT FROM US</div>
        <div class="text">Cost Reduction and Efficiency Improvement by 15% - 30%</div>
        <div class="text">Payback Period of 0.5 - 2 Years</div>
        <div class="text">Real-time Analytics Dashboard for Streamlined Decisions</div>
        <div class="text">
          Advanced Risk Prediction Model for Ensuring Process & Equipment Safety
        </div>
        <div class="info-wrap">
          <div class="info-item">
            <div class="num">5+</div>
            <div class="text">Years of AI-Driven</div>
            <div class="text">Continuous Technical Efforts</div>
          </div>
          <div class="info-item">
            <div class="num">$5M</div>
            <div class="text">Saved for</div>
            <div class="text">Our Customers</div>
          </div>
          <div class="info-item">
            <div class="num">50+</div>
            <div class="text">Collaborating</div>
            <div class="text">Pioneers and Experts</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content3" ref="contentRef3">
      <div class="content-w1200">
        <div class="title">CASE STUDIES</div>
        <div class="info-wrap">
          <div class="info-item">
            <div class="info-item-cover" @click="onJump(1)">
              <img src="../../assets/imgs/home-img2.png" />
              <div class="btn">
                <img src="../../assets/imgs/icon-arrows1.png" />
              </div>
              <div class="info">Municipal<br />Wastewater Treatment</div>
            </div>
            <div class="info-item-detail">
              <div class="text">October 2021 - Present</div>
              <div class="text"><span>Design Capacity:</span> 200,000 tons/day</div>
              <div class="text">
                <span>Treatment Process:</span> Multi-stage AO + Clarifier + Ozonation +
                MBBR
              </div>
              <div class="text"><span>Discharge Standards:</span></div>
              <div class="text">COD: 30 mg/L</div>
              <div class="text">NH3-N: 1.5 (3) mg/L</div>
              <div class="text">TN: 10 (12) mg/L</div>
              <div class="text">TP: 0.3 mg/L</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-cover" @click="onJump(2)">
              <img src="../../assets/imgs/home-img3.png" />
              <div class="btn">
                <img src="../../assets/imgs/icon-arrows1.png" />
              </div>
              <div class="info">Industrial<br />Wastewater Treatment</div>
            </div>
            <div class="info-item-detail">
              <div class="text">September 2022 - Present</div>
              <div class="text"><span>Design Capacity:</span> 12,500 tons/day</div>
              <div class="text">
                <span>Treatment Process:</span> AO + Clarifier + Ozonation + MBBR
              </div>
              <div class="text"><span>Discharge Standards:</span></div>
              <div class="text">COD: 50 mg/L</div>
              <div class="text">NH3-N: 5(8) mg/L</div>
              <div class="text">TN: 15 mg/L</div>
              <div class="text">TP: 0.5 mg/L</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RequestDemo />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import RequestDemo from "@/components/RequestDemo.vue";
import { onMounted, onUnmounted, ref } from "vue";

const router = useRouter();

defineOptions({
  name: "HomePage",
});

const contentRef1 = ref(null);
const contentRef2 = ref(null);
const contentRef3 = ref(null);

const openDemo = () => {
  router.push({
    path: "/Contact",
  });
};

const onJump = (index) => {
  router.push({
    path: "/CaseStudies",
    query: {
      index,
    },
  });
};

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
    background: url("../../assets/imgs/banner-home.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;

    .box {
      position: absolute;
      left: 50%;
      top: 580px;
      transform: translateX(-50%);
    }
    .text {
      width: 920px;
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

      animation: fromLeftShow 1.5s;
    }
    .demo-box {
      position: absolute;
      top: 600px;
      right: 380px;

      animation: fromRightShow 1s;
      .content {
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
  .content {
    padding: 60px 0 100px;
    .content-w1200 {
      margin: 0 auto;
    }
    .title {
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
      text-align: left;
      vertical-align: top;

      animation: fromTopShow 1s;
    }
    .info-wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 68px;
      .left {
        position: relative;
        width: 630px;
        height: 630px;

        animation: fromLeftShow 1s;
        .circle {
          width: 100%;
          height: 100%;
          border: 3px solid rgba(64, 224, 208, 1);
          border-radius: 50%;
          box-shadow: 0px 2px 33px 8px rgba(64, 224, 208, 0.3);
          box-sizing: border-box;
          .text {
            margin: 80px 0 0 270px;
          }
        }
        .circle1 {
          position: absolute;
          left: 38px;
          bottom: 20px;
          width: 432px;
          height: 432px;
          opacity: 1;
          background: rgba(64, 224, 208, 0.32);
          border-radius: 50%;
          box-shadow: 0px 1px 37px rgba(64, 224, 208, 0.32);
          .text {
            margin: 82px 0 0 90px;
          }
        }
        .circle2 {
          position: absolute;
          left: 62px;
          bottom: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 260px;
          height: 260px;
          opacity: 1;
          background: rgba(64, 224, 208, 1);
          border-radius: 50%;
          box-shadow: 0px 2px 18px 6px rgba(0, 128, 128, 0.2);
          .text {
            color: #fff;
          }
        }
        .text {
          font-size: 36px;
          font-weight: 600;
          font-family: Poppins;
          line-height: 31px;
          color: rgba(71, 71, 71, 1);
          text-align: left;
          vertical-align: top;
        }
      }
      .right {
        width: 495px;

        .info-item {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 140px;
          background: rgba(64, 224, 208, 1);
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px 40px;
          .text {
            display: flex;
            align-items: center;
            font-size: 24px;
            font-weight: 400;
            font-family: Poppins;
            letter-spacing: 0px;
            line-height: 30px;
            color: rgba(71, 71, 71, 1);
            text-align: left;
            vertical-align: top;

            &::before {
              content: "";
              display: inline-block;
              margin-right: 10px;
              width: 10px;
              height: 10px;
              background: rgba(71, 71, 71, 1);
              border-radius: 50%;
            }
          }
          &:nth-child(1) {
            position: relative;
            animation: fromRightShow 1s;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: -200px;
              display: inline-block;
              width: 200px;
              height: 2px;
              background: rgba(64, 224, 208, 1);
              transform: translateY(-50%);
            }
          }
          &:nth-child(2) {
            position: relative;
            margin: 100px 0;
            animation: fromRightShow 1.3s;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: -260px;
              display: inline-block;
              width: 260px;
              height: 2px;
              background: rgba(64, 224, 208, 1);
              transform: translateY(-50%);
            }
          }
          &:nth-child(3) {
            position: relative;
            animation: fromRightShow 1.6s;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: -410px;
              display: inline-block;
              width: 410px;
              height: 2px;
              background: rgba(64, 224, 208, 1);
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
  .content1 {
    padding: 60px 0;
    background: linear-gradient(
      225deg,
      rgba(64, 224, 208, 0.13) 0%,
      rgba(64, 224, 208, 0) 100%
    );
    .content-w1200 {
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      background-image: url("../../assets/imgs/home-img1.png");
      background-repeat: no-repeat;
      background-size: 465px 450px;
    }
    .left {
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(255, 99, 71, 1);
      text-align: left;
      vertical-align: top;
    }
    .right {
      width: 850px;
      .text {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 400;
        font-family: Poppins;
        letter-spacing: 0px;
        line-height: 30px;
        color: rgba(71, 71, 71, 1);

        &::before {
          content: "";
          margin-right: 12px;
          display: inline-block;
          min-width: 20px;
          height: 20px;
          background: url("../../assets/imgs/icon-right.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      span {
        color: rgba(255, 99, 71, 1);
      }
    }
  }
  .content1.add-animation {
    .left {
      animation: fromLeftShow 1s;
    }
    .right {
      animation: fromRightShow 1s;
    }
  }
  .content2 {
    padding: 62px 0 80px;
    background: linear-gradient(
      135deg,
      rgba(71, 71, 71, 1) 0%,
      rgba(0, 128, 128, 1) 100%
    );
    .content-w1200 {
      margin: 0 auto;
    }
    .title {
      margin-bottom: 24px;
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
    }
    .text {
      margin-bottom: 16px;
      font-size: 24px;
      font-weight: 500;
      font-family: Poppins;
      line-height: 31px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
    }
    .info-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 70px;
      margin-top: 60px;
      height: 248px;
      opacity: 1;
      border-radius: 140px;
      background: rgba(24, 108, 108, 1);
      border: 8px solid rgba(64, 224, 208, 1);
      display: flex;
      justify-content: flex-start;

      .info-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .num {
        font-size: 100px;
        font-weight: 400;
        font-family: LeagueGothic;
        color: rgba(255, 99, 71, 1);
        text-align: left;
        vertical-align: top;
      }
      .text {
        margin-bottom: 0;
        font-size: 20px;
      }
    }
  }
  .content2.add-animation {
    .title {
      animation: fromLeftShow 1s;
    }
    .text {
      animation: fromRightShow 1s;
    }
    .info-wrap {
      animation: fromLeftShow 1s;
    }
  }
  .content3 {
    padding: 70px 0 80px;
    background: linear-gradient(
      216.64deg,
      rgba(13, 118, 118, 0.29) 0%,
      rgba(204, 204, 204, 0) 100%
    );
    .content-w1200 {
      margin: 0 auto;
    }
    .title {
      margin-bottom: 20px;
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
    }
    .info-wrap {
      display: flex;
      justify-content: space-between;

      .info-item {
        &:nth-child(1) {
          .info-item-detail {
            width: 446px;
          }
        }
      }
      .info-item-cover {
        position: relative;
        margin-bottom: 20px;
        width: 560px;
        height: 620px;
        border-radius: 40px;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
        .btn {
          position: absolute;
          top: 30px;
          right: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 66px;
          height: 66px;
          opacity: 1;
          border-radius: 33px;
          background: rgba(255, 99, 71, 1);
          cursor: pointer;

          img {
            width: 30px;
            height: 30px;
          }
        }
        .info {
          position: absolute;
          left: 40px;
          bottom: 30px;
          padding: 12px 24px;
          width: 290px;
          height: 80px;
          font-size: 20px;
          font-weight: 400;
          font-family: Poppins;
          line-height: 28px;
          color: rgba(255, 255, 255, 1);
          text-align: left;
          vertical-align: top;
          border-radius: 106px;
          background: rgba(2, 122, 122, 1);
          border: 3px solid rgba(66, 214, 215, 1);
          box-sizing: border-box;
        }
      }
      .info-item-detail {
        font-size: 20px;
        font-weight: 400;
        font-family: Poppins;
        line-height: 26px;
        color: rgba(71, 71, 71, 1);
        text-align: left;
        vertical-align: top;
        .text {
          margin-bottom: 10px;
        }
        span {
          color: rgba(66, 214, 215, 1);
          font-weight: 600;
        }
      }
    }
  }
  .content3.add-animation {
    .title {
      animation: fromTopShow 1s;
    }
    .info-wrap {
      .info-item {
        &:nth-child(1) {
          animation: fromDownShow 1s;
        }
        &:nth-child(2) {
          animation: fromDownShow 1.1s;
        }
      }
    }
  }
}
</style>
