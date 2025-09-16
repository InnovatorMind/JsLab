---

### 🧠 What Is Event Delegation?

Event delegation is a pattern where you **attach a single event listener to a parent element**, and let it handle events from its child elements using **event bubbling**.

Instead of adding listeners to every child, you listen once on the parent and use `event.target` to figure out which child triggered the event.

---

### 🔍 Why It Works

In the DOM, most events **bubble up** from the target element to its ancestors. So if a `<li>` is clicked, the event bubbles up to its `<ul>`, then to `<body>`, etc.

You can intercept that bubbling at any level.

---

### ✅ Example: Click on List Items

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<script>
  document.getElementById('menu').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      console.log('Clicked:', e.target.textContent);
    }
  });
</script>
```

> 🔥 Only one listener handles all `<li>` clicks—even if you add more `<li>`s dynamically later.

---

### 🧩 Real-World Use Cases

- **Dynamic lists**: Like todo apps, menus, or dropdowns.
- **Galleries**: Handle image clicks or navigation from a single container.
- **Drag-and-drop zones**: Track drag events from multiple items.
- **Form validation**: Listen for input changes across multiple fields.
- **Games**: Handle clicks or moves from multiple tiles or buttons.

---

### 🚀 Benefits

- **Performance**: Fewer listeners = faster rendering.
- **Scalability**: Works even if elements are added/removed dynamically.
- **Cleaner code**: Centralized logic, easier to maintain.

---
