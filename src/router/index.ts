import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from "vue3-cookies";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dummy',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/orgs',
      name: 'organization',
      component: () => import('../views/OrganizationView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const {cookies} = useCookies()
  if (to.name === "dummy") {
    router.push("/login")
  }
  if (to.name === "login" && from.name === "login") { // bypass recursion
    return false
  }
  if (to.name === "organization" && from.name === "organization") { // bypass recursion
    return false
  }
  if (to.name === "organization" && cookies.get("token")) {
    return true
  }
  else if (to.name === "organization" && !cookies.get("token")) {
    router.push("/login")
  }
  if (to.name === "login" && cookies.get("token")) {
    router.push("/orgs")
  }
  else if (to.name === "login" && !cookies.get("token")) {
    return true
  }
})

export default router
