interface Driveable {
  speed: number;
  drive(): string;
}

class Car implements Driveable {
  speed = 10;

  drive() {
    return `I am driving at ${this.speed}.`;
  }
}

const myCar = new Car();

const startDriving = (vehicle: Driveable) => {
  vehicle.drive();
};

startDriving(myCar);
