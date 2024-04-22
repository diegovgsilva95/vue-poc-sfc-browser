import {loadModule} from "../node_modules/vue3-sfc-loader/dist/vue3-sfc-loader.esm.js"
import * as Vue from "../node_modules/vue/dist/vue.esm-browser.js"

window.Vue = window.Vue || Vue

window.compiledCache = {
    storage: {},
    get: k => compiledCache.storage[k],
    set: (k,v) => compiledCache.storage[k]=v,
}

let SFCLoader = window.SFCLoader = {
    loadModule,
    OPTIONS: {
        compiledCache,
        moduleCache: {
            vue: Vue
        },
        async getFile(url){
            let ext = url.match(/\.[^.]+$/)[0]
            console.debug(`getFile: ${url} (extension "${ext}")...`)
            let r = await fetch(url)
            if(!r.ok) throw new Error(`Failed to load component ${url}: HTTP ${r.status} ${r.statusText}`)
            return {
                getContentData: bin => bin ? r.arrayBuffer() : r.text(),
                type: ext
            }
        },
        addStyle(css){
            let styleElm = document.createElement("style")
            styleElm.setAttribute("typpe", "text/css")
            styleElm.textContent = css
            document.head.appendChild(styleElm)
        },
        handleModule: async function (type, getContentData, path, options) { 
            console.debug(`handleModule: "${type}" from "${path}"`)
            switch(type){ 
                case '.css':
                    options.addStyle(await getContentData(false))
                    return null
                case '.mjs':
                    return;
                case ".vue":
                    return;
            }
        },
    },
    loadComponent(componentURL){
        return Vue.defineAsyncComponent(
            _ => SFCLoader.loadModule(componentURL, {...SFCLoader.OPTIONS})
        )
    }
}

export {SFCLoader}