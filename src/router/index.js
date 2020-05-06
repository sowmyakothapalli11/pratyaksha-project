import Vue from 'vue'
import Router from 'vue-router'

import EmailCheck from '@/components/auth/EmailCheck'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import CompanyProfile from '@/components/files/CompanyProfile'
import ProjectCreation from '@/components/files/ProjectCreation'
import ProjectCreationRetrieve from '@/components/files/ProjectCreationRetrieve'
import Scroll_After_Signup from '@/components/Home/Scroll_After_Signup'
import Scroll_Before_Signup from '@/components/Home2/Scroll_Before_Signup'
import DownloadLink from '@/components/files/DownloadLink'
import Dashboard from '@/components/files/Dashboard'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Scroll_Before_Signup',
      component: Scroll_Before_Signup
    },

    {
      path: '/Scroll_After_Signup',
      name: 'Scroll_After_Signup',
      component: Scroll_After_Signup
    },

    {
      path: '/ProjectCreationRetrieve',
      name: 'ProjectCreationRetrieve',
      component: ProjectCreationRetrieve
    },

    {
      path: '/ProjectCreation',
      name: 'ProjectCreation',
      component: ProjectCreation
    },

    {
      path: '/CompanyProfile',
      name: 'CompanyProfile',
      component: CompanyProfile
    },

    {
     path: '/Signup',
     name: 'Signup',
     component: Signup 
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/EmailCheck',
      name: 'EmailCheck',
      component: EmailCheck
    },

    {
      path: '/DownloadLink',
      name: 'DownloadLink',
      component: DownloadLink
    },

    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }

  ]
})
