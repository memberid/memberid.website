// Base
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

// library
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Carousel, Slide } from "vue-snap";
import "vue-snap/dist/vue-snap.css";
import "animate.css";

// Components
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import ButtonBase from "./components/button/ButtonBase.vue";
import CardOverview from "./components/card/CardOverview.vue";
import Contact from "./components/layout/LayoutContact.vue";
import AboutItem from "./components/layout/LayoutAbout.vue";

library.add(fab, far, fal, fad);

const app = createApp(App);
app.use(router);

// Layout
app.component("Header", Header).component("Footer", Footer);
// Button
app.component("ButtonBase", ButtonBase);
// Card
app.component("CardOverview", CardOverview);
// Layout
app.component("Contact", Contact);
app.component("AboutItem", AboutItem);

// Library
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Carousel", Carousel).component("Slide", Slide);

app.mount("#app");
