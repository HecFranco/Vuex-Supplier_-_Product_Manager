import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);

//types, pages and components
import AuthenticationPage from '../pages/AuthenticationPage';
//.types and components

//configure the router
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            // path: '/:auth_type',
            name: 'loginPage',
            component: AuthenticationPage,
            meta: { Auth: false, title: 'Login'},
            props:{
                auth_type: 'signIn'
            }
        },
        {
            path: '/signup',
            // path: '/:auth_type',
            name: 'signupPage',
            component: AuthenticationPage,
            meta: { Auth: false, title: 'Signup'},
            props:{
                auth_type: 'signUp'
            }            
        },
        {
            path: '/forget-password',
            // path: '/:auth_type',
            name: 'forgetPasswordPage',
            component: AuthenticationPage,
            meta: { Auth: false, title: 'Forget Password'},
            props:{
                auth_type: 'forgetPassword'
            }            
        },
    ]
});
//.configure the router        

export default router;