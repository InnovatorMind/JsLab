// const form = document.querySelector('form');
// console.dir(form)

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);

//     for(const field of formData) {
//         console.log(field);
//     }
//     console.log(formData);
// });


const input = document.querySelector('input[type="file"]');

input.addEventListener('change', () => {
  const file = input.files[0]; // Get the first file
  const file1 = input.files[1]; // Get the first file
  console.log(file); // File object
  console.log(file1); // File object
  console.dir(file); // Inspect its properties

  // Read the contents (buffer-like) without sending it anywhere
  const reader = new FileReader();
  reader.onload = function (event) {
    const arrayBuffer = event.target.result;
    console.log(arrayBuffer); // This is similar to what Multer gets on the backend
  };
  reader.readAsArrayBuffer(file); // or readAsDataURL(file) or readAsText(file)
});
