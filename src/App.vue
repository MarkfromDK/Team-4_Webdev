<template>
    <SiteNavbar />
    <SiteHeader />
</template>

<script>
import SiteNavbar from "./components/SiteNavbar.vue";
import SiteHeader from "./components/SiteHeader.vue";

export default {
    name: "App",
    components: {
        SiteNavbar,
        SiteHeader,
    },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
