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
            name: 'loginPage',
            component: AuthenticationPage,
            meta: { Auth: false, title: 'Login'},
            props:{
                type_auth: "signIn"
            }
        },
        {
            path: '/signup',
            name: 'signupPage',
            component: AuthenticationPage,
            meta: { Auth: false, title: 'Signup'},
            props:{
                type_auth: "signUp"
            }            
        },
        {
            path: '/forget-password',
            name: 'forgetPasswordPage',
            component: AuthenticationPage,
            meta: { Auth: false, title: 'Forget Password'},
            props:{
                type_auth: "forgetPassword"
            }            
        },
    ]
});
//.configure the router        

export default router;