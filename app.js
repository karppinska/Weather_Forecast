const 
    storage = new Storage(), 
    locationInStorage = storage.getLocationData(),
    weather = new Weather(locationInStorage.city),
    ui = new UI(),
    changeLocationButton = document.querySelector('#changeLocationButton'), 
    cityInput = document.querySelector('#city');

document.addEventListener('DOMContentLoaded', displayWeather);

changeLocationButton.addEventListener('click', function() {
    weather.changeLocation(cityInput.value);
    storage.setLocationData(cityInput.value);
    displayWeather();
    $('#locationModal').modal('hide'); // bootstrap modal
});

function displayWeather() {
    weather.getWeather()
        .then(data => {
            ui.showWeather(data);
        })
        .catch(error => console.error(error));
}