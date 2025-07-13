## How to boot up the project:
1. run the server locally: node server.js
2. run the client locally: npm start

## What I applied in this project:

### Clean and scalable project structure

An organized structure improves maintainability and makes it easier to scale the application as it grows. It also enhances team collaboration by making the codebase predictable and easy to navigate.

### Container Components DP: NotesDashboard and NoteCard components

This pattern separates logic (containers) from presentation (components), making each easier to test, maintain, and reuse. NotesDashboard handles data flow, while NoteCard focuses on UI, following the single responsibility principle.

### Render Props DP: ListView component

Using render props allows you to share code logic between components while retaining control over rendering. It promotes flexibility and reusability, especially when you want to keep behavior generic but customize rendering.

### HOC: withCrudResourceList performs CRUD operations for array structured data

Encapsulates and abstracts CRUD operations for array-structured data, promoting DRY (Don't Repeat Yourself) code. HOCs help for logic reuse and reduce boilerplate in components.

### Polymorphic Components DP: Text and Button compoenents

They adapt their prendering based on props (rendering as headings, p, button, anchors etc.), enabling flexible UI design while keeping styling and behavior consistent and centralized.

### useCallback as ref: usePersistedRef custom hook

Using useCallback as a stable reference improves performance and ensures consistency across renders. This is especially useful in the custom hook usePersistedRef, which manages mutable references tied to business logic (focusing, validating and keeping the value of components that render or not).

### `src` folder as home path

Treating the src directory as the root path simplifies imports (import from '@/components' instead of relative paths like ../../components) and improves readability, especially in large codebases.

### Layout Components DP: CardLayout and AnimatedLayout components

Layout components abstract structural design elements, allowing for consistent layout reuse across the app. This improves UI consistency and reduces code duplication.

### useDeferredValue: expensive search simulator in NotesDashboard components

Helps defer the update of non-urgent state, improving performance during heavy computations like searches. It keeps the UI responsive while waiting for lower-priority updates.

### useLayoutEffect: AnimatedLayout components

Ensures DOM mutations and layout measurements are completed before the browser paints, making it ideal for animations or measurements. This avoids visual glitches and improves the smoothness of animations.


## To be continued:

- Storybook for common UI components: Button and Text
