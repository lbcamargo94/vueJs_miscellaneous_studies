import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkingWithComponents from '../views/working-with-components/WorkingWithComponents.vue'
import VIfDirective from '../views/v-if-directive/VIfDirective.vue'
import VForDirective from '../views/v-for-directive/VForDirective.vue'
import VModelDirective from '../views/v-model-directive/VModelDirective.vue'
import SubmissionEvent from '../views/submission-event/SubmissionEvent.vue'
import PreventDefault from '../views/prevent-default/PeventDefault.vue'
import NotFoundPage from '../views/404-not-found/404NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/working_with_components',
      name: 'working_with_components',
      component: WorkingWithComponents,
    },
    {
      path: '/v_if_directive',
      name: 'v_if_directive',
      component: VIfDirective,
    },
    {
      path: '/v_for_directive',
      name: 'v_for_directive',
      component: VForDirective,
    },
    {
      path: '/v_model_directive',
      name: 'v_model_directive',
      component: VModelDirective,
    },
    {
      path: '/submission_event',
      name: 'submission_event',
      component: SubmissionEvent,
    },
    {
      path: '/prevent_default',
      name: 'prevent_default',
      component: PreventDefault,
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundPage,
    },
  ],
})

export default router
