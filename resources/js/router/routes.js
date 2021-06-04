  
import Login from "../components/loginComponent";
import requestList from "../components/requestList";
import tester from "../components/tester";
import requestor from "../components/requestor";
import PageNotFound from "../components/pageNotFound"

// import middleware from './middleware';

export default [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            requiresAuth:false
        }
    },
    {
        path: '/admin/requests',
        name: 'admin-requests',
        component: requestList,
        meta: {
            requiresAuth:true,
            isAdmin: true,
            isTester: false,
            isPo:false
        }
    },
    {
        path: '/tester/requests',
        name: 'tester-request',
        component: tester,
        meta: {
            requiresAuth:true,
            isAdmin: false,
            isTester: true,
            isPo:false
        }
    },
    {
        path: '/requestor/requests',
        name: 'requestor-request',
        component: requestor,
        meta: {
            requiresAuth:true,
            isAdmin: false,
            isTester: false,
            isPo:true
        }
    },
    {
        path: '/page-not-found',
        name: 'page-not-found',
        component:PageNotFound
    }
];