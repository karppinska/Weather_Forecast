class Weather {
    constructor(city) {
        this.apiKey = '123';
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