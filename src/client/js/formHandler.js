// import { checkForName } from './nameChecker';
// import { checkURL } from './checkURL';

import { checkURL } from './checkURL';

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

const submitBtn = document.querySelector('#submit');

console.log('Display by formHandler.js');

submitBtn.addEventListener('click', () => {
  console.log(url.value);
  // const inputURL = url.value;
  // console.log(inputURL);

  handleSubmit();

  // checkURL(inputURL);
});

// function handleSubmit(e) {
//   // e.preventDefault();
//   console.log(url.value);
//   console.log('Loading in formHandler');
// }
// handleSubmit();

const handleSubmit = async event => {
  // event.preventDefault();
  console.log('Loading in formHandler');

  const inputURL = url.value;

  console.log(inputURL);

  if (checkURL(inputURL)) {
    console.log('::: Form Submitted :::');
    console.log(`Input URL: ${inputURL}`);

    // postData('http://localhost:8080/add-url', { inputURL }).then(data => {
    //   console.log(data);
    // document.querySelector(
    //   '#score_tag'
    // ).innerHTML = `Polarity: ${data.score_tag}`;

    fetch('http://localhost:8080/meaning', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: formText }),
    }).then(res => res.JSON);

    console.log(res);

    // });
    // .then(updateUI());
  } else {
    alert('Please try with a valid URL.');
  }
};

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

const postData = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  console.log(data);
  console.log(res);

  try {
    const newData = await res.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log('Error!', error);
  }
};

// const updateUI = async data => {
//   // <img src="${data.img} alt="Picture of the news">

//   const updateInnerHTML = `
// <div>
// <p>Article</p>
// <p>${data.headline}</P>
// <div>
// <p>${data.writer}</p>
// <p>${data.date}</p>
// <div>
// <p>${data.text}</p>
// <button>Button to link</button>
// </div>

// <div>
// <p>Point</p>
// <p>Polarity: ${data.polarity}</p>
// <p>Confidence: ${data.polarityConfidence}</p>
// <p>Subjectivity: ${data.subjectivity}</p>
// <p>Confidence: ${data.subjectivityConfidence}</p>
// </div>  `;

//   result.innerHTML = updateInnerHTML;
// };

// // export default handleSubmit;

// module.exports = handleSubmit();
export { handleSubmit };
// export { handleSubmit, postData, updateUI };
