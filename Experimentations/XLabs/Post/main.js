// fetch('http://localhost:4000/', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

async function uploadFile() {
  const fileInput = document.getElementById("fileInput");

  if (fileInput.files.length === 0) {
    console.log("No file selected");
    return;
  }

  const file = fileInput.files[0];
  console.log(file);
  const formData = new FormData();
  formData.append("file", file); // 'file' is the key name for the backend
  console.log(formData);
  try {
    const response = await fetch("http://localhost:4000/", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

// function getFile() {
//   const fileInput = document.getElementById("fileInput");

//   if (fileInput.files.length > 0) {
//     const file = fileInput.files[0];
//     console.log("File Name:", file.name);
//     console.log("File Type:", file.type);
//     console.log("File Size:", file.size, "bytes");
//   } else {
//     console.log("No file selected");
//   }
// }
