class Storage {
    constructor() {
        this.defaultCity = 'Cracow';
        this.city;
    }

    getLocationData() {
        if (localStorage.getItem('city')) {
            this.city = localStorage.getItem('city');
        } else {
            this.city = this.defaultCity;
        }

        return {city: this.city};
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}