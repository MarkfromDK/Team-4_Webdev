<template>
    <SiteNavbar />
    <SiteHeader />
    <div class="productgrid">
        <div class="product" v-for="product in products" :key="product.id">
            <p class="price">{{ product.attributes.price }} kr</p>
            <h3 class="title">{{ product.attributes.title }}</h3>
        </div>
    </div>
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
    data() {
        return {
            products: "",
        };
    },

    mounted() {
        fetch("https://backend-mark.herokuapp.com/api/products/")
            .then(response => response.json())
            .then(data => (this.products = data.data));
    },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";

.productgrid {
    display: flex;
    flex-wrap: wrap;
}

.product {
    height: 200px;
    background-color: lightgray;
    margin: 40px 40px;
    max-width: 100%;
    width: 28%;
    h3 {
        font-size: 20px;
        text-align: center;
    }
}
.price {
    text-align: center;
    color: #ed5c00;
    font-weight: 600;
    font-size: 18px;
}
</style>
