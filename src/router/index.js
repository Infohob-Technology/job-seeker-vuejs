import Vue from 'vue';
import Router from 'vue-router';
import HomePageContainer from '../components/HomePageContainer';
import RegistrationIndex from '../components/Job-seeker/registration';
import JobsIndex from '../components/Job-seeker/Jobs';
import LoginIndex from '../components/Login/index';
import ForgotPasswordIndex from '../components/Job-seeker/forgot-password';
import AdminJobSeeker from '../components/admin-job-seeker';
import MyAccount from '../components/My-Account/account-details/index';
import support_messages
  from '../components/My-Account/support-messages/support-messages';
import Steps from '../components/Job-seeker/profile/steps';
import index_myAccount
  from '../components/Job-seeker/MyAccount/index_myAccount';
import tabs from '../components/Job-seeker/MyAccount/tabs';
import ProfileSummery from '../components/Job-seeker/MyAccount/ProfileSummery';
import Experience_and_Skills
  from '../components/Job-seeker/MyAccount/Experience_and_Skills';
import Education_in_MyAccount
  from '../components/Job-seeker/MyAccount/Education_in_MyAccount';
import Projects from '../components/Job-seeker/MyAccount/Projects';
import Resume_CV from '../components/Job-seeker/MyAccount/Resume_CV';
import MyApplications
  from '../components/Job-seeker/MyApplications/MyApplications';
import modal from '../components/Job/job-detail/modal';
import Payments_2 from '../components/Payments-2/Payments_2';
import AdminJobSeekerDetailedPage
  from '../components/admin-job-seeker/job-seeker-detailed-view';
import JobDetail from '../components/Job/job-detail/JobDetail';
import {store} from '../store/store';

Vue.use(Router);
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: () => import('../layouts/noFooterLayout.vue'),
      children: [
        {
          path: '/',
          name: 'HomePageContainer',
          component: HomePageContainer,
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '',
      component: () => import('../layouts/primaryFooterLayout.vue'),
      children: [
        {
          path: '/registration',
          name: 'RegistrationIndex',
          component: RegistrationIndex,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/jobs',
          name: 'JobsIndex',
          component: JobsIndex,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/job-seeker/login',
          name: 'LoginIndex',
          component: LoginIndex,
        },
        {
          path: '/job-seeker/forgot-password',
          name: 'ForgotPasswordIndex',
          component: ForgotPasswordIndex,
        },
        {
          path: '/admin/job-seeker',
          name: 'AdminJobSeeker',
          component: AdminJobSeeker,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/job-detail',
          name: 'JobDetail',
          component: JobDetail,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/admin/job-seeker/:id',
          name: 'AdminJobSeekerDetailedPage',
          component: AdminJobSeekerDetailedPage,
          meta: {
            requiresAuth: true,
          },
        },

        {
          path: '/myAccount',
          name: 'myAccount',
          component: MyAccount,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/support_messages',
          name: 'support_messages',
          component: support_messages,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/profile-data',
          name: 'Steps',
          component: Steps,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/index_myAccount',
          name: 'index_myAccount',
          component: index_myAccount,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/profile',
          name: 'tabs',
          component: tabs,
          meta: {
            requiresAuth: true,
            requiresProfileData: true,
          },
        },
        {
          path: '/ProfileSummery',
          name: 'ProfileSummery',
          component: ProfileSummery,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Education_in_MyAccount',
          name: 'Education_in_MyAccount',
          component: Education_in_MyAccount,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Experience_and_Skills',
          name: 'Experience_and_Skills',
          component: Experience_and_Skills,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Projects',
          name: 'Projects',
          component: Projects,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Resume_CV',
          name: 'Resume_CV',
          component: Resume_CV,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/my-applications',
          name: 'MyApplications',
          component: MyApplications,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/modal',
          name: 'modal',
          component: modal,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Payemnts_2',
          name: 'Payments_2',
          component: Payments_2,
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },

  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresProfileData)) {
    if (store.getters.isProfileCompleted) {
      next();
      return;
    }
    next('/profile-data');
  } else {
    next();
  }

});
export default router;
