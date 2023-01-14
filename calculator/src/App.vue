<script setup lang="ts">
import Main from "./components/Main.vue";
</script>

<template>
    <section class="main-block">
        <router-view />
    </section>
</template>

<style scoped>
.main-block {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>
