# 🕹️ What Is Debouncing?
Debouncing is a technique used to limit how often a function is executed, especially in response to rapid-fire events like typing, scrolling, or resizing.

Instead of running the function every time the event fires, debouncing waits for a pause in activity—then runs the function once.

# 🔍 Real-World Example
Imagine you're building a search bar that fetches suggestions as the user types. Without debouncing, it might send a request on every keystroke. With debouncing, it waits until the user stops typing for a moment before sending the request.