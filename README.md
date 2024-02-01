# lifestory-web

# CSS Convention

BEM (Block Element Modifier) Naming Convention:

BEM is a methodology for naming CSS classes that promotes modularity and reusability by dividing them into blocks, elements, and modifiers.

- **Block**: A standalone, independent component or module (e.g., `.card`, `.navbar`).
- **Element**: A part of a block that has no meaning outside of that block (e.g., `.card__title`, `.navbar__logo`).
- **Modifier**: A variation or state of a block or element (e.g., `.card--highlighted`, `.navbar__logo--small`).

Example:
```css
/* Block */
.card {
  /* Styles for the card block */
}

/* Element */
.card__title {
  /* Styles for the title inside the card */
}

/* Modifier */
.card--highlighted {
  /* Modifier styles for a highlighted card */
}
```

Using the BEM naming convention helps maintain a clear structure, enhances code readability, and makes CSS classes more predictable and reusable within your project.

# Structure

```
src/
|-- assets/              # Static resources
|-- components/          
|   |-- common/          # Generic components
|   |   |-- Card.vue
|   |   |-- Button.vue
|   |   |-- ...
|   |-- specific/        # Components specific to functionalities
|   |   |-- MyNFTCard.vue
|   |   |-- ShopCard.vue
|   |   |-- ...
|   |-- cards/           # Different card types per view
|   |   |-- DashboardCards/
|   |   |   |-- CardType1.vue
|   |   |   |-- CardType2.vue
|   |   |   |-- ...
|   |   |-- ShopCards/
|   |   |   |-- CardTypeA.vue
|   |   |   |-- CardTypeB.vue
|   |   |   |-- ...
|   |   |-- TimelineCards/
|   |   |   |-- CardX.vue
|   |   |   |-- CardY.vue
|   |   |   |-- ...
|   |   |-- ...
|   |-- navigation/      # Navigation components
|   |   |-- Navbar.vue
|   |   |-- Sidebar.vue
|   |   |-- ...
|   |-- auth/            # Authentication-related components
|   |   |-- Login.vue
|   |   |-- Register.vue
|   |   |-- ...
|-- views/               # Application views
|   |-- Dashboard/
|   |   |-- Dashboard.vue
|   |   |-- ...
|   |-- Shop/
|   |   |-- Shop.vue
|   |   |-- ...
|   |-- Timeline/
|   |   |-- Timeline.vue
|   |   |-- ...
|   |-- Login.vue        # View for login page
|   |-- ...
|-- router/              # Vue Router configuration
|   |-- index.js
|-- store/               # State management with Pinia
|   |-- index.js
|   |-- modules/
|   |   |-- nfts.js
|   |   |-- tokens.js
|   |   |-- timeline.js
|   |   |-- shop.js
|   |   |-- ...
|-- services/            # Services for API interaction
|   |-- web3Service.js
|   |-- backendService.js
|   |-- ...
|-- utils/               # Reusable utilities and functions
|-- App.vue              # Root component of the application
|-- main.js              # Application initialization file
|-- ...
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Format with [Prettier](https://eslint.org/)

```sh
npm run format
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```






