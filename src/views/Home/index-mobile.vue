<template>
  <div class="ignore-container">
    <div class="banner">
      <div class="box">
        <div class="text">
          PIONEERING AI-DRIVEN<br />
          SOLUTIONS TAILORED<br />
          FOR YOUR WASTEWATER<br />
          TREATMENT PLANT
        </div>
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
      <div class="title">FEATURES</div>
      <div class="info-wrap">
        <div class="top">
          <div class="circle">
            <div class="text">Value Logic</div>
          </div>
          <div class="circle1">
            <div class="text">Process Logic</div>
          </div>
          <div class="circle2">
            <div class="text">
              Core<br />
              AI Logic
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="info-item">
            <div class="subtitle">Core AI Logic</div>
            <div class="info-text">
              <div class="text">System Operation Monitoring</div>
              <div class="text">Load Sensing</div>
              <div class="text">Learning, Evolution, and Thinking</div>
            </div>
          </div>
          <div class="info-item">
            <div class="subtitle">Process Logic</div>
            <div class="info-text">
              <div class="text">Process Control Point Analysis</div>
              <div class="text">Full Process Coordination</div>
              <div class="text">Safety Boundary Consideration</div>
            </div>
          </div>
          <div class="info-item">
            <div class="subtitle">Value Logic</div>
            <div class="info-text">
              <div class="text">Safety Assessment</div>
              <div class="text">Economic Assessment</div>
              <div class="text">Digital Intelligence Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content1" ref="contentRef1">
      <div class="content-wrap">
        <div class="title">BENEFITS</div>
        <div class="content-info">
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
      <div class="title">
        WHAT YOU CAN<br />
        EXPECT FROM US
      </div>
      <div class="text">Cost Reduction and Efficiency Improvement by 15% - 30%</div>
      <div class="text">Payback Period of 0.5 - 2 Years</div>
      <div class="text">Real-time Analytics Dashboard for Streamlined Decisions</div>
      <div class="text">
        Advanced Risk Prediction Model for Ensuring Process & Equipment Safety
      </div>
      <div class="info-wrap">
        <div class="info-item">
          <div class="info-item-num">5+</div>
          <div class="info-item-text">Years of AI-Driven</div>
          <div class="info-item-text">Continuous Technical Efforts</div>
        </div>
        <div class="info-item">
          <div class="info-item-num">$5M</div>
          <div class="info-item-text">Saved for</div>
          <div class="info-item-text">Our Customers</div>
        </div>
        <div class="info-item">
          <div class="info-item-num">50+</div>
          <div class="info-item-text">Collaborating</div>
          <div class="info-item-text">Pioneers and Experts</div>
        </div>
      </div>
    </div>
    <div class="content3" ref="contentRef3">
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
    <RequestDemo />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import RequestDemo from "@/components/RequestDemoMobile.vue";
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
.ignore-container {
  height: max-content;
  .banner {
    position: relative;
    width: 100%;
    height: 7.42rem;
    background: url("../../assets/imgs/banner-home-mobile.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    overflow: hidden;

    .box {
      margin-top: 1.64rem;
      padding: 0 0.2rem;
    }
    .text {
      font-size: 0.48rem;
      font-weight: 400;
      font-family: LeagueGothic;
      line-height: 0.48rem;
      color: rgba(64, 224, 208, 1);
      text-align: center;

      animation: fromLeftShow 1s;
    }
    .text1 {
      margin-top: 0.6rem;
      font-size: 0.24rem;
      font-weight: 500;
      font-family: Poppins;
      line-height: 0.3rem;
      color: rgba(255, 255, 255, 1);
      text-align: center;

      animation: fromLeftShow 1.5s;
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
    padding: 0.5rem 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
      text-align: center;

      animation: fromTopShow 1s;
    }
    .info-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.54rem;
      .top {
        position: relative;
        width: 3.03rem;
        height: 3.03rem;

        animation: fromLeftShow 1s;
        .circle {
          width: 100%;
          height: 100%;
          border: 0.01rem solid rgba(64, 224, 208, 1);
          border-radius: 50%;
          box-sizing: border-box;
          .text {
            margin: 2.48rem auto 0;
          }
        }
        .circle1 {
          position: absolute;
          left: 0.16rem;
          top: 0.06rem;
          width: 2.3rem;
          height: 2.3rem;
          background: rgba(64, 224, 208, 0.32);
          border-radius: 50%;
          box-shadow: 0rem 0.01rem 0.37rem rgba(64, 224, 208, 0.32);
          .text {
            margin: 1.6rem auto 0;
          }
        }
        .circle2 {
          position: absolute;
          left: 0.3rem;
          top: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.38rem;
          height: 1.38rem;
          background: rgba(64, 224, 208, 1);
          border-radius: 50%;
          box-shadow: 0rem 0.02rem 0.18rem 0.06rem rgba(0, 128, 128, 0.2);
          .text {
            color: #fff;
          }
        }
        .text {
          font-size: 0.22rem;
          font-weight: 600;
          font-family: Poppins;
          line-height: 0.2rem;
          color: rgba(71, 71, 71, 1);
          text-align: center;
        }
      }
      .bottom {
        margin-top: 0.5rem;
        .subtitle {
          margin-bottom: 0.1rem;
          font-size: 0.2rem;
          font-weight: 600;
          font-family: Poppins;
          line-height: 0.3rem;
          color: rgba(64, 224, 208, 1);
          text-align: left;
          vertical-align: top;
        }
        .info-item {
          &:nth-child(1) {
            position: relative;
            animation: fromRightShow 1s;
          }
          &:nth-child(2) {
            position: relative;
            margin: 0.25rem 0;
            animation: fromRightShow 1.3s;
          }
          &:nth-child(3) {
            position: relative;
            animation: fromRightShow 1.6s;
          }
        }
        .info-text {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 1.37rem;
          background: rgba(64, 224, 208, 1);
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 0.2rem;

          .text {
            display: flex;
            font-size: 0.18rem;
            font-weight: 400;
            font-family: Poppins;
            line-height: 0.24rem;
            color: rgba(71, 71, 71, 1);
            text-align: left;

            &::before {
              content: "";
              display: inline-block;
              margin: 0.1rem 0.06rem 0 0;
              min-width: 0.06rem;
              height: 0.06rem;
              background: rgba(71, 71, 71, 1);
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .content1 {
    padding: 0.4rem 0.2rem 0.5rem;
    background: linear-gradient(
      225deg,
      rgba(64, 224, 208, 0.13) 0%,
      rgba(64, 224, 208, 0) 100%
    );
    .content-wrap {
      display: flex;
      flex-direction: column;
      background: url("../../assets/imgs/home-img1.png") no-repeat;
      background-size: 3.35rem 3.48rem;
      background-position: 50% 50%;
    }
    .title {
      font-size: 0.4rem;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(255, 99, 71, 1);
      text-align: center;
    }
    .content-info {
      .text {
        display: flex;
        margin-bottom: 0.2rem;
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.25rem;
        color: rgba(71, 71, 71, 1);

        &::before {
          content: "";
          margin: 0.05rem 0.12rem 0 0;
          display: inline-block;
          min-width: 0.18rem;
          height: 0.18rem;
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
    padding: 0.5rem 0.2rem;
    background: linear-gradient(
      135deg,
      rgba(71, 71, 71, 1) 0%,
      rgba(0, 128, 128, 1) 100%
    );
    .title {
      margin-bottom: 0.5rem;
      font-size: 0.4rem;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
      text-align: center;
    }
    .text {
      display: flex;
      margin-bottom: 0.16rem;
      font-size: 0.18rem;
      font-weight: 500;
      font-family: Poppins;
      line-height: 0.25rem;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;

      &::before {
        content: "";
        margin: 0.1rem 0.1rem 0 0.1rem;
        display: inline-block;
        min-width: 0.06rem;
        height: 0.06rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 50%;
      }
    }
    .info-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 0.7rem 0.26rem;
      margin-top: 0.6rem;
      opacity: 1;
      border-radius: 1.6rem;
      background: rgba(24, 108, 108, 1);
      border: 0.06rem solid rgba(64, 224, 208, 1);
      display: flex;
      justify-content: flex-start;

      .info-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:nth-child(2) {
          margin: 0.7rem 0;
        }
      }
      .info-item-num {
        margin-bottom: 0.12rem;
        font-size: 0.7rem;
        font-weight: 400;
        font-family: LeagueGothic;
        line-height: 0.7rem;
        color: rgba(255, 99, 71, 1);
      }
      .info-item-text {
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.25rem;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        vertical-align: top;
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
    padding: 0.5rem 0.2rem;
    background: linear-gradient(
      360deg,
      rgba(13, 118, 118, 0.29) 0%,
      rgba(204, 204, 204, 0) 100%
    );

    .title {
      margin-bottom: 0.55rem;
      font-size: 0.4rem;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
      text-align: center;
    }
    .info-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .info-item {
        &:nth-child(1) {
          .info-item-detail {
            margin-bottom: 0.4rem;
          }
        }
      }
      .info-item-cover {
        position: relative;
        margin-bottom: 0.3rem;
        width: 100%;
        height: 4.12rem;
        border-radius: 0.2rem;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
        .btn {
          position: absolute;
          top: 0.2rem;
          right: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 50%;
          background: rgba(255, 99, 71, 1);
          cursor: pointer;

          img {
            width: 0.14rem;
            height: 0.14rem;
          }
        }
        .info {
          position: absolute;
          left: 0.2rem;
          bottom: 0.2rem;
          padding: 0.12rem 0.2rem;
          width: 2.35rem;
          height: 0.68rem;
          font-size: 0.16rem;
          font-weight: 400;
          font-family: Poppins;
          line-height: 0.22rem;
          color: rgba(255, 255, 255, 1);
          border-radius: 1.06rem;
          background: rgba(2, 122, 122, 1);
          border: 0.03rem solid rgba(66, 214, 215, 1);
          box-sizing: border-box;
        }
      }
      .info-item-detail {
        width: 100%;
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.26rem;
        color: rgba(71, 71, 71, 1);
        .text {
          margin-bottom: 0.06rem;
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
