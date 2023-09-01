import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/scss/main.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { facebook } from "@fortawesome/free-brands-svg-facebook";

/* add icons to the library */
library.add(fas, faTwitter, fab, far);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
