### Why we use import maps

When using ES modules in the browser, every `import` must point to an **exact file path or URL**. For example:

```js
import { draw } from "./shapes/square.js";
```

If your project grows, you may have to write long or fragile relative paths like:

```js
import { circle } from "../../../components/shapes/circle.js";
```

This is **hard to manage** and **easy to break** if you move files around.

Import maps solve this by letting you define **short names (aliases)** that map to real paths.

---

### Example without import map

```js
import { draw } from "../../../../../modules/shapes/square.js";
```

### Example with import map

```html
<script type="importmap">
{
  "imports": {
    "shapes": "/modules/shapes/square.js"
  }
}
</script>

<script type="module">
  import { draw } from "shapes";  // shorter and cleaner
</script>
```

Now you don’t care where `square.js` actually lives — if its location changes, you only update the import map once instead of fixing every file.

---

### Summary

* **Problem:** Imports require long, brittle paths.
* **Solution:** Import maps let you create custom names that point to actual file locations.
* **Benefit:** Cleaner code, easier refactoring, centralized control of dependencies.

Recommendation: Use import maps in browser-based projects with many modules.
Next step: Try making one alias (like `"utils": "./src/helpers/util.js"`) and then import it in your code to see the difference.
