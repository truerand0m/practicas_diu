import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Home2 from "./views/Home2.vue";
import Galeria from "./views/Galeria.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      redirect: { name: "home" }
    },
    {
      path: "/home2",
      name: "home2",
      component: Home2
    },
    {
      path: "/galeria",
      name: "galeria",
      component: Galeria
    },
    {
      path: "/",
      redirect: { name: "home2" }
    },
    {
      path: "/eventos",
      name: "eventos",
      component: () => import("@/views/Eventos.vue")
    },
    {
      path: "/formulario",
      name: "formulario",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Formulario.vue")
    }
  ]
});
