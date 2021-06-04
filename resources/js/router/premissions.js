// import store from '../store';

// export default (to, from, next) => {
//     // if (store.getters['authenticated']) {
//     //     next({ path: '/requests' });
//     // } else {
//     //     next();
//     // }
//     let role = store.getters['user_role'];

//     if (store.getters['authenticated']) {
//         if (role == 'admin') {
//             next({ path: '/admin/requests' });
//         }
//         else if(role == 'tester'){
//             next({path: '/tester/requests'});
//         }
//         else if (role == 'requestor') {
//             next({ path: '/requestor/requests' });
//         }
//         else {
//             next({path:'/'});
//         }
//     } else {
//         next();
//     }
// }