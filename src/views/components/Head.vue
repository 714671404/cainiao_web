<template>
    <nav class="header">
        <div class="header-inner">
            <a href="/" class="log"></a>
            <ul class="nav">
                <li><router-link to="/" tag="a">首页</router-link></li>
                <li><router-link to="/" tag="a">Python</router-link></li>
                <li><router-link to="/" tag="a">JavaScript</router-link></li>
                <li><router-link to="/" tag="a">PHP</router-link></li>
                <li><router-link to="/" tag="a">Java</router-link></li>
                <li><router-link to="/" tag="a">C++</router-link></li>
            </ul>
            <div class="log-in">
                <router-link to="/login" tag="a">登录</router-link>
                <router-link to="/login" tag="a">注册</router-link>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'vHeader'
    }
</script>