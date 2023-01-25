<template>
    <div class="d-flex justify-content-center align-items-center flex-column">
        <h1 class="text-center">Not found</h1>
        <h4 class="text-center">We will send you to the previous page</h4>
    </div>
</template>
<script lang="ts">
    export default {
        created() {
            setTimeout(() => {
                this.$router.back()
            }, 2000)
        }
    }
</script>