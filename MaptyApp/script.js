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

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10); 

    constructor(coords, distance, duration) {
        this.coords = coords; 
        this.distance = distance;
        this.duration = duration; 
    }
}

class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration); 
        this.cadence = cadence; 
        this.calcPace(); 
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance; 
        return this.pace; 
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration); 
        this.elevationGain = elevationGain; 
        this.calcSpeed(); 
    }

    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60); 
        return this.speed; 
    }
}

const run1 = new Running([39, -12], 5.2, 24, 178); 
const cycling1 = new Cycling([39, -12], 27, 95, 523); 
console.log(run1, cycling1); 

// App architecture 
class App {

    constructor() {
        this.workouts = []; 
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
        const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp)); 
        const allPositive = (...inputs) => inputs.every(inp => inp > 0); 

        e.preventDefault(); 

        // get data from form 
        const type = inputType.value; 
        const distance = +inputDistance.value; 
        const duration = +inputDuration.value;
        const elevation = +inputElevation.value;
        const {lat, lng} =  mapEvent.latlng;
        let workout; 

        
        // if activity running, create running object 
        if (type === 'running') {
            const cadence = +inputCadence.value; 
            // check if data if valid 
            if (
                !validInput(distance, duration, cadence) || 
                !allPositive(distance, duration))
            return alert('Inputs have to be positive numbers!'); 

            workout = new Running([lat, lng], distance, duration, cadence); 
        }

        // if activity cycling, create cycling object 
        if (type === 'cycling') {
            const cadence = +inputElevation.value; 
            // check if data if valid
            if (
                !validInput(distance, duration, cadence) ||
                !allPositive(distance, duration))
            return alert('Inputs have to be positive numbers!'); 

            workout = new Cycling([lat, lng], distance, duration, elevation); 
        }

        // add new object to workout array 
        this.workouts.push(workout); 
        console.log(this.workouts); 

        // render workout on map as marker
        this.renderWorkoutMaker(workout, [lat, lng], type); 

        // render workout on list

        // hide form + clear input fields 
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    }

    renderWorkoutMaker(workout, pos, type) {
        console.log(mapEvent)
    
        L.marker(pos).addTo(map)
        .bindPopup(
            L.popup({
                maxWidth: 250, 
                minWidth: 100, 
                autoClose: false, 
                closeOnClick: false, 
                className: `${type}-popup`}))
        .setPopupContent(`${type.charAt(0).toUpperCase() + type.slice(1)} Workout for distance of ${workout.distance}m`)
        .openPopup();
    }
}

const app = new App(); 



