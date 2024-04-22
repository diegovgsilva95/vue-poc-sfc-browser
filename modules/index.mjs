import {createApp} from "../node_modules/vue/dist/vue.esm-browser.js"
import { SFCLoader } from "./sfc-loader.mjs"

console.log("Force loading of custom fonts...");
await Promise.all(
    [...document.fonts.values()].map(font => font.load())
    );
console.log("Done loading.");

const app = createApp(SFCLoader.loadComponent("/components/App.vue"))
app.config.globalProperties.SFCLoader = SFCLoader
app.mount(".app")