import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '/src/layout/index.vue';
import LayoutM from '/src/layout/index-mobile.vue';

let routes = [];
if ( //移动端不限制
  /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||
  /(Android)/i.test(navigator.userAgent)
) {
  console.log("移动端环境");
  routes = [
    {
      path: '/app',
      name: 'app',
      component: LayoutM,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: () => import('../views/Home/index-mobile.vue')
        },
        {
          path: '/Products',
          name: 'Products',
          component: () => import('../views/Products/index-mobile.vue')
        },
        {
          path: '/About',
          name: 'About',
          component: () => import('../views/About/index-mobile.vue')
        },
        {
          path: '/CaseStudies',
          name: 'CaseStudies',
          component: () => import('../views/CaseStudies/index-mobile.vue')
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: () => import('../views/Contact/index-mobile.vue')
        }
      ]
    },
    { path: '/', redirect: '/Home' }
  ];
} else {
  routes = [
    {
      path: '/app',
      name: 'app',
      component: Layout,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: () => import('../views/Home/index.vue')
        },
        {
          path: '/Products',
          name: 'Products',
          component: () => import('../views/Products/index.vue')
        },
        {
          path: '/About',
          name: 'About',
          component: () => import('../views/About/index.vue')
        },
        {
          path: '/CaseStudies',
          name: 'CaseStudies',
          component: () => import('../views/CaseStudies/index.vue')
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: () => import('../views/Contact/index.vue')
        }
      ]
    },
    { path: '/', redirect: '/Home' }
  ];
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      document.querySelector("#app") && document.querySelector("#app").scrollTo(0, 0);
    }
  }
})

export default router
