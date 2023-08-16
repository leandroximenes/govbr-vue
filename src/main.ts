import "@govbr-ds/webcomponents";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";

import bindUnidirecional from "./directives/bind-unidirecional";

const app = createApp(App);

// Diretiva global para permitir bind unidirecional com os web components
app.directive("model-form", bindUnidirecional);

app.use(router);
app.mount("#app");
