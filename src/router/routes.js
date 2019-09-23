function path(path) {
    return () => import(`@/views/${path}.vue`)
}
export default [
    {
        path: '/',
        name: 'home',
        component: path('Home')
    },
    {
        path: '/about',
        name: 'about',
        component: path('About')
    }
]