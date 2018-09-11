class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.image = document.querySelector('#w-image');
        this.description = document.querySelector('#w-desc');
        this.temp = document.querySelector('#w-temp');
        this.humidity = document.querySelector('#w-humidity');
        this.pressure = document.querySelector('#w-pressure');
        this.sunrise = document.querySelector('#w-sunrise');
        this.sunset = document.querySelector('#w-sunset');
    }

    showWeather(data) {
        const {name, weather, main, sys} = data;
        this.setLocationName(name);
        this.setWeatherData(weather[0]);
        this.setMainData(main);
        this.setSysData(sys);
    }

    setLocationName(name) {
        this.location.textContent = name;
    }

    setWeatherData({description, icon}) {
        this.description.textContent = description;
        this.image.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
    }

    setMainData({temp, humidity, pressure}) {
        this.temp.textContent = this.kelvinToFahrenheit(temp);
        this.humidity.textContent = humidity;
        this.pressure.textContent = pressure;
    }

    setSysData({sunrise, sunset}) {
        this.sunrise.textContent = new Date(sunrise).toLocaleTimeString();
        this.sunset.textContent =  new Date(sunset).toLocaleTimeString();;
    }

    kelvinToFahrenheit(value) {
        return (value - 273.15).toFixed();
    }
}
