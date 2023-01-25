<script lang="ts">
    import OrganizationTable from '@/components/OrganizationTable.vue';
    import Navbar from '@/components/Navbar.vue';
    export default {
        components: {
            OrganizationTable,
            Navbar
        }
    }

</script>

<template>
    <Navbar/>
    <div class="orgs-background">
        <h2 class="text-center">Organization Table</h2>
        <br>
        <OrganizationTable/>
    </div>
</template>

<style scoped>
    .orgs-background {
        height: 100vh;
        width: 100vw;
        padding: 5%;
    }
    
    @media only screen and (max-width: 687px) {
        .orgs-background {
            padding: 40px 0px 0px 0px;
        }
    }
</style>