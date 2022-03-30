import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

library.add(fas, faYoutube, faFacebook, faInstagram, faTwitter);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
