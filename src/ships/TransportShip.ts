import { CargoCarrier } from "../interfaces/CargoCarrier";
import { SpaceCraft } from "./SpaceCraft";

export class TransportShip extends SpaceCraft implements CargoCarrier {
    private cargoCapacity: number = 500;
    private currentCargo: number = 0;

    constructor(currentCargo: number ,cargoCapacity: number,id: number, name: string, health: number, fuel: number) {
        super(id, name, fuel, health)
       this.cargoCapacity = cargoCapacity
       this.currentCargo = currentCargo
	}

	public getCargoCapacity(): number {
		return this.cargoCapacity;
	}

	public setCargoCapacity(value: number) {
        if (value < 0) {
            this.cargoCapacity = 0;
        } else {
            this.cargoCapacity = value;
        }
    }

	public getCurrentCargo(): number {
		return this.currentCargo;
	}

	public setCurrentCargo(value: number) {
        if (value < 0) {
            this.currentCargo = 0;
        } else if (value > this.cargoCapacity) {
            this.currentCargo = this.cargoCapacity;
        } else {
            this.currentCargo = value;
        }
	}

    loadCargo(amount: number): void {
        if(this.currentCargo + amount > this.cargoCapacity ){
            return;
        } else 
        this.currentCargo += amount
    }

    unloadCargo(amount: number): void {
        if (this.currentCargo - amount < 0) {
            this.currentCargo = 0;
        } else {
            this.currentCargo -= amount;
        }
    }

}