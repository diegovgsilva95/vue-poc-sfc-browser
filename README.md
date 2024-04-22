# Vue SFC In-Browser Demo

This project is a proof-of-concept (POC) in order to demonstrate the usage of Vue.js Single-File Components (SFC) directly on the browser, without the need of a development server, transpiling or bundling.

## Description

Using `vue` and `vue3-sfc-loader`, this project set up a simple environment where Vue components are loaded and interpreted inside the browser. This approach allows for rapid prototyping and Vue component testing.

## Features

- **No Bundling:** All Vue components are loaded and processed directly on the browser.
- **Dynamic Loading of Components:** The components are loaded dynamically as needed using a custom SFC Loader.

## Dependencies

This project depends on the following NPM libraries:
- Vue.js >= 3.4.23
- vue3-sfc-loader 0.9.5

## Project structure
```
├── index.htm # Entry point of project, containing a basic HTML5 skeleton.
├── package.json # Project dependencies
├── modules
│ ├── index.mjs # Main script that loads Vue, SFCLoader and runs the app.
│ └── sfc-loader.mjs # Custom SFC Loader capable of loading .vue files.
└── components
├── App.vue # Main application component.
└── ExampleComponent.vue # Vue component example.
```

## How to run
1. Clone the repo to your machine or container.
2. Access `index.htm` using a modern browser.
3. You're all set.

## License

This project uses WTFPL license: do whatever you want to do!
