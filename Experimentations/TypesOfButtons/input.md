Yes, the `<input type="button">` element is still used in specific scenarios where developers want a simple button to perform custom actions without the default behavior of form submission or reset. Since it relies on JavaScript for functionality, it's ideal for triggering actions on the client side. Here are some places where it's commonly used:

### **Use Cases for `<input type="button">`**

1. **JavaScript Triggers**  
   It is often used to call JavaScript functions for tasks like showing alerts, toggling menus, or dynamically updating content on the page.  
   Example:
   ```html
   <input type="button" value="Show Alert" onclick="alert('This is an input button!')">
   ```

2. **Custom User Interactions**  
   Buttons can be styled and used for interactive components in applications, such as:
   - Triggering modals or popups.
   - Running a script to validate a form without submitting it.
   Example:
   ```html
   <input type="button" value="Open Modal" onclick="openModalFunction()">
   ```

3. **Non-Form Actions**  
   In cases where no form submission is required, but user input is necessary to perform some action, this button type is a good choice.

4. **Single-Page Applications (SPAs)**  
   For SPAs built with frameworks like React or Angular, input buttons can trigger state changes or update the virtual DOM.

5. **Reset or Clear Without Affecting Form**  
   Developers can use it to clear specific form fields without resetting the entire form.  
   Example:
   ```html
   <input type="button" value="Clear Name" onclick="document.getElementById('name').value = '';">
   ```

While `<button>` is generally more versatile for modern web development (since it can contain other HTML and doesn't require JavaScript to function), `<input type="button">` remains a lightweight and effective option for simpler tasks.

Would you like a walkthrough of how to use these buttons in a dynamic application or explore alternatives? Let me know!