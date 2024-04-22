# Vue SFC In-Browser Demo

Este projeto é uma prova de conceito (POC) para demonstrar a utilização de Componentes de Arquivo Único (Single-File Components, SFC) do Vue.js diretamente no navegador, sem a necessidade de um servidor de desenvolvimento ou de compilação.

## Descrição

Utilizando `vue` e `vue3-sfc-loader`, este projeto configura um ambiente simples onde os componentes Vue são carregados e interpretados no navegador. Isto permite a rápida prototipagem e testes de componentes Vue.

## Características

- **Sem Compilação:** Todos os componentes Vue são carregados e processados diretamente no navegador.
- **Carga Dinâmica de Componentes:** Os componentes são carregados dinamicamente conforme necessário usando o carregador SFC personalizado.

## Dependências

Este projeto depende das seguintes bibliotecas NPM:
- Vue.js >= 3.4.23
- vue3-sfc-loader 0.9.5

## Estrutura do Projeto
```
├── index.htm # Ponto de entrada do projeto, contendo um simples esqueleto HTML5.
├── package.json # Dependências do projeto.
├── modules
│ ├── index.mjs # Script principal que carrega o Vue, o SFCLoader e roda o app.
│ └── sfc-loader.mjs # Carregador SFC personalizado para carregar arquivos .vue.
└── components
├── App.vue # Componente principal da aplicação Vue.
└── ExampleComponent.vue # Um exemplo de componente Vue.
```

## Como Rodar

1. Clone o repositório para sua máquina local ou container.
2. Acesse `index.htm` em um navegador moderno.
3. Interaja com a aplicação conforme necessário.

## Licença

Este projeto está sob a licença WTFPL: faça o que quiser com o projeto!
