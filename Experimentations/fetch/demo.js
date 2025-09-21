// todos api
const url = 'https://jsonplaceholder.typicode.com/todos/1';

(async function fetchData() {
  const res = await fetch(url);
  console.log(res); // this will provide us body : ReadableStream

  // ================= 1st way =================
  // const text = await res.text(); // or
  // const text = await res.json(); // consumes the stream
  // console.log(text);


  // ================== 2nd way ================
  const reader = res.body.getReader(); // as body is a ReadableStream we can read this by creating a reader

  // ======================================================
  // console.log(Object.getPrototypeOf(reader).read);
  // const proto = Object.getPrototypeOf(reader);
  // console.log(Object.getOwnPropertyNames(proto)); // or
  console.log(Reflect.ownKeys(Object.getPrototypeOf(reader))); // or
  

  // instead use this 
  // console.dir(reader);

  // ======================================================

  const { value, done } = await reader.read();
  // console.log(done, "-> " + value);
  console.log(new TextDecoder().decode(value));


  // we can apply any approach that we can use on Readable Stream to read the actual data
})();

