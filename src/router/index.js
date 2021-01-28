import Vue from 'vue'
import Router from 'vue-router'
import HomePageContainer from '../components/HomePageContainer'
import RegistrationIndex from '../components/Job-seeker/registration'
import JobsIndex from '../components/Job-seeker/Jobs'
import LoginIndex from '../components/Login/index'
import ForgotPasswordIndex from '../components/Job-seeker/forgot-password'
import AdminJobSeeker from '../components/admin-job-seeker'
import MyAccount from '../components/My-Account/account-details/index'
import support_messages from '../components/My-Account/support-messages/support-messages'
import Steps from "../components/Job-seeker/profile/steps";
import index_myAccount from "../components/Job-seeker/MyAccount/index_myAccount";
import tabs from "../components/Job-seeker/MyAccount/tabs";
import ProfileSummery from "../components/Job-seeker/MyAccount/ProfileSummery";
import Experience_and_Skills from "../components/Job-seeker/MyAccount/Experience_and_Skills";
import Education_in_MyAccount from "../components/Job-seeker/MyAccount/Education_in_MyAccount";
import Projects from "../components/Job-seeker/MyAccount/Projects";
import Resume_CV from "../components/Job-seeker/MyAccount/Resume_CV";
import MyApplications from "../components/Job-seeker/MyApplications/MyApplications";
import modal from "../components/Job/job-detail/modal";
import Payments_2 from "../components/payment/Payments_2";
import AdminJobSeekerDetailedPage from '../components/admin-job-seeker/job-seeker-detailed-view';
import JobDetail from '../components/Job/job-detail/JobDetail'
import JobDetail_2 from "../components/Job/job-detail/JobDetail_2";
import accounts_detail from "../components/Job-seeker/MyAccount/accounts_detail";
import change_password from "../components/Job-seeker/MyAccount/change_password";
import index_myAccount_2 from "../components/Job-seeker/MyAccount/index_myAccount_2";
import myAccount_4 from "../components/Job-seeker/MyAccount/myAccount_4";
import reports from "../components/Job-seeker/MyAccount/reports";
import index_payment_1 from "../components/payment/index_payment_1";
import index_payment_3 from "../components/payment/index_payment_3";
import posting_1 from "../components/posting/posting_1";
import posting_4 from "../components/posting/posting_4";
import Recruiter from "../components/Recruiter/Recruiter";
import recruiter_1 from "../components/Recruiter/recruiter_1";
import recruiter_3 from "../components/Recruiter/recruiter_3";
import tab from "../components/admin-job-seeker/job-seeker-detailed-view/Job Seeker Details/tab";
import MyAccount_3 from "../components/admin-job-seeker/MyAccount/MyAccount_3";
import {store} from '../store/store'
import tab_PostingDetails from "../components/posting/tab_PostingDetails";

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/registration',
      name: 'RegistrationIndex',
      component: RegistrationIndex,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/jobs',
      name: 'JobsIndex',
      component: JobsIndex,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/job-seeker/login',
      name: 'LoginIndex',
      component: LoginIndex
    },
    {
      path: '/job-seeker/forgot-password',
      name: 'ForgotPasswordIndex',
      component: ForgotPasswordIndex
    },
    {
      path: '/admin/job-seeker',
      name: 'AdminJobSeeker',
      component: AdminJobSeeker,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/admin/job-seeker/:id',
    //   name: 'AdminJobSeekerDetailedPage',
    //   component: AdminJobSeekerDetailedPage,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/',
      name: 'HomePageContainer',
      component: HomePageContainer,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/myAccount',
      name: 'myAccount',
      component: MyAccount,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/support_messages',
      name: 'support_messages',
      component: support_messages,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my-account',
      name: 'Steps',
      component: Steps,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/job-seeker/tabs',
      name: 'tabs',
      component: tab,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ProfileSummery',
      name: 'ProfileSummery',
      component: ProfileSummery,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Education_MyAccount',
      name: 'Education_in_MyAccount',
      component: Education_in_MyAccount,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Experience_and_Skills',
      name: 'Experience_and_Skills',
      component: Experience_and_Skills,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Resume_CV',
      name: 'Resume_CV',
      component: Resume_CV,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/MyApplications',
      name: 'MyApplications',
      component: MyApplications,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/modal',
      name: 'modal',
      component: modal,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Payment-2',
      name: 'Payments_2',
      component: Payments_2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/jobdetail',
      name: 'JobDetail_2',
      component: JobDetail_2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/accounts_detail',
      name: 'accounts_detail',
      component: accounts_detail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/change_password',
      name: 'change_password',
      component: change_password,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/MyAccount-2',
      name: 'index_myAccount-2',
      component: index_myAccount_2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/MyAccount-4',
      name: 'myAccount_4',
      component: myAccount_4,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: reports,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Payment-1',
      name: 'index_payment_1',
      component: index_payment_1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Payment-3',
      name: 'index_payment-3',
      component: index_payment_3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posting-1',
      name: 'posting_1',
      component: posting_1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posting-4',
      name: 'posting_4',
      component: posting_4,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Recruiter',
      name: 'Recruiter',
      component: Recruiter,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/recruiter-1',
      name: 'recruiter_1',
      component: recruiter_1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/recruiter-3',
      name: 'recruiter_3',
      component: recruiter_3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/MyAccount-3',
      name: 'MyAccount_3',
      component: MyAccount_3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Posting-Details',
      name: 'tab_PostingDetails',
      component: tab_PostingDetails,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/job-seeker/login')
  } else {
    next()
  }
})
export default router
