// TODO: Your code goes here

const Vehicle = function (color, engine) {
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.stopping = false;
    this.ridingInterval = null;
    this.currentSpeed = 0;
    this.maxRideSpeed = 0;
}
Vehicle.prototype.getInfo = () => {
    console.log({color: this.color, engine: this.engine, maxSpeed: this.maxSpeed})
}

Vehicle.prototype.upgradeEngine = (engine, maxSpeed) => {
    if (this.currentSpeed === 0) {
        this.engine = engine;
        this.maxSpeed = maxSpeed;
    } else {
        console.log('you cant upgrade an engine while machine is running');
    }
}

Vehicle.prototype.drive = () => {
    this.stoppingInteval = setInterval(() => {
        this.currentSpeed += 20;
        console.log(this.currentSpeed);
        if (this.currentSpeed > this.maxSpeed) {
            console.log('speed is too high! SLOW DOWN');
        }
    },2000);
}

Vehicle.prototype.stop = () => {
    this.maxRideSpeed = this.currentSpeed;
    clearInterval(this.ridingInterval);
    this.stoppingInteval = setInterval(() => {
        this.currentSpeed -=20;
        console.log(this.currentSpeed);
        if (this.currentSpeed >= 0) {
            this.currentSpeed = 0;
            console.log(`Vehicle is stopped. Maximum speed during the drive ${this.maxRideSpeed}`)
        }
    }, 1500);
}

