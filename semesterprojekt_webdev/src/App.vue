<template>
    <SiteNavbar />
</template>

<script>
import SiteNavbar from "./components/SiteNavbar.vue";

export default {
    name: "App",
    components: {
        SiteNavbar,
    },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
