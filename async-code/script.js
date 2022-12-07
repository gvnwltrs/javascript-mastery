'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function(country) {

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function(){
//       const [data] = JSON.parse(this.responseText); 
//       console.log(data);

//       const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${Object.values(data.name)[0]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
//           </div>
//         </article> 
//       `; 

//       countriesContainer.insertAdjacentHTML('beforeend', 
//       html);
//       countriesContainer.style.opacity = 1; 

//   });
// }; 

const renderCountry = function(data, className= '') {
  console.log(data);
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${Object.values(data.name)[0]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
      </div>
    </article> 
  `; 

  countriesContainer.insertAdjacentHTML('beforeend', 
  html);
  countriesContainer.style.opacity = 1; 
}

const getCountryAndNeighborData = function(country) {

  // ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function(){
      const [data] = JSON.parse(this.responseText); 
      console.log(data);

      // render country 2
      renderCountry(data); 

      // get neighbor country (2)
      const [neighbor] = data.borders; 

      if(!neighbor) return; 

      // ajax call country 2
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
      request2.send();

      request2.addEventListener('load', function() {
        const [data2] = JSON.parse(this.responseText); 
        console.log(data2); 

        renderCountry(data2, 'neighbour'); 
      }); 
  });
}; 

// testing geting single countries 
// getCountryData('usa'); 
// getCountryData('portugal'); 
// getCountryData('mexico'); 
// getCountryData('philippines'); 
// getCountryData('china'); 

// testing getting country and neighbors 
// getCountryAndNeighborData('usa'); 

// setTimeout(() => {
//   console.log('1 second passed'); 
// }, 1000); 

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request); 

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//     console.log(response); 
//     return response.json(); 
//   }).then(function(data) {
//     console.log(data); 
//     renderCountry(data[0]); 
//   });
// }

const getCountryData = function(country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(response => response.json())
  .then(data => {
    renderCountry(data[0]); 
    console.log(data);
    const neighbor = data[0].borders[0];
    console.log(neighbor);

    if(!neighbor) return;
    // Country 2 
    return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data[0], 'neighbour'));

}

getCountryData('germany'); 