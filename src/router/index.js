import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/primaryFooterLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/pages/Job-seeker/Home'),
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '',
      component: () => import('../layouts/authLayout.vue'),
      children: [
        {
          path: '/job-seeker/login',
          name: 'LoginIndex',
          component: () => import('../pages/Login/index'),
        },
        {
          path: '/job-seeker/forgot-password',
          name: 'ForgotPasswordIndex',
          component: () => import('../pages/forgot-password'),
        },

      ],
    },
    {
      path: '',
      component: () => import('../layouts/smallFooterLayout.vue'),
      children: [
        {
          path: '/registration',
          name: 'RegistrationIndex',
          component: () => import('../pages/Job-seeker/registration'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/jobs',
          name: 'JobsIndex',
          component: () => import('../pages/Job-seeker/Jobs'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/admin/job-seeker',
          name: 'AdminJobSeeker',
          component: () => import('../pages/admin/job-seeker'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/job-detail',
          name: 'JobDetail',
          component: () => import('../pages/Job-seeker/Job/job-detail/JobDetail'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/admin/job-seeker/:id',
          name: 'AdminJobSeekerDetailedPage',
          component: () => import('../pages/admin/job-seeker-detail'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/myAccount',
          name: 'myAccount',
          component: () => import('../pages/My-Account/account-details/index'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/support_messages',
          name: 'support_messages',
          component: () => import('../pages/My-Account/support-messages/support-messages'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/profile-data',
          name: 'Steps',
          component: () => import('../pages/Job-seeker/profile/steps'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/index_myAccount',
          name: 'index_myAccount',
          component: () => import('../pages/Job-seeker/MyAccount/index_myAccount'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/profile',
          name: 'tabs',
          component: () => import('../pages/Job-seeker/MyAccount/tabs'),
          meta: {
            requiresAuth: true,
            requiresProfileData: true,
          },
        },
        {
          path: '/ProfileSummery',
          name: 'ProfileSummery',
          component: () => import('../pages/Job-seeker/MyAccount/ProfileSummery'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Education_in_MyAccount',
          name: 'Education_in_MyAccount',
          component: () => import('../pages/Job-seeker/MyAccount/Education_in_MyAccount'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Experience_and_Skills',
          name: 'Experience_and_Skills',
          component: () => import('../pages/Job-seeker/MyAccount/Experience_and_Skills'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Projects',
          name: 'Projects',
          component: () => import('../pages/Job-seeker/MyAccount/Projects'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/Resume_CV',
          name: 'Resume_CV',
          component: () => import('../pages/Job-seeker/MyAccount/Resume_CV'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/my-applications',
          name: 'MyApplications',
          component: () => import('../pages/Job-seeker/MyApplications/MyApplications'),
          meta: {
            requiresAuth: true,
          },
        },
        // {
        //   path: '/modal',
        //   name: 'modal',
        //   component: modal,
        //   meta: {
        //     requiresAuth: true,
        //   },
        // },
        {
          path: '/Payemnts_2',
          name: 'Payments_2',
          component: () => import('../pages/Payments-2/Payments_2'),
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
