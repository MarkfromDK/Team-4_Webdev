<template>
    <SiteNavbar />
    <SiteHeader />
    <SiteFooter />
</template>

<script>
import SiteNavbar from "./components/SiteNavbar.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
    name: "App",
    components: {
        SiteNavbar,
        SiteHeader,
        SiteFooter,
    },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
