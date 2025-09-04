
--- follow official docs

## 🧩 Other Useful ESLint Rules for Vanilla JS

Here are some commonly used rules that help catch bugs, enforce clarity, and improve code quality:

| Rule Name              | What It Does                                                                 |
|------------------------|------------------------------------------------------------------------------|
| `no-unused-vars`       | Warns about variables that are declared but never used                      |
| `eqeqeq`               | Enforces use of `===` and `!==` instead of `==` and `!=`                     |
| `curly`                | Requires `{}` around all blocks (e.g. `if`, `while`)                         |
| `prefer-const`         | Suggests using `const` when a variable is never reassigned                  |
| `no-console`           | Warns when `console.log()` is used (can be useful in production code)       |
| `no-debugger`          | Prevents accidental use of `debugger` statements                            |
| `no-empty`             | Flags empty blocks like `if () {}`                                           |
| `max-len`              | Enforces a maximum line length (e.g. 80 or 100 characters)                  |
| `indent`               | Enforces consistent indentation (e.g. 2 spaces)                             |
| `comma-dangle`         | Controls trailing commas in arrays/objects                                  |

You can add these to your `rules` block like this:
```js
rules: {
  semi: "error",
  "no-var": "error",
  quotes: ["error", "double"],
  "no-unused-vars": "warn",
  eqeqeq: "error",
  curly: "error",
  "prefer-const": "error",
}
```

---

## 🛠 What Else Can ESLint Do Besides Rules?

ESLint’s config system is more than just rules. Here are other powerful options you can explore:

### 1. **`languageOptions`**
Controls how ESLint parses your code:
- `ecmaVersion`: Set the JS version (e.g. 2021, 2022)
- `sourceType`: `"script"` or `"module"` depending on how you write JS
- `globals`: Define global variables (like `window`, `document`, etc.)

```js
languageOptions: {
  ecmaVersion: 2021,
  sourceType: "module",
  globals: globals.browser,
}
```

---

### 2. **`linterOptions`**
Advanced settings like ignoring files or reporting unused config comments:
```js
linterOptions: {
  reportUnusedDisableDirectives: "error",
}
```

---

### 3. **`settings`**
Used by some plugins to pass shared config values (not common in vanilla JS, but useful later).

---

### 4. **`plugins`**
You already use `@eslint/js`, but you can add others like:
- `eslint-plugin-import` (for managing import order)
- `eslint-plugin-unicorn` (for modern JS best practices)

---

### 5. **Multiple Config Blocks**
You can define different rules for different file types:
```js
defineConfig([
  {
    files: ["**/*.js"],
    rules: { /* JS rules */ },
  },
  {
    files: ["**/*.md"],
    languageOptions: { language: "markdown" },
    rules: { /* Markdown rules */ },
  },
])
```

---
