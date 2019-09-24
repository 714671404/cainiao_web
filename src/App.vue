<template>
    <div id="app">
        <transition name="page" mode="out-in">
            <component :is="layout" v-if="layout" />
        </transition>
    </div>
</template>
<script>
    import Default from './views/layouts/default'
    import Basic from './views/layouts/basic'
    export default {
        name: 'App',
        data: () => ({
            layout: "",
        }),
        components: {
            Default,
            Basic
        },
        methods: {
            setLayout(layout) {
                this.layout = layout;
            }
        }
    }
</script>
