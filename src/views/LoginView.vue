<script lang="ts">
import LoginCard from '@/components/LoginCard.vue';

export default {
    data() {
        return {
            count: 0
        };
    },
    components: { LoginCard }
}
</script>

<template>
    <div class="login-background">
        <LoginCard/>
    </div>
</template>

<style scoped>
    .login-background {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

