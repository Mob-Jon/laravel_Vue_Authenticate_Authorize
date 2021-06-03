  
import Login from "../components/loginComponent";
import requestList from "../components/requestList";

import middleware from './middleware';

export default [
    {
        path: '/',
        name: 'login',
        component: Login,
        beforeEnter: middleware.guest,
    },
    {
        path: '/requests',
        name: 'requests',
        component: requestList,
        beforeEnter: middleware.user
    },
];