import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from "vue3-cookies";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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

router.beforeEach(async (to, from) => {
  console.log("Hello")
  const { cookies } = useCookies();
  if (to.name !== "login") {
    if (!cookies.get("token")) {
      router.push("/login")
    }
    else return true
  }
  else {
    return true
  }
  
})

export default router
