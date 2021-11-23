import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModel from '@/components/templates/KbnTaskDetailModal.vue'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requireAuth: true }
}, {
  path: '/login',
  component: KbnLoginView,
  meta: { }
}, {
  path: '/tasks/:id',
  component: KbnTaskDetailModel,
  meta: { requireAuth: true }
}, {
  path: '*',
  redirect: '/'
}]
