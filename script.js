const output = document.getElementById("output");

output.innerHTML = `
  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;

function createPromise() {
  const time = Math.floor(Math.random() * 3) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3]).then((results) => {
  const totalTime = Math.max(...results);

  output.innerHTML = `
    <tr>
      <td>Promise 1</td>
      <td>${results[0].toFixed(3)}</td>
    </tr>
    <tr>
      <td>Promise 2</td>
      <td>${results[1].toFixed(3)}</td>
    </tr>
    <tr>
      <td>Promise 3</td>
      <td>${results[2].toFixed(3)}</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>${totalTime.toFixed(3)}</strong></td>
    </tr>
  `;
});