import Vue from 'vue'
import vHeader from './Head.vue'
import vFooter from './Footer.vue'

[
    vHeader,
    vFooter
].forEach((component) => {
    Vue.component(component.name, component)
});