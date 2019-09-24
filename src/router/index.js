import Vue from "vue";
import routes from './routes';
import Router from "vue-router";

Vue.use(Router);

const router = createRouter();

export default router

function createRouter() {
    const router = new Router({
        mode: "history",
        base: process.env.BASE_URL,
        routes
    });
    router.beforeEach(beforeEach);
    return router
}
async function beforeEach(to, from, next) {
    let layout = await ifPath(to.name);
    // App.methods.setLayout(layout);
    router.app.setLayout(layout);
    next();
}
function ifPath(name) {
    return ['login', 'register'].indexOf(name) < 0 ? 'basic' : 'default'
}