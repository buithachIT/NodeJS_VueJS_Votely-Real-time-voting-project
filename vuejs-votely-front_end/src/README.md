# Vue.js Project Structure

## 📁 Directory Structure

```
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Vue components
│   ├── common/      # Reusable components
│   ├── forms/       # Form components
│   └── ui/          # UI components (buttons, inputs, etc.)
├── composables/     # Vue 3 composables (custom hooks)
├── constants/       # Application constants
├── hooks/          # Custom hooks (if needed)
├── layouts/        # Layout components
├── pages/          # Page components (route components)
├── routes/         # Vue Router configuration
├── services/       # API services
├── stores/         # State management (Pinia/Vuex)
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── style/          # Global styles
```

## 🏗️ Best Practices

### 1. **Component Organization**

- **Common components**: Reusable across the app
- **Form components**: Specific to forms
- **UI components**: Basic UI elements
- **Page components**: Route-specific components

### 2. **Composables**

- Keep business logic in composables
- Make them reusable and testable
- Use descriptive names

### 3. **Services**

- Handle all API calls
- Use consistent error handling
- Implement proper TypeScript types

### 4. **Constants**

- Define validation rules
- Store error messages
- Keep configuration values

### 5. **Utils**

- Pure functions only
- No side effects
- Easy to test

### 6. **File Naming**

- Use kebab-case for files: `register-form.vue`
- Use PascalCase for components: `RegisterForm`
- Use camelCase for functions: `validateEmail`

## 🔧 Development Guidelines

### Code Style

- Use Vue 3 Composition API
- Prefer `<script setup>` syntax
- Use TypeScript for better type safety
- Follow ESLint and Prettier rules

### Performance

- Lazy load routes
- Use computed properties for derived state
- Implement proper error boundaries
- Optimize bundle size

### Testing

- Write unit tests for composables
- Test utility functions
- Mock API calls in tests
- Use Vue Test Utils for component testing
