import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users',
    name: 'Dashboard',
    component: () => import( '../pages/Dashboard.vue')
  },
  {
    path: "/users/:id/todos",
    name: "users",
    component: () => import( '../pages/UserToDos.vue')
  },

  // otherwise redirect to home
  { path: '*', redirect: '/users' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  if(!authRequired && loggedIn){
    return next('/users');
  }

  next();
})

export default router;