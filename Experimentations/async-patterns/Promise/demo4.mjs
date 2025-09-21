// Promise.all()
// This method accepts an array of Promises and returns a new Promise that resolves once all the Promises are fulfilled.

import { setTimeout as delay } from 'node:timers/promises';

const fetchData1 = delay(1000).then(() => 'Data from API 1');
const fetchData2 = delay(2000).then(() => 'Data from API 2');
const fetchData3 = delay(10000).then(() => 'Data from API 3');
const fetchData4 = delay(4000).then(() => 'Data from API 4');
const fetchData5 = delay(6000).then(() => 'Data from API 5');

Promise.all([fetchData1, fetchData2, fetchData3, fetchData4, fetchData5])
  .then(results => {
    console.log(results); // ['Data from API 1', 'Data from API 2']
  })
  .catch(error => {
    console.error('Error:', error);
  });
