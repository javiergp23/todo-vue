import { createRouter, createWebHistory } from 'vue-router'
import {useStore} from 'vuex';
import store from '../store';
import HomeView from '../views/HomeView.vue'

// const store = useStore();

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: HomeView,
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();

  // Rutas protegidas
  const protectedRoutes = ['dashboard'];

  // Si el usuario no está autenticado y quiere acceder a una ruta protegida
  if (protectedRoutes.includes(to.name) && !store.getters.isAuthenticated) {
    next('/'); // Redirigir al login
  }
  // Si el usuario está autenticado y quiere acceder a login o registro
  else if (['home', 'register'].includes(to.name) && store.getters.isAuthenticated) {
    next('/dashboard'); // Redirigir al dashboard
  } else {
    next(); // Continuar con la navegación
  }
});

export default router;
