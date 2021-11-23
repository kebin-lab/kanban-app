import { RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({ routes })
