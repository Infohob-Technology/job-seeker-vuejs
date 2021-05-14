import Vue from 'vue';
import Router from 'vue-router';
import HomePageContainer from '../pages/Job-seeker/Home/HomePageContainer';
import RegistrationIndex from '../pages/Job-seeker/registration';
import JobsIndex from '../pages/Job-seeker/Jobs';
import LoginIndex from '../pages/Login/index';
import ForgotPasswordIndex from '../pages/forgot-password';
import AdminJobSeeker from '../pages/admin-job-seeker';
import MyAccount from '../pages/My-Account/account-details/index';
import support_messages
  from '../pages/My-Account/support-messages/support-messages';
import Steps from '../pages/Job-seeker/profile/steps';
import index_myAccount
  from '../pages/Job-seeker/MyAccount/index_myAccount';
import tabs from '../pages/Job-seeker/MyAccount/tabs';
import ProfileSummery from '../pages/Job-seeker/MyAccount/ProfileSummery';
import Experience_and_Skills
  from '../pages/Job-seeker/MyAccount/Experience_and_Skills';
import Education_in_MyAccount
  from '../pages/Job-seeker/MyAccount/Education_in_MyAccount';
import Projects from '../pages/Job-seeker/MyAccount/Projects';
import Resume_CV from '../pages/Job-seeker/MyAccount/Resume_CV';
import MyApplications
  from '../pages/Job-seeker/MyApplications/MyApplications';
import modal from '../pages/Job-seeker/Job/job-detail/modal';
import Payments_2 from '../pages/Payments-2/Payments_2';
import AdminJobSeekerDetailedPage
  from '../pages/admin-job-seeker/job-seeker-detailed-view';
import JobDetail from '../pages/Job-seeker/Job/job-detail/JobDetail';
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
    // if (store.getters.isProfileCompleted) {
      next();
      // return;
    // }
    // next('/profile-data');
  } else {
    next();
  }

});
export default router;
