class Vehicle {
    constructor(make, model, color, year, mileage) {
        this.color = color
        this.make = make
        this.model = model
        this.year = year
        this.mileage = mileage
    }
    accelerate() {
        console.log("Vroom vroom")
    }

    decelerate() {
        console.log('Less vroom vroom')
    }

    turnOnLight(light) {
        console.log('You;ve turned on your', light, 'light...')
    }
}

let tj = new Vehicle('Beige','Toyota','Camry',2000,'124221')
tj.accelerate
tj.accelerate
tj.decelerate
