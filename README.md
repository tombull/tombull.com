# Tom Bull Personal Website

This repository contains the source code for my personal website, hosted at [tombull.com](https://tombull.com).

## Technologies Used

- **Paper Design Shaders:** For the dynamic WebGL mesh gradient background (`@paper-design/shaders` used via vanilla JavaScript implementation). From [paper.design](https://paper.design) [[docs](https://shaders.paper.design), [github](https://github.com/paper-design/shaders), [npm](https://www.npmjs.com/package/@paper-design/shaders)].

## Development

This project uses `pnpm` for package management.

### Prerequisites

- Node.js
- [pnpm](https://pnpm.io/installation)

### Getting Started

1.  **Install dependencies:**

    ```bash
    pnpm install
    ```

2.  **Start the development server:**
    ```bash
    pnpm run dev
    ```
    This will start a local server, usually at `http://localhost:5173`. The site will auto-reload when you make changes.

## Building for Production

To create a production-ready, minified build:

```bash
pnpm build
```

The output will be generated in the `dist/` directory as a single, fully-inlined, minified `index.html` file, ready for static deployment.
