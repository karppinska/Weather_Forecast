class Weather {
    constructor(city) {
        this.apiKey = config.SECRET_KEY;
        this.city = city;
    }

    async getWeather() {
        const 
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`), 
            responseData = await response.json();

        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}