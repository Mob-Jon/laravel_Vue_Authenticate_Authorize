import store from '../../../store';

export default (to, from, next) => {
    if (store.getters['authenticated']) {
        next({ path: '/requests' });
    } else {
        next();
    }
}