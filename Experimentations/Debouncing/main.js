
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// // e.g 1 - resize the window and look inthe console 
window.addEventListener('resize', debounce(() => {
  console.log('Resized!');
}, 300));


// e.g 2 - Search Input - keep typing whenever stops block got executed
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', debounce(function () {
  console.log('Fetching suggestions for:', searchInput.value);
}, 500));


