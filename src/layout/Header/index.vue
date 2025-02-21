<template>
  <div class="header-container" :class="backgroundShow && 'header-container-bg'">
    <div class="logo" @click="goHome"></div>
    <div class="nav">
      <div
        class="nav-item"
        :class="defaultActive === item.path && 'nav-item-active'"
        v-for="item in navList"
        :key="item.name"
        @click="selectMenu(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

defineOptions({
  name: "HeaderPage",
});

const route = useRoute();
const router = useRouter();

const navList = [
  { name: "Home", path: "/Home" },
  { name: "Products", path: "/Products" },
  { name: "About", path: "/About" },
  { name: "Case Studies", path: "/CaseStudies" },
  { name: "Contact", path: "/Contact" },
];

const defaultActive = ref("/Home");
const backgroundShow = ref(false);

watch(
  () => route.path,
  (value) => {
    defaultActive.value = value;
  },
  {
    immediate: true,
  }
);

const selectMenu = (record = {}) => {
  router.push({
    path: record.path,
  });
};

const goHome = () => {
  router.push({
    path: "/Home",
  });
};

const scrollFun = function () {
  const currentScroll = document.querySelector("#app").scrollTop;
  if (currentScroll >= 300) {
    backgroundShow.value = true;
  } else {
    backgroundShow.value = false;
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
.header-container {
  display: flex;
  padding: 0 360px;
  width: 100%;
  height: 194px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .logo {
    width: 366px;
    height: 194px;
    background: url("../../assets/imgs/logo.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .nav {
    display: flex;
    padding: 4px;
    height: 70px;
    border-radius: 130px;
    background: rgba(201, 201, 201, 0.32);
    align-items: center;
    box-sizing: border-box;

    .nav-item {
      display: flex;
      padding: 0 12px;
      min-width: 120px;
      height: 62px;
      border-radius: 248px;
      font-size: 20px;
      font-weight: 600;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 28px;
      color: rgba(71, 71, 71, 1);
      text-align: left;
      vertical-align: top;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
    }
    .nav-item-active {
      color: rgba(64, 224, 208, 1);
      background: rgba(255, 255, 255, 1);
    }
  }
}
.header-container-bg {
  background: rgba(68, 73, 73, 0.8);
}
</style>
