// 
// alert(location);

//  Navigate to a new page
// location.assign("https://www.mozilla.org"); 
// location = "https://www.mozilla.org";


// Reloading the current page
// location.reload();

(function reloadPageWithHash() {
  location.replace(`https://example.com/#${location.pathname}`);
});