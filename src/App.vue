<template>
    <div id="app">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <a href="/test" target="_blank">跳转其他页面</a>
        <router-view></router-view>
    </div>
</template>
