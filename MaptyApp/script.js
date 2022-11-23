'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class App {

    constructor() {
        this._getPosition(); 

        form.addEventListener('submit', this._newWorkout.bind(this)); 
        
        inputType.addEventListener('change', function() {
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
        }); 
    }

    _getPosition() {
        // your vpn will affect where you end up in you leaflet map
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
                alert('could not get your position'); 
            });
        }
    }

    _loadMap(position) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        const coords = [latitude, longitude]; 

        map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // open form 
        map.on('click', this._showForm);
    }

    _showForm(mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus(); 
    }

    _toggleElevationField() {

    }

    _newWorkout(e) {
        e.preventDefault(); 

        // clear input fields 
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''; 
    
        // place marker in map 
        console.log(mapEvent)
        const {lat, lng} =  mapEvent.latlng;
    
        L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: 'running-popup'}))
        .setPopupContent("Workout")
        .openPopup();
    }
}

const app = new App(); 



