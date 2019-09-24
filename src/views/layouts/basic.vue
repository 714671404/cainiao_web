<template>
    <div class="basic">
        <v-header/>
        <router-view/>
        <v-footer/>
    </div>
</template>
<script>
    export default {
        name: 'BasicLayout'
    }
</script>
