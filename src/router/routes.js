function path(path) {
    return () => import(`@/views/${path}.vue`);
}
export default [
    {
        path: '/',
        name: 'home',
        component: path('Home')
    },
    {
        path: '/login',
        name: 'login',
        component: path('oauth/Login')
    }
]