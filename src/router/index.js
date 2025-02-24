
import ContadorView from '@/views/ContadorView.vue'
import CoresView from '@/views/CoresView.vue'
import HomeView from '@/views/HomeView.vue'
import ListatarefaView from '@/views/ListatarefaView.vue'
import ListaView from '@/views/ListaView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes= [
  {path : '/', name: 'Home', component : HomeView, meta:{title:'Home'}},
  {path: '/dashboard', name: 'Dashboard',component: ContadorView, meta:{title: 'Dashboard', requiresAuth: true}},
  {path: '/carros', name: 'Carros',component:  ListaView, meta:{title: 'Carros'}},
  {path: '/cores', name:'Cores' ,component: CoresView, meta:{title: 'Cores'}},
  {path: '/tarefas', name:'Tarefas' ,component: ListatarefaView, meta:{title: 'Lista de Tarefas'}},

];

const router = createRouter({
  history: createWebHistory(),
  routes,

})

router.beforeEach((to,from, next) => {
  const isAuthenticated = false;
  if (to.meta.requiresAuth && !isAuthenticated){
    next({name:'Dashboard'});
  }else{
    next()
  }
  
  document.title = to.meta.title || 'Minha Aplicação Vue';
});


export default router
