// import { checkForName } from './nameChecker';
// import { checkURL } from './checkURL';

// function handleSubmit(event) {
//   event.preventDefault();

//   // check what text was put into the form field
//   let formText = document.getElementById('name').value;
//   Client.checkForName(formText);

//   console.log('::: Form Submitted :::');

//   fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function (res) {
//       document.getElementById('results').innerHTML = res.message;
//     });
// }

// const url = document.querySelector('#input-url').value;
// const point = document.querySelector('.point');
// const article = document.querySelector('.article');
// const result = document.querySelector('.result-section');
const url = document.querySelector('#input-url');
const inputURL = url.value;
const submitBtn = document.querySelector('#submit');

console.log('Discplay by formHandler.js');
console.log(`Why this is not shown: ${url.value}`);

submitBtn.addEventListener('click', () => {
  console.log(url.value);
});

// function handleSubmit(e) {
//   // e.preventDefault();
//   console.log(inputURL);
// }
// handleSubmit();

// const handleSubmit = async event => {
//   event.preventDefault();
//   console.log('Loading in formHandler');

//
//   console.log(url);

//   if (Client.checkURL(url)) {
//     console.log('::: Form Submitted :::');
//     console.log(`Input URL: ${url}`);

//     postData('http://localhost:8080/add-url', { url })
//       .then(data => {
//         document.querySelector(
//           '#polarity'
//         ).innerHTML = `Polarity: ${data.score_tag}`;
//       })
//       .then(updateUI());
//   } else {
//     alert('Please try with a valid URL.');
//   }
// };

// submitBtn.addEventListener('click', function (e) {
//   // if (url === '') {
//   //   alert('Please put a correct URL');
//   // } else {
//   handleSubmit();
//   // show result section

//   // result.style.display = 'block';

//   // getData(url.value)
//   //   .then(postData(url.value))
//   //   .then(newData => postData('/', newData))
//   //   .then(updateUI(data));

//   // url = '';
//   // }
// });

// // submitBtn();

// // const getData = async url => {
// //   try {
// //     const res = await fetch(url);
// //     const data = await res.json();
// //     return data;
// //   } catch (error) {
// //     console.log('Error!', error);
// //   }
// // };

// const postData = async (url = '', data = {}) => {
//   const res = await fetch(url, {
//     method: 'POST',
//     credentials: 'same-origin',
//     mode: 'cors',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   try {
//     const newData = await res.json();
//     return newData;
//   } catch (error) {
//     console.log('Error!', error);
//   }
// };

// // export default handleSubmit;

// const updateUI = async data => {
//   const updateInnerHTML = `
//   <div>
//   <p>Article</p>
//    <img src="${data.img} alt="Picture of the news">
//   <p>${data.headline}</P>
//   <div>
//   <p>${data.writer}</p>
//   <p>${data.date}</p>
//   <div>
//   <p>${data.text}</p>
//   <button>Button to link</button>
//   </div>

//   <div>
//   <p>Point</p>
//   <p>Polarity: ${data.polarity}</p>
//   <p>Confidence: ${data.polarityConfidence}</p>
//   <p>Subjectivity: ${data.subjectivity}</p>
//   <p>Confidence: ${data.subjectivityConfidence}</p>
//   </div>  `;

//   result.innerHTML = updateInnerHTML;
// };

// module.exports = handleSubmit();
// export { handleSubmit };
// export { handleSubmit, postData, updateUI };
