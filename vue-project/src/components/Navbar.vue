<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'

</script>


<template>
    <WelcomeItem>
        <router-link to="/books">Books</router-link>
    </WelcomeItem>

    <WelcomeItem>
        Game Updates
    </WelcomeItem>
    <WelcomeItem>

        <router-link to="/podcast">Listen to my podcast</router-link>

    </WelcomeItem>
    
    <WelcomeItem>
        <router-link to="/login"> Login</router-link>
    </WelcomeItem>

    <WelcomeItem>
        <router-link to="/about"> About</router-link>
    </WelcomeItem>

    <router-view></router-view>


</template>
        