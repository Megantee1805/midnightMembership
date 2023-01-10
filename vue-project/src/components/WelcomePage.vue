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
        Listen to my podcast
    </WelcomeItem>
    
    <WelcomeItem>
        Login
    </WelcomeItem>

    <WelcomeItem>
        About
    </WelcomeItem>

    <router-view></router-view>


</template>