# Understand ESLint from Scratch
## ESLint Setup for Vanilla JavaScript (Flat Config)
---

## 1. ✅ Create a basic project 
```bash
mkdir Demo 
cd Demo
npm init -y
touch main.js
```

## 2. 🛠 Initialize ESLint
You can install and configure ESLint using this command:

```bash
npm init @eslint/config@latest
```

After this 
```bash
> eslint-indepth@1.0.0 npx
> create-config

@eslint/create-config: v1.10.0

√ What do you want to lint? · javascript
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No 
√ Where does your code run? · browser                                            
The config that you've selected requires the following dependencies:
eslint, @eslint/js, globals
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · npm
☕️Installing...
```

Once you finish the setup, ESLint will generate a config file (likely eslint.config.mjs ) and you’ll be ready to lint your main.js.

## Intially what is inside your eslint.config.mjs file
```js 
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } },
]);
```

Let’s break down what each part of your `eslint.config.mjs` is doing:

### 🧩 Config Explained

```js
import js from "@eslint/js";
```
- Imports ESLint’s official JavaScript plugin—includes core rules for JS.

```js
import globals from "globals";
```
- Brings in predefined global variables for environments like `browser`, `node`, etc.

```js
import { defineConfig } from "eslint/config";
```
- A helper to define your config using the new flat config format.

---

### 🔧 The Config Block

```js
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
```

| Key               | What It Does                                                                 |
|-------------------|------------------------------------------------------------------------------|
| `files`           | Targets all JS files in your project                                         |
| `plugins`         | Loads the `@eslint/js` plugin                                                |
| `extends`         | Uses ESLint’s recommended rules (safe and beginner-friendly)                 |
| `languageOptions` | Sets the environment to browser, so ESLint knows about `window`, `document` |

---

### ✅ What You Can Do Now

1. **Write some JS in `main.js`**—try things like:
   ```js
   var name = "Anonymous"
   console.log("Hi " + name)
   ```

2. **Run ESLint**:
   ```bash
   npx eslint main.js
   ```

3. **Try auto-fix**:
   ```bash
   npx eslint main.js --fix
   ```

---

if you will run these commands you found that nothing is happend just command got executed without any magic!!!

### now add the rules
ESLint config is too minimal
Let’s add a few rules manually to make sure it flags something. Update your eslint.config.mjs like this:

```js 
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {globals: globals.browser},
    rules: {
      semi: "error",           // require semicolons
      "no-var": "error",       // disallow var
      quotes: ["error", "double"], // enforce double quotes
    },
  },
]);
```
now try these commands again 
**Run ESLint**:
   ```bash
   npx eslint main.js
   ```
it will start giving you errror:- 
main.js
  1:1   error  Unexpected var, use let or const instead  no-var
  1:23  error  Missing semicolon                         semi
  2:26  error  Missing semicolon                         semi

✖ 3 problems (3 errors, 0 warnings)
  3 errors and 0 warnings potentially fixable with the `--fix` option.

now 
**Try auto-fix**:
   ```bash
   npx eslint main.js --fix
   ```

This will clean up simple issues like missing semicolons or quote style.
now check your code in main.js

now whenever you will miss the semicolon or using var it will warn you by showing that red underline warning sign
you can run this  `npx eslint main.js --fix` command to fix all these syntax and semicolon issues.

## ✅ What ESLint Does
- Flags syntax errors and bad practices
- Enforces consistent style (e.g. semicolons, quotes)
- Helps catch bugs early
- Can auto-fix many issues

## 🧠 Notes
- This setup uses ESLint's flat config system introduced in v9+
- You can expand it later to support React, TypeScript, Markdown, etc.
- For CSS linting, consider using Stylelint
