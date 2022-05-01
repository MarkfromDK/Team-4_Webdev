<template>
    <SiteNavbar />
    <SiteFooter />
    <router-view/>
</template>

<script>
import SiteNavbar from "./components/SiteNavbar.vue";
import SiteFooter from "./components/SiteFooter.vue";


export default {
    name: "App",
    components: {
        SiteNavbar,
        SiteFooter,
    },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
