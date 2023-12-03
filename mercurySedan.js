//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class MercurySedan extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.timeForMaintenance = false
    }

    loadPassenger (num) {
        this.passengers = num
        if(this.passengers < this.maxPassengers) {
            console.log("There is available room in this vehicle for " + this.passengers + " passengers.")
            this.availableRoom = true      
        } else {
            console.log("There is NOT enough room in this vehicle for " + this.passengers + " passengers.")
            this.availableRoom = false
            
        }
        return this.availableRoom
    }

    // start is already defined in the parent class
    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
            
        } else {
            console.log("engine cannot start...");
            return this.started = false;
            
        }
    }
    
    scheduleService () {
        if (this.mileage > 30000) {
            console.log("Time for maintenance!")
            this.timeForMaintenance = true
        }
        return this.timeForMaintenance
    }

}
//make, model, year, color, mileage
let drewsCar = new MercurySedan('Mercury', 'A28', 2018, 'black', 2500)
//console.log(drewsCar)
drewsCar.start()
drewsCar.scheduleService()
drewsCar.loadPassenger(4)







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
