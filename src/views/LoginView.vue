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
    @media only screen and (max-width: 687px) {
        .login-background {
            width: auto;
            height: auto;
        }
    }
    @media only screen and (min-width: 687px) {
        .login-background {
            width: auto;
            height: auto;
            display: block;
        }
    }
      @media only screen and (min-width: 768px) {
        .login-background {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>

