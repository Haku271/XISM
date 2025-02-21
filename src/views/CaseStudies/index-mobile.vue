<template>
  <div class="container">
    <div class="banner">
      <div class="box">
        <div class="text">
          OUR TRACK RECORD<br />
          OF SUCCESS
        </div>
        <div class="text1">
          Over the past 5 years,<br />
          we delivered a diversed<br />
          portfolio of projects that<br />
          helped over 20<br />
          customers to solve their<br />
          unique problems.
        </div>
      </div>
      <div class="demo-box">
        <div class="content" @click="openDemo">Request a Demo</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="content">
      <div class="tab-list">
        <div
          class="tab-item"
          :class="tabActive === 1 && 'tab-item-active'"
          @click="onTabsChange(1)"
        >
          Municipal Wastewater Treatment
        </div>
        <div
          class="tab-item"
          :class="tabActive === 2 && 'tab-item-active'"
          @click="onTabsChange(2)"
        >
          Industrial Wastewater Treatment
        </div>
      </div>
      <div class="factory-info-wrap" v-if="tabActive === 1">
        <div class="cover-img">
          <img src="../../assets/imgs/case-studies-mobile-img1.png" />
        </div>
        <div class="factry-info">
          <div class="left">
            <div class="title">October 2021 - Present</div>
            <div class="text"><span>Design Capacity: </span> 200,000 tons/day</div>
            <div class="text">
              <span>Treatment Process: </span> Multi-stage AO + Clarifier + Ozonation +
              MBBR
            </div>
            <div class="text">
              <span>Discharge Standards:</span>
            </div>
            <div class="text">COD: 30 mg/L</div>
            <div class="text">NH3-N: 1.5 (3) mg/L</div>
            <div class="text">TN: 10 (12) mg/L</div>
            <div class="text">TP: 0.3 mg/L</div>
          </div>
          <div class="right">
            Total operating<br />
            costs are reduced<br />
            by <span>13%</span> with<br />
            XSIM AI Copilot
          </div>
        </div>
      </div>
      <div class="factory-info-wrap" v-else>
        <div class="cover-img">
          <img src="../../assets/imgs/case-studies-mobile-img2.png" />
        </div>
        <div class="factry-info">
          <div class="left">
            <div class="title">October 2021 - Present</div>
            <div class="text"><span>Design Capacity:</span> 12,500 tons/day</div>
            <div class="text">
              <span>Treatment Process: </span> AO + Clarifier<br />
              + Ozonation + MBBR
            </div>
            <div class="text">
              <span>Discharge Standards:</span>
            </div>
            <div class="text">COD: 50 mg/L</div>
            <div class="text">NH3-N: 5 (8) mg/L</div>
            <div class="text">TN: 15 mg/L</div>
            <div class="text">TP: 0.5 mg/L</div>
          </div>
          <div class="right">
            Total operating<br />
            costs are reduced<br />
            by <span>22.8%</span> with<br />
            XSIM AI Copilot
          </div>
        </div>
      </div>
      <div class="control-units-wrap" ref="contentRef1">
        <div class="title">
          INDIVIDUAL<br />
          CONTROL UNITS
        </div>
        <div class="control-units-list">
          <div
            class="control-units-item"
            :class="controlUnitsIndex === index && 'control-units-item-active'"
            v-for="(item, index) in controlUnitsList[tabActive]"
            :key="item.num"
            @click="onControlUnitsChange(index)"
          >
            <div class="text">{{ item.title }}</div>
            <div class="text" v-if="item.subtitle">{{ item.subtitle }}</div>

            <div
              class="control-units-item-status"
              v-if="controlUnitsIndex == index"
            ></div>
            <div class="control-units-item-num" v-else>{{ item.num }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content1">
      <div class="title">APPLICATIONS</div>
      <swiper
        :class="`swiper${tabActive}`"
        :modules="swiperModules"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        :autoHeight="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in systemList[tabActive]" :key="index">
          <div class="swiper-slide-col">
            <div class="chart-wrap">
              <div class="title">{{ item.title }}</div>
              <div class="subtitle">{{ item.subtitle }}</div>
              <img :src="getAssetsImg(item.chartImg)" />
              <div class="chart-info">
                <div
                  class="chart-legend"
                  v-for="(legendItem, legendIndex) in item.legend"
                  :key="legendIndex"
                >
                  <div
                    class="legend-square"
                    v-if="legendItem.type === 'square'"
                    :style="`background: ${legendItem.color}`"
                  ></div>
                  <div
                    class="legend-dottedLine"
                    v-if="legendItem.type === 'dottedLine'"
                    :style="`border-color: ${legendItem.color}`"
                  ></div>
                  {{ legendItem.label }}
                </div>
              </div>
            </div>
            <div class="chart-describe">
              <div
                class="text"
                v-for="(text, textIndex) in item.describe"
                :key="textIndex"
              >
                {{ text }}
              </div>
            </div>
          </div>
          <template v-if="item.children">
            <div
              class="swiper-slide-col swiper-slide-col-children"
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
            >
              <div class="chart-wrap">
                <div class="title">{{ child.title }}</div>
                <div class="subtitle">{{ child.subtitle }}</div>
                <img :src="getAssetsImg(child.chartImg)" />
                <div class="chart-info">
                  <div
                    class="chart-legend"
                    v-for="(legendItem, legendIndex) in child.legend"
                    :key="legendIndex"
                  >
                    <div
                      class="legend-square"
                      v-if="legendItem.type === 'square'"
                      :style="`background: ${legendItem.color}`"
                    ></div>
                    <div
                      class="legend-dottedLine"
                      v-if="legendItem.type === 'dottedLine'"
                      :style="`border-color: ${legendItem.color}`"
                    ></div>
                    {{ legendItem.label }}
                  </div>
                </div>
              </div>
              <div class="chart-describe">
                <div
                  class="text"
                  v-for="(text, textIndex) in child.describe"
                  :key="textIndex"
                >
                  {{ text }}
                </div>
              </div>
            </div>
          </template>
        </swiper-slide>
      </swiper>
    </div>
    <RequestDemo />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import RequestDemo from "@/components/RequestDemoMobile.vue";
import { getAssetsImg } from "@/utils/index";
import { useRoute, useRouter } from "vue-router";

defineOptions({
  name: "CaseStudiesPage",
});

const route = useRoute();
const router = useRouter();

const openDemo = () => {
  router.push({
    path: "/Contact",
  });
};

const contentRef1 = ref(null);

const scrollFun = function () {
  const currentScroll = document.querySelector("#app").scrollTop;
  const innerHeight = window.innerHeight;
  if (currentScroll >= contentRef1.value.offsetTop + 100 - innerHeight) {
    contentRef1.value.classList.add("add-animation");
  }
};

onMounted(() => {
  document.querySelector("#app").addEventListener("scroll", scrollFun);
});

onUnmounted(() => {
  document.querySelector("#app").removeEventListener("scroll", scrollFun);
});

const tabActive = ref(route.query.index * 1 || 1);
const controlUnitsIndex = ref(0);
const controlSwiper = ref(null);
const swiperModules = ref([Pagination]);

const controlUnitsList = ref({
  1: [
    { title: "Smart Aeration System", num: "01" },
    { title: "Smart Carbon Source", subtitle: "Dosing System", num: "02" },
    {
      title: "Smart Chemical Treatment",
      subtitle: "Control System（PAC/PAM）",
      num: "03",
    },
    { title: "Smart Ozonation", subtitle: "Control System", num: "04" },
    { title: "Smart Detoxification ORP", subtitle: "Control System", num: "05" },
  ],
  2: [
    { title: "Smart Carbon Source", subtitle: "Dosing System", num: "01" },
    { title: "Smart Ozonation", subtitle: "Control System", num: "02" },
    {
      title: "Smart Chemical Treatment",
      subtitle: "Control System（PAC/PAM）",
      num: "03",
    },
  ],
});

const systemList = ref({
  1: [
    {
      chartImg: "case-studies-img3.png",
      title: "Smart Aeration System",
      subtitle: "Dissolved Oxygen Time Series Plot",
      describe: [
        "XSIM AI Copilot calculates dynamic DO according to real-time influent loads. When the system receives the DO target value, it will adjust the blower and valve correspondingly to achieve precise control of DO. Compare to the constant DO target value set by human, dynamic DO target value is able to response quickly to changes in influent loads. ",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "DO Time Series - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "DO -Target Value",
        },
        {
          type: "dottedLine",
          color: "rgba(255, 0, 158, 1)",
          label: "Reasonable Control Range",
        },
      ],
    },
    {
      chartImg: "case-studies-img4.png",
      title: "Smart Carbon Source Dosing System",
      subtitle: "TN Time Series Plot",
      describe: [
        "The collaboration between Smart Aeration System and Smart Carbon Source Dosing System allows XSIM AI Copilot controls the effluent characteristics through load sensing and load equalization. Our system selects the optimal strategy that achieve highest saving on resources. ",
        "As shown above, when the safety control threshold of TN is 8 mg/L, the time series plot of TN under AI control shows lower volatility with narrower safety redundancy space. ",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "Effluent TN - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "Effluent TN - Under Manual Control",
        },
      ],
    },
    {
      chartImg: "case-studies-img5.png",
      title: "Smart Chemical Treatment Control System（PAC/PAM）",
      subtitle: "TP Time Series Plot",
      describe: [
        "The target value of effluent TP is 0.1 mg/L. Under the control of Smart Dosing System (PAC/PAM), effluent discharge TN shows lower volatility when compared to manual control. Moreover, narrower safety redundancy space increases cost-effectiveness of the operations. ",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "Effluent TP - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "Effluent TP - Under Manual Contro",
        },
        {
          type: "square",
          color: "rgba(238, 136, 45, 1)",
          label: "Effluent TP-Target Value",
        },
        {
          type: "dottedLine",
          color: "rgba(151, 45, 45, 1)",
          label: "Reasonable Control Range",
        },
      ],
    },
    {
      chartImg: "case-studies-img6.png",
      title: "Smart Ozonation Control System",
      subtitle: "COD Time Series Plot",
      describe: [
        "The target value of COD effluent is 20 mg/L. Under the control of Smart Ozonation System, the effluent COD is kept within 2 mg/L from target value. The effluent COD is much closer to the target value under AI control than that of manual control. Hence, operational cost is reduced which increases efficiency of the plant. ",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "Effluent COD - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "Effluent COD - Under Manual Control",
        },
        {
          type: "square",
          color: "rgba(238, 136, 45, 1)",
          label: "Effluent COD - Target Value",
        },
        {
          type: "dottedLine",
          color: "rgba(151, 45, 45, 1)",
          label: "Reasonable Control Range",
        },
      ],
    },
    {
      chartImg: "case-studies-img7.png",
      title: "Smart Detoxification ORP Control System",
      subtitle: "ORP Time Series Plot",
      describe: [
        "The effluent ORP has a target value of 350 mV. Under the control of Smart ORP Control system, the effluent ORP is less volatile and thereby increasing efficiency of the operations. ",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "Effluent ORP - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "Effluent ORP - Under Manual Control",
        },
        {
          type: "square",
          color: "rgba(238, 136, 45, 1)",
          label: "Effluent ORP - Target Value",
        },
        {
          type: "dottedLine",
          color: "rgba(151, 45, 45, 1)",
          label: "Reasonable Control Range",
        },
      ],
    },
  ],
  2: [
    {
      chartImg: "case-studies-img8.png",
      title: "Smart Carbon Source Dosing System",
      subtitle: "TN Time Series Plot",
      describe: [
        "The discharge standard for TN is 15 mg/L and below with target value at 11 mg/L. Under the control of Smart Carbon Source Dosing System, the effluent TN can be controlled within a reasonable range of 9.5 - 12.5 mg/L. The system ensures compliance of effluent discharge standard while narrowing safety redundancy space. ",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "Effluent TN - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "Effluent TN - Target Value",
        },
        {
          type: "dottedLine",
          color: "rgba(151, 45, 45, 1)",
          label: "Reasonable Control Range",
        },
      ],
    },
    {
      chartImg: "case-studies-img9.png",
      title: "Smart Ozonation Control System",
      subtitle: "Ozone Time Series Plot",
      describe: [
        "Ozonation usage follows real-time influent stream volume and COD concentration. The real-time monitoring of COD significantly improves the efficiency of ozonation contact reactor.",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "Ozone Usage - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "Real-Time Influent COD",
        },
      ],
      children: [
        {
          chartImg: "case-studies-img10.png",
          title: "Smart Ozonation Control System",
          subtitle: "COD Time Series Plot",
          describe: [
            "The target value of effluent COD is 40 mg/L. Under the control of Smart Ozonation, the effluent COD is controlled within the range of +/- 2 mg/L from the target value. Compared to manual control, AI control has significant improved in terms of reliability and cost-effectiveness. ",
          ],
          legend: [
            {
              type: "square",
              color: "rgba(64, 224, 208, 1)",
              label: "Effluent COD - Under AI Contro",
            },
            {
              type: "square",
              color: "rgba(255, 99, 71, 1)",
              label: "Effluent COD - Target Value",
            },
            {
              type: "dottedLine",
              color: "rgba(151, 45, 45, 1)",
              label: "Reasonable Control Range",
            },
          ],
        },
      ],
    },
    {
      chartImg: "case-studies-img11.png",
      title: "Smart Chemical Treatment Control System（PAC/PAM）",
      subtitle: "TP Time Series Plot",
      describe: [
        "The discharge standard of effluent TP is 0.5 mg/L with target value of effluent TP 0.18 mg/L. Under Smart Dosing (PAC/PAM) System, effluent TP is controlled within the range of 0.15 - 0.21 mg/L. The discharge standard is met with saving in operation costs.",
      ],
      legend: [
        {
          type: "square",
          color: "rgba(64, 224, 208, 1)",
          label: "Effluent TP - Under AI Control",
        },
        {
          type: "square",
          color: "rgba(255, 99, 71, 1)",
          label: "Effluent TP - Target Value",
        },
        {
          type: "dottedLine",
          color: "rgba(151, 45, 45, 1)",
          label: "Reasonable Control Range",
        },
      ],
    },
  ],
});

const onTabsChange = (key) => {
  tabActive.value = key;
  controlUnitsIndex.value = 0;
  controlSwiper.value.slideTo(0, 300);
};

const onControlUnitsChange = (index) => {
  controlUnitsIndex.value = index;
  controlSwiper.value.slideTo(index, 300);
};

const onSwiper = (swiper) => {
  controlSwiper.value = swiper;
};
const onSlideChange = (data = {}) => {
  controlUnitsIndex.value = data.activeIndex;
};
</script>

<style lang="scss" scoped>
.container {
  height: max-content;
  .banner {
    position: relative;
    width: 100%;
    height: 7.42rem;
    background: url("../../assets/imgs/banner-case-studies-mobile.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    overflow: hidden;

    .box {
      margin-top: 1.58rem;
    }
    .text {
      font-size: 0.6rem;
      font-weight: 400;
      font-family: LeagueGothic;
      line-height: 0.6rem;
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
      animation: fromLeftShow 1s;
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
    padding: 0.4rem 0.2rem 0.5rem;
    .tab-list {
      animation: fromLeftShow 1s;
      .tab-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.62rem;
        border-radius: 1.53rem;
        font-size: 0.18rem;
        font-weight: 500;
        font-family: Poppins;
        color: rgba(99, 99, 99, 1);
        background: rgba(250, 250, 250, 1);
        cursor: pointer;

        &:nth-child(1) {
          margin-bottom: 0.16rem;
        }
      }
      .tab-item-active {
        color: rgba(255, 255, 255, 1);
        background: rgba(64, 224, 208, 1);
      }
    }

    .factory-info-wrap {
      margin: 0.4rem 0;
      height: 8.6rem;
      border-radius: 0.2rem;
      background: linear-gradient(
        0deg,
        rgba(0, 199, 199, 0.6) 0%,
        rgba(255, 255, 255, 0) 67.68%
      );
      border: 0.04rem solid rgba(64, 224, 208, 1);
      animation: fromDownShow 1s;

      .cover-img {
        margin-bottom: 40px;
        width: 100%;
        height: 3rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .factry-info {
        .left {
          padding: 0 0.06rem;
        }
        .title {
          margin-top: 0.2rem;
          font-size: 0.18rem;
          font-weight: 400;
          font-family: Poppins;
          line-height: 0.26rem;
          color: rgba(71, 71, 71, 1);
        }
        .text {
          margin-top: 0.1rem;
          font-size: 0.18rem;
          font-family: Poppins;
          line-height: 0.24rem;
          color: rgba(71, 71, 71, 1);
          span {
            color: rgba(255, 99, 71, 1);
            font-weight: 600;
          }
        }
        .right {
          padding: 0 0.18rem;
          margin-top: 0.5rem;
          font-size: 0.26rem;
          font-weight: 400;
          font-family: Poppins;
          line-height: 0.4rem;
          text-align: right;
          color: rgba(71, 71, 71, 1);
          span {
            font-size: 0.36rem;
            font-weight: 600;
            line-height: 0.4rem;
            color: rgba(255, 99, 71, 1);
          }
        }
      }
    }
    .control-units-wrap {
      .title {
        margin-bottom: 56px;
        font-size: 0.4rem;
        font-weight: 400;
        font-family: LeagueGothic;
        color: rgba(255, 99, 71, 1);
        text-align: center;
      }
      .control-units-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .control-units-item {
        position: relative;
        display: flex;
        padding-right: 0.36rem;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 0.2rem;
        height: 0.7rem;
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        color: rgba(71, 71, 71, 1);
        text-align: center;
        border-radius: 2.67rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: -0.03rem -0.01rem 0.21rem -0.08rem rgba(45, 46, 46, 0.2);
        cursor: pointer;

        &:last-child {
          margin: 0;
        }

        .control-units-item-num {
          position: absolute;
          top: 50%;
          // top: -16px;
          right: 0.1rem;
          font-size: 0.36rem;
          font-weight: 400;
          font-family: Poppins;
          color: rgba(207, 207, 207, 1);
          transform: translateY(-50%);
        }
        .control-units-item-status {
          position: absolute;
          right: 0.08rem;
          top: 0.12rem;
          width: 0.45rem;
          height: 0.45rem;
          background: url("../../assets/imgs/icon-right1.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .control-units-item-active {
        color: rgba(255, 255, 255, 1);
        background: rgba(255, 99, 71, 1);
      }
    }
    .control-units-wrap.add-animation {
      .title {
        animation: fromLeftShow 1s;
      }
      .control-units-list {
        animation: fromRightShow 1s;
      }
    }
  }
  .content1 {
    padding: 0.5rem 0.2rem;
    min-height: 7.6rem;
    background: linear-gradient(
      135deg,
      rgba(66, 75, 75, 1) 0%,
      rgba(40, 95, 95, 1) 67.92%,
      rgba(5, 124, 124, 1) 100%
    );
    overflow: hidden;

    .title {
      font-size: 0.4rem;
      font-weight: 400;
      font-family: LeagueGothic;
      color: rgba(64, 224, 208, 1);
      text-align: center;
    }

    .swiper-slide {
      min-height: 5.6rem;

      .chart-wrap {
        height: auto;
        font-family: Poppins;
        overflow: hidden;
      }
      .swiper-slide-col-children {
        .chart-wrap {
          .title {
            margin-top: 0;
          }
        }
      }
      .title {
        margin: 0.55rem auto 0;
        font-size: 0.23rem;
        font-weight: 600;
        font-family: Poppins;
        line-height: 0.28rem;
        color: rgba(255, 99, 71, 1);
        text-align: center;
      }
      .subtitle {
        font-size: 0.18rem;
        font-weight: 400;
        line-height: 0.26rem;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
      img {
        margin: 0.28rem 0;
        width: 100%;
        height: 1.5rem;
      }
      .chart-info {
        display: inline-block;
        float: right;
      }

      &:nth-child(2) {
        .title {
          width: 2.6rem;
        }
      }
      &:nth-child(4) {
        .title {
          width: 2rem;
        }
      }
      &:nth-child(5) {
        .title {
          width: 2.8rem;
        }
      }

      .chart-legend {
        display: flex;
        align-items: center;
        margin-bottom: 0.1rem;
        font-size: 0.14rem;
        font-weight: 400;
        line-height: 0.2rem;
        color: rgba(255, 255, 255, 1);
      }
      .legend-square {
        margin-right: 0.12rem;
        width: 0.14rem;
        height: 0.14rem;
        border-radius: 0.02rem;
      }
      .legend-dottedLine {
        margin-right: 0.12rem;
        width: 0.24rem;
        height: 0rem;
        border: 0.02rem dashed rgba(255, 0, 158, 1);
      }

      .chart-describe {
        margin: 0.5rem auto;
        width: 2.6rem;
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.25rem;
        color: rgba(255, 255, 255, 1);

        .text {
          &:not(:first-child) {
            margin-top: 0.3rem;
          }
        }
      }
    }
    .swiper2 {
      .swiper-slide {
        &:nth-child(1) {
          .title {
            width: 3rem;
          }
        }
        &:nth-child(2) {
          .title {
            width: 2.2rem;
          }
        }
      }
    }
    :deep(.swiper-pagination) {
      text-align: right;
      .swiper-pagination-bullet {
        margin-left: 0.1rem;
        width: 0.12rem;
        height: 0.12rem;
      }
      .swiper-pagination-bullet-active {
        background: rgba(64, 224, 208, 1);
      }
    }
  }
}
</style>
