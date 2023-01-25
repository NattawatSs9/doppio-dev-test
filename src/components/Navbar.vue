<template>
    <!-- As a link -->
    <nav class="navbar navbar-light bg-light px-3">
        <a class="navbar-brand">Organization</a>
        <form @submit="logout()" class="form-inline">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
        </form>
    </nav>
</template>
<script lang="ts">
    export default {
        methods: {
            logout() {
                this.$cookies.remove("token")
                this.$router.push("/login")
            }
        }
    }
</script>