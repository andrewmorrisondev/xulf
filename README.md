
# **Xulf: Low-Code Website Builder**

Xulf is a low-code (potentially no-code) platform built for creating internal web applications. It leverages a modular Nx monorepo architecture to manage shared libraries, reusable components, and scalable backend services. This document provides an overview of the project, setup instructions, and developer workflows.

<details>
<summary>**Table of Contents**</summary>

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Dependencies](#dependencies)
4. [Setup Instructions](#setup-instructions)
5. [Developer Workflows](#developer-workflows)
    - [Generate a New Shared Component](#1-generate-a-new-shared-component)
    - [Create a New Library](#2-create-a-new-library)
    - [Create a New App](#3-create-a-new-app)
    - [Run Tests](#4-run-tests)
    - [Build for Production](#5-build-for-production)
    - [Reset and Clear Cache](#6-reset-and-clear-cache)
6. [Plugins and Custom Generators](#plugins-and-custom-generators)
7. [Future Plans](#future-plans)
8. [Contributions](#contributions)

</details>

---

## **Features**
<details>
<summary>Click to expand</summary>

1. **Monorepo Architecture**:
   - Built with **Nx** for modularity, efficient builds, and clear dependency management.
   - Centralized libraries and components to enable reuse across projects.

2. **Frontend Framework**:
   - Utilizes **React** and **Next.js** for generating web applications with server-side rendering (SSR) and static site generation (SSG).

3. **Styling Options**:
   - Supports **Emotion**, **Mantine**, **MUI Joy**, and **styled-components** for component-level styling.

4. **Testing and Quality**:
   - Comprehensive unit testing with **Jest** and **Testing Library**.
   - End-to-end testing with **Cypress** and **Playwright**.

5. **Tooling**:
   - Enhanced development experience with **TypeScript**, **ESLint**, and **Prettier**.
   - Component and story management using **Storybook**.

6. **Future Plans**:
   - Transition to a visual, drag-and-drop UI builder.
   - Add reusable backend services for authentication, file storage, and data management.
   - Store built sites as json to generate the save file for a site.

</details>

---

## **Project Structure**
<details>
<summary>Click to expand</summary>

The monorepo is organized as follows:
- **Apps**: Contains individual web applications generated by Xulf.
- **Libs**: Houses reusable libraries, components, and services.

Key libraries and components include:
- `libs/ui`: Shared UI components like the `FloatingNavBar` and `ThemeContext`.
- `libs/shared-backend`: (Planned) Backend services for authentication, logging, and CRUD operations.

</details>

---

## **Dependencies**
<details>
<summary>Click to expand</summary>

### **Core Dependencies**
- Frontend Framework: `React`, `Next.js`
- Styling: `@emotion`, `Mantine`, `MUI Joy`, `styled-components`
- Animations: `framer-motion`
- Email Integration: `emailjs-com`

### **Dev Tools**
- Testing: `Jest`, `Cypress`, `Playwright`
- Build Tools: `Nx`, `Vite`
- Storybook: For component-driven development and UI testing.

</details>

---

## **Setup Instructions**
<details>
<summary>Click to expand</summary>

1. **Install Nx CLI**:
   ```bash
   npm install -g nx
   ```

2. **Clone the Repository**:
   ```bash
   git clone <repo-url>
   cd xulf
   yarn install
   ```

3. **Run the Project**:
   - Start the development server for a specific app:
     ```bash
     nx serve <app-name>
     ```
   - Open the Nx Console for a graphical interface:
     ```bash
     nx graph
     ```

</details>

---

## **Developer Workflows**
<details>
<summary>Click to expand</summary>

### 1. **Generate a New Shared Component**
To create a reusable UI component:
```bash
nx g @nrwl/react:component <component-name> --directory=libs/ui/src/lib/<component-name>
```

Example:
```bash
nx g @nrwl/react:component Button --directory=libs/ui/src/lib
```

### 2. **Create a New Library**
To create a shared library for components, hooks, or services:
```bash
nx g @nrwl/react:library <library-name> --directory=libs
```

Example:
```bash
nx g @nrwl/react:library shared-ui
```

### 3. **Create a New App**
To scaffold a new Next.js app:
```bash
nx g @nx/next:application <app-name>
```

Example:
```bash
nx g @nx/next:application customer-dashboard
```

### 4. **Run Tests**
Run tests for a specific app or library:
```bash
nx test <project-name>
```

Run tests for all affected projects:
```bash
nx affected --target=test
```

### 5. **Build for Production**
Build a project for deployment:
```bash
nx build <project-name>
```

Build all affected projects:
```bash
nx affected --target=build
```

### 6. **Reset and Clear Cache**
If you encounter dependency graph issues, reset the cache:
```bash
nx reset
nx clear-cache
```

</details>

---

## **Plugins and Custom Generators**
<details>
<summary>Click to expand</summary>

### Plugins Used:
- **@nx/next**: For managing Next.js applications.
- **@nx/react**: For React libraries and components.
- **@nx/storybook**: For creating and managing Storybook stories.
- **@nx/cypress** and **@nx/playwright**: For end-to-end and integration testing.
- **@nx/vite**: For bundling and faster builds.

### Custom Generators:
- Preconfigured styles and linter rules for new applications:
  ```json
  "generators": {
    "@nx/next": {
      "application": {
        "style": "@emotion/styled",
        "linter": "eslint"
      }
    },
    "@nx/react": {
      "library": {
        "unitTestRunner": "jest"
      }
    }
  }
  ```

</details>

---

## **Future Plans**
<details>
<summary>Click to expand</summary>

### 1. **Drag-and-Drop UI Builder**
- Develop a visual interface for building apps with real-time previews.

### 2. **Reusable Backend Services**
- Authentication: JWT, OAuth, or SSO support.
- File Storage: AWS S3 or Google Cloud integration.
- CRUD APIs: REST or GraphQL for database operations.
- Logging and Metrics: Centralized service for app telemetry.

### 3. **Unified Deployment**
- Deploy Xulf as a platform for generating and hosting apps dynamically.

</details>

---

## **Contributions**
<details>
<summary>Click to expand</summary>

Contributions are welcome! Feel free to submit pull requests, file issues, or suggest improvements. Together, we can make Xulf a powerful low-code solution for internal web app creation.

For questions, check the [Nx Documentation](https://nx.dev) or reach out to the team.

</details>
