import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: '首页',
    hidden: true, // 不显示在菜单
    redirect: '/overview-timeline'
  },
  {
    path: '/overview-timeline',
    name: '概览时光轴',
    component: () =>
      import(
        /* webpackChunkName: "overview-timeline" */ '../views/overview-timeline/index.vue'
      ),
    props: true
  },
  {
    path: '/timeline',
    name: 'Brush 时光轴',
    component: () => import('../views/timeline/index.vue'),
    props: true
  },
  {
    path: '/timeline1',
    name: 'Brush 时光轴test',
    component: () => import('../views/timeline/index1.vue'),
    props: true
  },
  {
    path: '/json-schema-editor',
    name: 'JsonSchemaEditor',
    component: () =>
      import(
        /* webpackChunkName: "json-schema-editor" */ '../views/json-schema-editor/index.vue'
      ),
    props: true
  },
  {
    path: '/query-tags',
    name: 'Query Tags',
    component: () =>
      import(
        /* webpackChunkName: "json-schema-editor" */ '../views/query-tags/index.vue'
      ),
    props: true
  },
  {
    path: '/result',
    name: 'Result',
    component: () =>
      import(
        /* webpackChunkName: "json-schema-editor" */ '../views/result/index.vue'
      ),
    props: true
  },
  {
    path: '/ellipsis',
    name: 'Ellipsis',
    component: () =>
      import(
        /* webpackChunkName: "json-schema-editor" */ '../views/ellipsis/index.vue'
      ),
    props: true
  },
  {
    path: '/count-down',
    name: 'CountDown',
    component: () =>
      import(
        /* webpackChunkName: "json-schema-editor" */ '../views/count-down/index.vue'
      ),
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
